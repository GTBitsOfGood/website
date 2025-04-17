import * as contentful from 'contentful'
import { MARKS, BLOCKS } from '@contentful/rich-text-types'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import * as dotenv from 'dotenv'

// Rollup plugin that allows importing of Contentful entries.
// To get a specific entry:
//   import entry from '@contentful-entry/{contentType}/{key}'
// If there is only one entry of that content type:
//   import entry from '@contentful-entry/{contentType}'

const ENTRY_PREFIX = '@contentful-entry'
const ENTRIES_PREFIX = '@contentful-entries'

dotenv.config()

/** The Contentful client object. */
const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  host:
    process.env.NODE_ENV === 'production'
      ? 'cdn.contentful.com'
      : 'preview.contentful.com',
  accessToken:
    process.env.NODE_ENV === 'production'
      ? process.env.CONTENTFUL_ACCESS_TOKEN
      : process.env.CONTENTFUL_ACCESS_TOKEN_PREVIEW,
})
// Maximum requests per second (defaults to 14); can be overridden with CONTENTFUL_RATE_LIMIT env var
const MAX_REQUESTS_PER_SEC = parseInt(process.env.CONTENTFUL_RATE_LIMIT || '14', 10);
const REQUEST_INTERVAL = 1000 / MAX_REQUESTS_PER_SEC;

// Simple queue to dispatch API calls at a limited rate
const requestQueue = [];
let queueRunning = false;

/**
 * Enqueue an API call so that each runs REQUEST_INTERVAL ms apart
 * fn should return a Promise
 */
function enqueueRequest(fn) {
  return new Promise((resolve, reject) => {
    requestQueue.push({ fn, resolve, reject });
    if (!queueRunning) {
      queueRunning = true;
      processQueue();
    }
  });
}

function processQueue() {
  if (requestQueue.length === 0) {
    queueRunning = false;
    return;
  }
  const { fn, resolve, reject } = requestQueue.shift();
  fn()
    .then(resolve)
    .catch(reject)
    .finally(() => setTimeout(processQueue, REQUEST_INTERVAL));
}
const schemaCache = new Map();
const entriesCache = new Map();

// Get and cache a Contentful content type schema
async function getSchema(contentType) {
  let promise = schemaCache.get(contentType);
  if (!promise) {
    promise = enqueueRequest(() => client.getContentType(contentType));
    schemaCache.set(contentType, promise);
  }
  return promise;
}

// Get and cache all entries for a content type
async function getAllEntries(contentType) {
  const key = contentType;
  let promise = entriesCache.get(key);
  if (!promise) {
    promise = enqueueRequest(() => client.getEntries({ content_type: contentType, include: 10 }));
    entriesCache.set(key, promise);
  }
  return promise;
}

// Get and cache entries for a content type filtered by key
async function getFilteredEntries(contentType, filterKey) {
  const key = `${contentType}::${filterKey}`;
  let promise = entriesCache.get(key);
  if (!promise) {
    promise = enqueueRequest(() =>
      client.getEntries({ content_type: contentType, 'fields.key': filterKey, limit: 1, include: 10 })
    );
    entriesCache.set(key, promise);
  }
  return promise;
}

async function mapEntry(entry, schema) {
  if (!entry) {
    console.warn(`[content-loader] mapEntry: entry is null or undefined for content type "${schema.sys.id}".`);
    return null;
  }
  const { fields } = entry

  await Promise.all(
    schema.fields
      .filter(({ id }) => fields[id])
      .map(async ({ id, type, ...model }) => {
        switch (type) {
          case 'RichText':
            fields[id] = {
              html: toHtml(fields[id]),
              inlineHtml: toInlineHtml(fields[id]),
            }
            break
          case 'Link':
            fields[id] = await mapLink(fields[id], model.linkType)
            break
          case 'Array':
            fields[id] = await Promise.all(
              fields[id].map((item) => mapLink(item, model.items.linkType))
            )
            break
        }
      })
  )

  return fields
}

async function mapLink(link, linkType) {
  if (!link) {
    console.warn(`[content-loader] mapLink: link is null or undefined for linkType "${linkType}".`);
    return null;
  }
  switch (linkType) {
    case 'Asset':
      return toImg(link)
    case 'Entry':
      if (!link || !link.sys || !link.sys.contentType) return null
      const contentType = link.sys.contentType.sys.id
      const schema = await getSchema(contentType)
      return await mapEntry(link, schema)
  }
}

function getHtmlOptions({ renderMark = {}, renderNode = {}, ...options } = {}) {
  return {
    renderMark: {
      [MARKS.BOLD]: (text) => `<strong>${text}</strong>`,
      [MARKS.ITALIC]: (text) => `<em>${text}</em>`,
      ...renderMark,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, next) =>
        `<p>${next(node.content).replace(/\n/g, '<br/>')}</p>`,
      ...renderNode,
    },
    ...options,
  }
}

function toHtml(document) {
  return documentToHtmlString(document, getHtmlOptions())
}

function toInlineHtml(document) {
  return documentToHtmlString(
    document,
    getHtmlOptions({
      renderNode: {
        [BLOCKS.PARAGRAPH]: (node, next) =>
          next(node.content).replace(/\n/g, '<br/>'),
      },
    })
  )
}

function toImg(link) {
  if (link && link.fields && link.fields.file && link.fields.title && link.fields.file.url) {
    return {
      src: link.fields.file.url,
      alt: link.fields.title,
    }
  }
  return null;
}

export default function contentLoader() {
  return {
    name: 'content-loader',

    resolveId(source) {
      const parts = source.split('/')
      switch (parts[0]) {
        case ENTRY_PREFIX:
        case ENTRIES_PREFIX:
          return source
        default:
          return null
      }
    },

    async load(source) {
      // console.log(source)
      const parts = source.split('/')
      switch (parts[0]) {
        case ENTRY_PREFIX: {
          const [, contentType, key] = parts
          const [schema, entries] = await Promise.all([
            getSchema(contentType),
            getFilteredEntries(contentType, key),
          ])

          const item = await mapEntry(entries.items[0], schema)
          return `export default ${JSON.stringify(item)}`
        }
        case ENTRIES_PREFIX: {
          const [, contentType] = parts
          const [schema, entries] = await Promise.all([
            getSchema(contentType),
            getAllEntries(contentType),
          ])
          let items = await Promise.all(
            entries.items.map((entry) => mapEntry(entry, schema))
          )
          if (items.length && typeof items[0].orderingIndex === 'number') {
            items = items.sort(
              (first, second) => first.orderingIndex - second.orderingIndex
            )
          }

          return `export default ${JSON.stringify(items)}`
        }
        default:
          return null
      }
    },
  }
}

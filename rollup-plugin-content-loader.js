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

if (process.env.NODE_ENV === 'development') dotenv.config()


/** The Contentful client object. */
const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

async function mapEntry(entry, schema) {
  if (!entry) {
    return null
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
              fields[id].map(item => mapLink(item, model.items.linkType))
            )
            break
        }
      })
  )

  return fields
}

async function mapLink(link, linkType) {
  switch (linkType) {
    case 'Asset':
      return toImg(link)
    case 'Entry':
      const contentType = link.sys.contentType.sys.id
      const schema = await client.getContentType(contentType)
      return await mapEntry(link, schema)
  }
}

function getHtmlOptions({ renderMark = {}, renderNode = {}, ...options } = {}) {
  return {
    renderMark: {
      [MARKS.BOLD]: text => `<strong>${text}</strong>`,
      [MARKS.ITALIC]: text => `<em>${text}</em>`,
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
  return {
    src: link.fields.file.url,
    alt: link.fields.title,
  }
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
      const parts = source.split('/')
      switch (parts[0]) {
        case ENTRY_PREFIX: {
          const [, contentType, key] = parts
          const schemaPromise = client.getContentType(contentType)
          const entriesPromise = client.getEntries({
            content_type: contentType,
            'fields.key': key,
            limit: 1,
            include: 10,
          })
          const [schema, entries] = await Promise.all([
            schemaPromise,
            entriesPromise,
          ])

          const item = await mapEntry(entries.items[0], schema)
          return `export default ${JSON.stringify(item)}`
        }
        case ENTRIES_PREFIX: {
          const [, contentType] = parts
          const schemaPromise = client.getContentType(contentType)
          const entriesPromise = client.getEntries({
            content_type: contentType,
            include: 10,
          })
          const [schema, entries] = await Promise.all([
            schemaPromise,
            entriesPromise,
          ])

          let items = await Promise.all(
            entries.items.map(entry => mapEntry(entry, schema))
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

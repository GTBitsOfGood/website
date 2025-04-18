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

export default function contentLoader() {
  // Load .env and .env.<NODE_ENV> in non-production
  if (process.env.NODE_ENV && process.env.NODE_ENV !== 'production') {
    dotenv.config()
    dotenv.config({ path: '.env.' + process.env.NODE_ENV })
  }

  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    host:
      process.env.PREVIEW_MODE === 'true'
        ? 'preview.contentful.com'
        : 'cdn.contentful.com',
    accessToken:
      process.env.PREVIEW_MODE === 'true'
        ? process.env.CONTENTFUL_ACCESS_TOKEN_PREVIEW
        : process.env.CONTENTFUL_ACCESS_TOKEN,
  })

  const MAX_REQUESTS_PER_SEC = parseInt(
    process.env.CONTENTFUL_RATE_LIMIT || '14',
    10
  )
  const REQUEST_INTERVAL = 1000 / MAX_REQUESTS_PER_SEC
  const requestQueue = []
  let queueRunning = false

  function enqueueRequest(fn) {
    return new Promise(function (resolve, reject) {
      requestQueue.push({ fn: fn, resolve: resolve, reject: reject })
      if (!queueRunning) {
        queueRunning = true
        processQueue()
      }
    })
  }

  function processQueue() {
    if (requestQueue.length === 0) {
      queueRunning = false
      return
    }
    const item = requestQueue.shift()
    item.fn()
      .then(item.resolve)
      .catch(item.reject)
      .finally(function () {
        setTimeout(processQueue, REQUEST_INTERVAL)
      })
  }

  // Caches store resolved data only
  const schemaCache = new Map()
  const entriesCache = new Map()

  async function getSchema(contentType) {
    if (schemaCache.has(contentType)) {
      return schemaCache.get(contentType)
    }
    const schema = await enqueueRequest(() =>
      client.getContentType(contentType)
    )
    schemaCache.set(contentType, schema)
    return schema
  }

  async function getAllEntries(contentType) {
    const key = contentType
    if (entriesCache.has(key)) {
      return entriesCache.get(key)
    }
    const entries = await enqueueRequest(() =>
      client.getEntries({ content_type: contentType, include: 10 })
    )
    entriesCache.set(key, entries)
    return entries
  }

  async function getFilteredEntries(contentType, filterKey) {
    const key = contentType + '::' + filterKey
    if (entriesCache.has(key)) {
      return entriesCache.get(key)
    }
    const entries = await enqueueRequest(() =>
      client.getEntries({
        content_type: contentType,
        'fields.key': filterKey,
        limit: 1,
        include: 10,
      })
    )
    entriesCache.set(key, entries)
    return entries
  }

  async function mapEntry(entry, schema) {
    if (!entry) {
      console.warn(
        '[content-loader] mapEntry: entry is null or undefined for content type "' +
          schema.sys.id +
          '".'
      )
      return null
    }
    const fields = entry.fields || {}

    await Promise.all(
      schema.fields
        .filter(f => fields[f.id] != null)
        .map(fieldDef => {
          const id = fieldDef.id
          const type = fieldDef.type

          switch (type) {
            case 'RichText':
              if (!fields[id]) {
                fields[id] = { html: '', inlineHtml: '' }
                break
              }
              fields[id] = {
                html: toHtml(fields[id]),
                inlineHtml: toInlineHtml(fields[id]),
              }
              break

            case 'Link':
              if (!fields[id]) {
                return Promise.resolve()
              }
              return mapLink(fields[id], fieldDef.linkType).then(res => {
                fields[id] = res
              })

            case 'Array':
              if (!fields[id] || !Array.isArray(fields[id])) {
                fields[id] = []
                break
              }
              return Promise.all(
                fields[id].map(item => mapLink(item, fieldDef.items.linkType))
              ).then(resArray => {
                fields[id] = resArray
              })
          }
        })
    )

    return fields
  }

  async function mapLink(link, linkType) {
    if (!link) {
      console.warn(
        '[content-loader] mapLink: link is null or undefined for linkType "' +
          linkType +
          '".'
      )
      if (linkType === 'Asset') {
        return { src: '', alt: 'Image not available' }
      }
      return null
    }
    if (linkType === 'Asset') {
      return toImg(link)
    }
    if (linkType === 'Entry') {
      if (!link.sys || !link.sys.contentType) {
        return null
      }
      const contentType = link.sys.contentType.sys.id
      const schema = await getSchema(contentType)
      return mapEntry(link, schema)
    }
    return null
  }

  function getHtmlOptions(options) {
    options = options || {}
    const renderMark = options.renderMark || {}
    const renderNode = options.renderNode || {}

    const baseMark = {}
    baseMark[MARKS.BOLD] = text => `<strong>${text}</strong>`
    baseMark[MARKS.ITALIC] = text => `<em>${text}</em>`

    const baseNode = {}
    baseNode[BLOCKS.PARAGRAPH] = (node, next) =>
      `<p>${next(node.content).replace(/\n/g, '<br/>')}</p>`

    return {
      renderMark: Object.assign(baseMark, renderMark),
      renderNode: Object.assign(baseNode, renderNode),
    }
  }

  function toHtml(doc) {
    return documentToHtmlString(doc, getHtmlOptions())
  }

  function toInlineHtml(doc) {
    return documentToHtmlString(
      doc,
      getHtmlOptions({
        renderNode: {
          [BLOCKS.PARAGRAPH]: (node, next) =>
            next(node.content).replace(/\n/g, '<br/>'),
        },
      })
    )
  }

  function toImg(link) {
    if (
      !link ||
      !link.fields ||
      !link.fields.file ||
      !link.fields.file.url ||
      !link.fields.title
    ) {
      return { src: '', alt: 'Image not available' }
    }
    return { src: link.fields.file.url, alt: link.fields.title }
  }

  return {
    name: 'content-loader',

    resolveId(source) {
      const parts = source.split('/')
      if (parts[0] === ENTRY_PREFIX || parts[0] === ENTRIES_PREFIX) {
        return source
      }
      return null
    },

    load: async function (source) {
      const parts = source.split('/')
      if (parts[0] === ENTRY_PREFIX) {
        const contentType = parts[1]
        const key = parts[2]
        const schema = await getSchema(contentType)
        const entries = await getFilteredEntries(contentType, key)
        const item = await mapEntry(entries.items[0], schema)
        return 'export default ' + JSON.stringify(item)
      }
      if (parts[0] === ENTRIES_PREFIX) {
        const contentType = parts[1]
        const schema = await getSchema(contentType)
        const entries = await getAllEntries(contentType)
        let items = await Promise.all(
          entries.items.map(entry => mapEntry(entry, schema))
        )
        if (items.length && typeof items[0].orderingIndex === 'number') {
          items.sort((a, b) => a.orderingIndex - b.orderingIndex)
        }
        return 'export default ' + JSON.stringify(items)
      }
      return null
    },
  }
}

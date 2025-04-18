import * as contentful from 'contentful'
import { MARKS, BLOCKS } from '@contentful/rich-text-types'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

const ENTRY_PREFIX = '@contentful-entry'
const ENTRIES_PREFIX = '@contentful-entries'

export default function contentLoader() {
  const client = contentful.default.createClient({
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
    return new Promise((resolve, reject) => {
      requestQueue.push({ fn, resolve, reject })
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
    const { fn, resolve, reject } = requestQueue.shift()
    fn()
      .then(resolve)
      .catch(reject)
      .finally(() => setTimeout(processQueue, REQUEST_INTERVAL))
  }

  // Caches for in-flight promises and resolved values
  const schemaPromiseCache = new Map()
  const schemaValueCache = new Map()
  const entriesPromiseCache = new Map()
  const entriesValueCache = new Map()

  function log(msg, ...args) {
    // console.log(`[content-loader] ${msg}`, ...args)
  }

  async function getSchema(contentType) {
    if (schemaValueCache.has(contentType)) {
      log('schema cache hit for', contentType)
      return schemaValueCache.get(contentType)
    }
    if (!schemaPromiseCache.has(contentType)) {
      log('fetching schema for', contentType)
      const promise = enqueueRequest(() => client.getContentType(contentType))
        .then(schema => {
          schemaValueCache.set(contentType, schema)
          schemaPromiseCache.delete(contentType)
          log('schema fetched and cached for', contentType)
          return schema
        })
        .catch(err => {
          schemaPromiseCache.delete(contentType)
          throw err
        })
      schemaPromiseCache.set(contentType, promise)
    } else {
      log('schema request already in flight for', contentType)
    }
    return schemaPromiseCache.get(contentType)
  }

  async function getAllEntries(contentType) {
    const key = contentType
    if (entriesValueCache.has(key)) {
      log('entries cache hit for', key)
      return entriesValueCache.get(key)
    }
    if (!entriesPromiseCache.has(key)) {
      log('fetching all entries for', key)
      const promise = enqueueRequest(() =>
        client.getEntries({ content_type: contentType, include: 10 })
      )
        .then(entries => {
          entriesValueCache.set(key, entries)
          entriesPromiseCache.delete(key)
          log('entries fetched and cached for', key)
          return entries
        })
        .catch(err => {
          entriesPromiseCache.delete(key)
          throw err
        })
      entriesPromiseCache.set(key, promise)
    } else {
      log('entries request already in flight for', key)
    }
    return entriesPromiseCache.get(key)
  }

  async function getFilteredEntries(contentType, filterKey) {
    const key = `${contentType}::${filterKey}`
    if (entriesValueCache.has(key)) {
      log('filtered entries cache hit for', key)
      return entriesValueCache.get(key)
    }
    if (!entriesPromiseCache.has(key)) {
      log('fetching filtered entries for', key)
      const promise = enqueueRequest(() =>
        client.getEntries({
          content_type: contentType,
          'fields.key': filterKey,
          limit: 1,
          include: 10,
        })
      )
        .then(entries => {
          entriesValueCache.set(key, entries)
          entriesPromiseCache.delete(key)
          log('filtered entries fetched and cached for', key)
          return entries
        })
        .catch(err => {
          entriesPromiseCache.delete(key)
          throw err
        })
      entriesPromiseCache.set(key, promise)
    } else {
      log('filtered entries request already in flight for', key)
    }
    return entriesPromiseCache.get(key)
  }

  async function mapEntry(entry, schema) {
    if (!entry) {
      log('mapEntry: entry is null for', schema.sys.id)
      return null
    }
    const fields = entry.fields

    await Promise.all(
      schema.fields
        .filter(f => fields[f.id] != null)
        .map(fieldDef => {
          const id = fieldDef.id
          const type = fieldDef.type
          switch (type) {
            case 'RichText':
              fields[id] = { html: toHtml(fields[id]), inlineHtml: toInlineHtml(fields[id]) }
              break
            case 'Link':
              return mapLink(fields[id], fieldDef.linkType).then(res => { fields[id] = res })
            case 'Array':
              return Promise.all(fields[id].map(item => mapLink(item, fieldDef.items.linkType)))
                .then(resArray => { fields[id] = resArray })
            default:
              return null
          }
        })
    )

    return fields
  }

  async function mapLink(link, linkType) {
    if (!link) {
      log('mapLink: link is null for type', linkType)
      return null
    }
    if (linkType === 'Asset') return toImg(link)
    if (linkType === 'Entry' && link.sys?.contentType) {
      const contentType = link.sys.contentType.sys.id
      const schema = await getSchema(contentType)
      // clone nested entry too
      const entryClone = JSON.parse(JSON.stringify(link))
      return mapEntry(entryClone, schema)
    }
    return null
  }

  function getHtmlOptions(options = {}) {
    const renderMark = { ...options.renderMark }
    const renderNode = { ...options.renderNode }
    const baseMark = {
      [MARKS.BOLD]: text => `<strong>${text}</strong>`,
      [MARKS.ITALIC]: text => `<em>${text}</em>`,
    }
    const baseNode = {
      [BLOCKS.PARAGRAPH]: (node, next) => `<p>${next(node.content).replace(/\n/g, '<br/>')}</p>`
    }
    return { renderMark: { ...baseMark, ...renderMark }, renderNode: { ...baseNode, ...renderNode } }
  }

  const toHtml = doc => documentToHtmlString(doc, getHtmlOptions())
  const toInlineHtml = doc => documentToHtmlString(doc, getHtmlOptions({ renderNode: { [BLOCKS.PARAGRAPH]: (node, next) => next(node.content).replace(/\n/g, '<br/>') } }))
  const toImg = link => link.fields?.file?.url && link.fields.title ? { src: link.fields.file.url, alt: link.fields.title } : null

  return {
    name: 'content-loader',
    resolveId(source) {
      const parts = source.split('/')
      return [ENTRY_PREFIX, ENTRIES_PREFIX].includes(parts[0]) ? source : null
    },
    async load(source) {
      const parts = source.split('/')
      const prefix = parts[0]
      if (prefix === ENTRY_PREFIX) {
        const [, contentType, key] = parts
        const schema = await getSchema(contentType)

        // fetch raw items
        const rawEntries = key
          ? await getFilteredEntries(contentType, key)
          : await getAllEntries(contentType)
        const rawItems = rawEntries.items || []
        if (rawItems.length === 0) {
          log('load: no entries found for', contentType, key)
          return 'export default null'
        }

        // deep-clone raw entry before mapping to avoid in-place mutations
        const entryCopy = JSON.parse(JSON.stringify(rawItems[0]))
        const mapped = await mapEntry(entryCopy, schema)
        return `export default ${JSON.stringify(mapped)}`
      }

      if (prefix === ENTRIES_PREFIX) {
        const contentType = parts[1]
        const schema = await getSchema(contentType)
        const rawEntries = await getAllEntries(contentType)
        const rawItems = rawEntries.items || []

        // deep-clone all items before mapping
        const clones = rawItems.map(item => JSON.parse(JSON.stringify(item)))
        const mappedItems = await Promise.all(clones.map(item => mapEntry(item, schema)))

        // sort if orderingIndex exists
        mappedItems.sort((a, b) =>
          typeof a.orderingIndex === 'number' && typeof b.orderingIndex === 'number'
            ? a.orderingIndex - b.orderingIndex
            : 0
        )

        return `export default ${JSON.stringify(mappedItems)}`
      }

      return null
    },
  }
}

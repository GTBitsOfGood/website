import * as contentful from 'contentful'
import { MARKS, BLOCKS } from '@contentful/rich-text-types'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

// Rollup plugin that allows importing of Contentful entries.
// To get a specific entry:
//   import entry from '@contentful-entry/{contentType}/{key}'
// If there is only one entry of that content type:
//   import entry from '@contentful-entry/{contentType}'

const ENTRY_PREFIX = '@contentful-entry'
const ENTRIES_PREFIX = '@contentful-entries'

/** The Contentful client object. */
const client = contentful.createClient({
  space: 'zifivti966xh',
  accessToken: 'k7DLuul6fLZfzDiJVGPp0IQTPzz84ihOSVHiA6KOvGk',
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
            switch (model.linkType) {
              case 'Asset':
                fields[id] = toImg(fields[id])
                break
            }
            break
          case 'Array':
            switch (model.items.linkType) {
              case 'Asset':
                fields[id] = fields[id].map(field => toImg(field))
                break
              case 'Entry':
                fields[id] = await Promise.all(
                  fields[id].map(async entry => {
                    const contentType = entry.sys.contentType.sys.id
                    const schema = await client.getContentType(contentType)
                    return await mapEntry(entry, schema)
                  })
                )
                break
            }
            break
        }
      })
  )

  return fields
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

function toInlineHtml(document, options) {
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

function toHtml(document, options) {
  return documentToHtmlString(document, getHtmlOptions())
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
          const [, contentType] = parts
          const schemaPromise = client.getContentType(contentType)
          const entriesPromise = client.getEntries({
            content_type: contentType,
            limit: 1,
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

import * as contentful from 'contentful'

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
      case ENTRY_PREFIX:
      {
        const [, contentType, key] = parts
        const entry = (await client.getEntries({
          'content_type': contentType,
          'fields.key': key,
          limit: 1,
        })).items[0]
        return `export default ${
          JSON.stringify(entry && entry.fields)
        }`
      }
      case ENTRIES_PREFIX:
      {
        const [, contentType] = parts
        const entries = (await client.getEntries({
          'content_type': contentType,
        })).items
        return `export default ${
          JSON.stringify(entries)
        }`
      }
      default:
        return null
      }
    },
  }
}

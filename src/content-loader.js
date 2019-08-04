import * as contentful from 'contentful'
import { MARKS } from '@contentful/rich-text-types'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

/** The Contentful client object. */
const client = contentful.createClient({
  space: '0o8tuvx4wyga',
  accessToken: 'Hvh4g5Ss0ofS80uB3SMjz0FP4XDC098wEL9YO2a0ONM',
})

/**
 * Fetches a page's content from Contentful by its content type and key.
 * @param {ContentType} contentType - The page's content type ID in Contentful.
 * @param {?Key} key - The value of the `key` field for the page. May be
 *     omitted if there is only one page of the speciied `contentType`.
 * @returns {Promise<Fields | undefined>} A promise resolving to an object
 *     containing the page fields, or `undefined` if a page with the specified
 *     `key` was not found..
 * @typedef {'home'} ContentType
 * @typedef {{ [key: string]: any }} Fields
 */
const getPage = async (contentType, key) => {
  const entry = (await client.getEntries({
    'content_type': contentType,
    'fields.key': key,
    limit: 1,
  })).items[0]
  return entry && entry.fields
}

/**
 * Renders a Contentful Rich Text document as an HTML string.
 * @param {Document} document - The Rich Text document from Contentful.
 * @param {Partial<Options>} options - Options for Contentful's HTML renderer.
 * @returns {string} The provided document rendered as HTML.
 * @typedef {import('@contentful/rich-text-types').Document} Document
 * @typedef {import('@contentful/rich-text-html-renderer').Options} Options
 */
const toHtml = (document, { renderMark = {}, ...options } = {}) => (
  documentToHtmlString(document, {
    renderMark: {
      [MARKS.BOLD]: text => `<strong>${text}</strong>`,
      [MARKS.ITALIC]: text => `<em>${text}</em>`,
      ...renderMark,
    },
    ...options,
  })
)

export { client, getPage, toHtml }

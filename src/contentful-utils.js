import { MARKS } from '@contentful/rich-text-types'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

/**
 * Renders a Contentful Rich Text document as an HTML string.
 * @param {Document} document - The Rich Text document from Contentful.
 * @param {Partial<Options>} options - Options for Contentful's HTML renderer.
 * @returns {string} The provided document rendered as HTML.
 * @typedef {import('@contentful/rich-text-types').Document} Document
 * @typedef {import('@contentful/rich-text-html-renderer').Options} Options
 */
export const toHtml = (document, { renderMark = {}, ...options } = {}) =>
  documentToHtmlString(document, {
    renderMark: {
      [MARKS.BOLD]: text => `<strong>${text}</strong>`,
      [MARKS.ITALIC]: text => `<em>${text}</em>`,
      ...renderMark,
    },
    ...options,
  })

export const toImg = (contentFields, imgKey) => {
  const imgContent = contentFields[imgKey]
  return !imgContent
    ? ''
    : {
        src: imgContent.fields.file.url,
        alt: imgContent.fields.title,
      }
}

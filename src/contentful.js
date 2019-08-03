import * as contentful from 'contentful'
import { MARKS } from '@contentful/rich-text-types'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

const client = contentful.createClient({
  space: '0o8tuvx4wyga',
  accessToken: 'Hvh4g5Ss0ofS80uB3SMjz0FP4XDC098wEL9YO2a0ONM',
})

const toHtml = (document, { renderMark = {}, ...options } = {}) => (
  documentToHtmlString(document, {
    renderMark: {
      [MARKS.BOLD]: text => `<strong>${text}</strong>`,
      ...renderMark,
    },
    ...options,
  })
)

export default client
export { toHtml }

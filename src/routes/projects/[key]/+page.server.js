import entries from '@contentful-entries/projectDetails'
import { error } from '@sveltejs/kit'

export async function load({ params }) {
  const { key } = params
  const content = entries.find(entry => entry.key === key)

  if (content) {
    return {
      content
    }
  } else {
    throw error(404, 'Project not found')
  }
}
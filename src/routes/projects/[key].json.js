import entries from '@contentful-entries/projectDetails'

export async function get(req, res, next) {
  const { key } = req.params
  const content = entries.find(entry => entry.key === key)

  if (content) {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(content))
  } else {
    res.writeHead(404)
    res.end()
  }
}

export const removeWrapperPTag = htmlString => {
  if (htmlString.startsWith('<p>') && htmlString.endsWith('</p>')) {
    return htmlString.slice(3, htmlString.length - 4)
  } else {
    return htmlString
  }
}

export const isEmpty = (value) => {
  // get from stackoverflow
  let isEmptyObject = function(a) {
    if (typeof a.length === 'undefined') {
      let hasNonempty = Object.keys(a).some(function nonEmpty(element) {
        return !isEmpty(a[element])
      })
      return hasNonempty ? false : isEmptyObject(Object.keys(a))
    }

    return !a.some(function nonEmpty(element) {
      return !isEmpty(element);
    })
  }
  return (
    value === false ||
    typeof value === 'undefined' ||
    value == null ||
    (typeof value === 'object' && isEmptyObject(value))
  )
}

export const getTitleOfDoc = (htmlDoc) => {
  const titleEl = htmlDoc.querySelector('title')
  if (!titleEl) {
    return null;
  }
  return titleEl.innerText;
}

export const getAttrOfDocElement = (htmlDoc, query, attr) => {
  const el = htmlDoc.querySelector(query)
  if (!el) {
    return null;
  }
  return el.getAttribute(attr);
}

export const fixRelativeUrls = (baseUrl, itemUrl) => {
  const normalizedUrl = itemUrl.toLocaleLowerCase();
  if (normalizedUrl.startsWith('http://') || normalizedUrl.startsWith('https://')) {
    return itemUrl;
  }
  return new URL(itemUrl, baseUrl).href;
}

export const getBaseUrl = (htmlDoc, url) => getAttrOfDocElement(htmlDoc, 'base', 'href') || new URL(url).origin
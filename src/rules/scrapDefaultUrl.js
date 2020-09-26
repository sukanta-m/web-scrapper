import { isEmpty, getTitleOfDoc, getAttrOfDocElement, fixRelativeUrls, getBaseUrl } from './utils';

export default async (url, htmlDoc) => {
  let baseUrl = getBaseUrl(htmlDoc, url);

  const image = [
    getAttrOfDocElement(htmlDoc, 'meta[property="og:logo"]', 'content'),
    getAttrOfDocElement(htmlDoc, 'meta[itemprop="logo"]', 'content'),
    getAttrOfDocElement(htmlDoc, 'img[itemprop="logo"]', 'src'),
    getAttrOfDocElement(htmlDoc, "meta[property='og:image']", 'content'),
    getAttrOfDocElement(htmlDoc, 'img[class*="logo" i]', 'src'),
    getAttrOfDocElement(htmlDoc, 'img[src*="logo" i]', 'src'),
    getAttrOfDocElement(htmlDoc, 'meta[property="og:image:secure_url"]', 'content'),
    getAttrOfDocElement(htmlDoc, 'meta[property="og:image:url"]', 'content'),
    getAttrOfDocElement(htmlDoc, 'meta[property="og:image"]', 'content'),
    getAttrOfDocElement(htmlDoc, 'meta[itemprop="image"]', 'content'),
  ]
    .filter(i => !isEmpty(i))
    .map(i => fixRelativeUrls(baseUrl, i));

  return {
    title: getTitleOfDoc(htmlDoc),
    content: getAttrOfDocElement(htmlDoc, "meta[name='description']", 'content'),
    url: getAttrOfDocElement(htmlDoc, "meta[property='og:url']", 'content'),
    description: getAttrOfDocElement(htmlDoc, "meta[name='description']", 'content'),
    video: [],
    image: image.filter(i => !isEmpty(i)).map(i => fixRelativeUrls(baseUrl, i)),
    type: 'TYPE_DEFAULT'
  };
}

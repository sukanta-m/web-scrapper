
import ScrapDefaultUrl from './scrapDefaultUrl';
import {
  isEmpty
} from './utils'

export default async (url, httpClient) => {
  if (!isEmpty(url)) {
    const response = await httpClient
    const data = await response.text()
    const htmlDoc = new DOMParser().parseFromString(data, 'text/html')
    return await ScrapDefaultUrl(url, htmlDoc);
  }
}
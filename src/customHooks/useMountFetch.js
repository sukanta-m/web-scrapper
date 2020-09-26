import { useState, useEffect } from 'react'

// Helpers
import ScraperWraper from '../rules'

export function useMountFetch(
  url,
  proxyUrl,
  onError,
  onSuccess,
) {
  const [state, setState] = useState({
    response: "",
    loading: true, // Avoid a re-render to set to true
    error: undefined,
  })

  useEffect(() => {
    let isMounted = true;

    const doFetch = async () => {
      const finalStateUpdate = { loading: false, error: undefined };

      try {
        const client = fetch(`${proxyUrl}/${url}`, { headers })

        const data = await ScraperWraper(url, client)
        finalStateUpdate.response = data

        onSuccess && isMounted && onSuccess(data)
        return data
      } catch (err) {
        finalStateUpdate.error = err
        onError && isMounted && onError(err)

        return err
      } finally {
        isMounted && setState(old => ({ ...old, ...finalStateUpdate }))
      }
    }

    // Makes the request
    doFetch();

    // Returns a cleanup function which permits to avoid potential
    // memory leaks and unnecessary network when the component is
    // unmount.
    return () => {
      isMounted = false;
    }
  }, [url])

  return [state.response, state.loading, state.error]
}

/** headers passed to the fetch request */
const headers = { 'x-requested-with': '', 'Access-Control-Allow-Origin': '*' }
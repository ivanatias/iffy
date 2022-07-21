import { useEffect } from 'react'

export const useAsync = (
  asyncFn,
  successFunction,
  cleanUpFunction,
  dependencies
) => {
  useEffect(() => {
    let isMounted = true
    asyncFn().then((results) => {
      if (isMounted) successFunction(results)
    })

    return () => {
      isMounted = false
      cleanUpFunction && cleanUpFunction()
    }
  }, dependencies || [])
}

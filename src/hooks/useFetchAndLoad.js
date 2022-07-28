import { useState, useEffect } from 'react'

export const useFetchAndLoad = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  let controller

  const callEndpoint = async (apiCall) => {
    if (apiCall.controller) controller = apiCall.controller
    setLoading(true)
    let response = null
    try {
      response = await apiCall.call
      if (!response.ok) {
        throw new Error(`Request failed with status code ${response.status}`)
      }
      const results = await response.json()
      return results
    } catch (error) {
      setError(error)
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const cancelEndpointCall = () => {
    setLoading(false)
    controller && controller.abort()
  }

  useEffect(() => {
    return () => {
      cancelEndpointCall()
    }
  }, [])

  return { callEndpoint, loading, error }
}

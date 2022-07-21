import { useState, useEffect } from 'react'

export const useFetchAndLoad = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  let controller

  const callEndpoint = async (apiCall) => {
    if (apiCall.controller) controller = apiCall.controller
    setLoading(true)
    let response = null
    try {
      response = await apiCall.call
      if (!response.ok) {
        setLoading(false)
        throw new Error(`Request failed with status code ${response.status}`)
      }
      const results = await response.json()
      setLoading(false)
      return results
    } catch (error) {
      setError(error)
      console.log(error)
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

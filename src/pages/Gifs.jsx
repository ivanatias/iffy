import React, { useState } from 'react'
import { Grid } from '../components'
import { useFetchAndLoad } from '../hooks/useFetchAndLoad'
import { useAsync } from '../hooks/useAsync'
import { getGifs } from '../services/public.service.gifs'
import { gifsAdapter } from '../adapters/adapter.gifs'

const Gifs = () => {
  const [gifs, setGifs] = useState([])
  const { callEndpoint, loading, error } = useFetchAndLoad()

  const getApiData = async () => await callEndpoint(getGifs())

  const adaptGifs = (results) => {
    setGifs(gifsAdapter(results.data))
  }

  useAsync(getApiData, adaptGifs)

  if (loading) return <div>Loading...</div>

  if (error) return <div>{error.message}</div>

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error.message}</div>
      ) : gifs.length ? (
        <Grid items={gifs} />
      ) : (
        <div>No results found</div>
      )}
    </>
  )
}

export default Gifs

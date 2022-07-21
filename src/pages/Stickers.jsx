import React, { useState } from 'react'
import { Grid } from '../components'
import { useFetchAndLoad } from '../hooks/useFetchAndLoad'
import { useAsync } from '../hooks/useAsync'
import { getStickers } from '../services/public.service.stickers'
import { stickersAdapter } from '../adapters/adapter.stickers'

const Stickers = () => {
  const [stickers, setStickers] = useState([])
  const { callEndpoint, loading, error } = useFetchAndLoad()

  const getApiData = async () => await callEndpoint(getStickers())

  const adaptStickers = (results) => {
    setStickers(stickersAdapter(results.data))
  }

  useAsync(getApiData, adaptStickers)

  if (loading) return <div>Loading...</div>

  if (error) return <div>{error.message}</div>

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error.message}</div>
      ) : stickers.length ? (
        <Grid items={stickers} />
      ) : (
        <div>No results found</div>
      )}
    </>
  )
}

export default Stickers

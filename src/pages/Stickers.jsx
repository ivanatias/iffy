import React, { useState } from 'react'
import { Fallback, Grid, GridSkeleton, NextButton } from '../components'
import { useFetchAndLoad } from '../hooks/useFetchAndLoad'
import { useAsync } from '../hooks/useAsync'
import { usePagination } from '../hooks/usePagination'
import { getStickers } from '../services/public.service.stickers'
import { stickersAdapter } from '../adapters/adapter.stickers'

const Stickers = ({ searchTerm }) => {
  const [stickers, setStickers] = useState([])
  const { page, nextPage, hasMorePages, totalResultsSetter } = usePagination()
  const { callEndpoint, loading, error } = useFetchAndLoad()

  const getApiData = async () =>
    await callEndpoint(getStickers(searchTerm, page))

  const adaptStickers = (results) => {
    if (results) {
      totalResultsSetter(results.pagination.total_count)
      setStickers((prevStickers) =>
        prevStickers.concat(stickersAdapter(results.data))
      )
    }
  }

  useAsync(getApiData, adaptStickers, null, [searchTerm, page])

  return (
    <>
      {error ? (
        <Fallback error={error} />
      ) : loading && stickers.length === 0 ? (
        <GridSkeleton />
      ) : stickers.length === 0 ? (
        <Fallback />
      ) : (
        <Grid items={stickers} />
      )}
      {stickers.length > 0 && (
        <NextButton
          nextPage={nextPage}
          hasMorePages={hasMorePages}
          loading={loading}
        />
      )}
    </>
  )
}

export default Stickers

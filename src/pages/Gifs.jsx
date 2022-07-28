import React, { useState } from 'react'
import { Grid, Fallback, GridSkeleton, NextButton } from '../components'
import { useFetchAndLoad } from '../hooks/useFetchAndLoad'
import { useAsync } from '../hooks/useAsync'
import { usePagination } from '../hooks/usePagination'
import { getGifs } from '../services/public.service.gifs'
import { gifsAdapter } from '../adapters/adapter.gifs'

const Gifs = ({ searchTerm }) => {
  const [gifs, setGifs] = useState([])
  const { page, nextPage, hasMorePages, totalResultsSetter } = usePagination()
  const { callEndpoint, loading, error } = useFetchAndLoad()

  const getApiData = async () => await callEndpoint(getGifs(searchTerm, page))

  const adaptGifs = (results) => {
    if (results) {
      totalResultsSetter(results.pagination.total_count)
      setGifs((prevGifs) => prevGifs.concat(gifsAdapter(results.data)))
    }
  }

  useAsync(getApiData, adaptGifs, null, [searchTerm, page])

  return (
    <>
      {error ? (
        <Fallback error={error} />
      ) : loading && gifs.length === 0 ? (
        <GridSkeleton />
      ) : gifs.length === 0 ? (
        <Fallback />
      ) : (
        <Grid items={gifs} />
      )}
      {gifs.length > 0 && (
        <NextButton
          nextPage={nextPage}
          hasMorePages={hasMorePages}
          loading={loading}
        />
      )}
    </>
  )
}

export default Gifs

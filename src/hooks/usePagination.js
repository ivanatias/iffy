import { useState } from 'react'

const RESULTS_PER_PAGE = 20

export const usePagination = () => {
  const [page, setPage] = useState(0)
  const [totalResults, setTotalResults] = useState(0)
  const [hasMorePages, setHasMorePages] = useState(true)

  const TOTAL_PAGES = Math.floor(totalResults / RESULTS_PER_PAGE)

  const totalResultsSetter = (totalNumOfResults) => {
    setTotalResults(totalNumOfResults)
  }

  const nextPage = () => {
    if (page < TOTAL_PAGES) {
      setPage((prevPage) => prevPage + 1)
    } else {
      setHasMorePages(false)
    }
  }

  return { page, hasMorePages, nextPage, totalResultsSetter }
}

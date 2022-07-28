import { useSearchParams } from 'react-router-dom'

export const useSearch = () => {
  const [searchParams] = useSearchParams()
  const searchTerm = searchParams.get('search')

  return { searchTerm }
}

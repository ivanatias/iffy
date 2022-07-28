import { Routes, Route, useLocation } from 'react-router-dom'
import { Layout, LoadScreen } from './components'
import { Gifs, Stickers } from './pages'
import { useSearch } from './hooks/useSearch'

const App = () => {
  const { searchTerm } = useSearch()
  const { pathname } = useLocation()

  if (pathname === '/') return <LoadScreen />

  return (
    <Layout>
      <Routes>
        <Route
          path='/gifs'
          element={<Gifs key={searchTerm} searchTerm={searchTerm} />}
        />
        <Route
          path='/stickers'
          element={<Stickers key={searchTerm} searchTerm={searchTerm} />}
        />
      </Routes>
    </Layout>
  )
}

export default App

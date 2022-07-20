import { Routes, Route } from 'react-router-dom'
import { Layout } from './components'
import { Gifs, Stickers } from './pages'

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/gifs' element={<Gifs />} />
        <Route path='/stickers' element={<Stickers />} />
      </Routes>
    </Layout>
  )
}

export default App

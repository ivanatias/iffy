import React from 'react'
import { Header, Footer, Container } from '../components'

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  )
}

export default Layout

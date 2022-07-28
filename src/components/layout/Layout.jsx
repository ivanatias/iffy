import React from 'react'
import { Header, Footer, Container } from '../../components'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}

export default Layout

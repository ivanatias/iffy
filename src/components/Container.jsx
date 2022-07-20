import React from 'react'

const Container = ({ children }) => {
  return (
    <section className='flex flex-col py-8 px-4 max-w-7xl mx-auto'>
      {children}
    </section>
  )
}

export default Container

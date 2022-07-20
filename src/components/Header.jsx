import React from 'react'
import { Search, Section } from '../components'

const Header = () => {
  return (
    <header className='flex flex-col gap-4 items-center'>
      <h1 className='text-6xl tracking-wider'>Iffy</h1>
      <div className='flex flex-col gap-3 items-center w-full'>
        <Search />
        <Section />
      </div>
    </header>
  )
}

export default Header

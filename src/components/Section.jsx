import React from 'react'
import { Link } from 'react-router-dom'

const sections = [
  {
    name: 'Gifs',
    path: '/gifs',
  },
  {
    name: 'Stickers',
    path: '/stickers',
  },
]

const Section = () => {
  return (
    <div className='flex items-center justify-center gap-3'>
      {sections.map((section, index) => (
        <Link
          key={section.name + index}
          className='text-sm lg:text-base hover:underline hover:text-red-700 cursor-pointer transition duration-200 ease'
          to={section.path}
        >
          {section.name}
        </Link>
      ))}
    </div>
  )
}

export default Section

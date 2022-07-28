import React from 'react'
import { Link, useLocation } from 'react-router-dom'

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

const activeStyle = 'text-red-600'

const Section = () => {
  const { pathname } = useLocation()

  return (
    <div className='flex items-center justify-center gap-3'>
      {sections.map((section, index) => (
        <Link
          key={section.name + index}
          className={`text-gray-100 text-sm lg:text-base hover:underline cursor-pointer transition duration-200 ease ${
            pathname === section.path && activeStyle
          }`}
          to={section.path}
        >
          {section.name}
        </Link>
      ))}
    </div>
  )
}

export default Section

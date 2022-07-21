import React from 'react'
import placeholder from '../assets/placeholder.webp'

const Grid = ({ items }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-content-center w-full gap-6 my-5'>
      {items.map((item) => (
        <div key={item.id} className='flex flex-col gap-2 items-center'>
          <div className='flex items-center gap-2'>
            <img
              src={item.userAvatar || placeholder}
              alt={item.username}
              className='w-8 h-8 rounded-full object-cover'
            />
            <p className='text-sm lg:text-base font-semibold'>
              {item.username}
            </p>
          </div>
          <img
            src={item.url}
            alt={item.title}
            height={item.height}
            width={item.width}
            className='rounded-lg'
          />
          <h2 className='text-base text-center 2xl:text-lg font-bold'>
            {item.title}
          </h2>
        </div>
      ))}
    </div>
  )
}

export default Grid

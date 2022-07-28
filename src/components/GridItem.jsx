import React from 'react'
import placeholder from '../assets/placeholder.webp'

const GridItem = ({ item }) => {
  return (
    <div className='flex flex-col gap-2 items-center'>
      <div className='flex items-center gap-2'>
        <img
          src={item.userAvatar || placeholder}
          alt={item.username}
          className='w-8 h-8 rounded-full object-cover'
        />
        <p className='text-sm lg:text-base font-semibold text-gray-100'>
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
      <h2 className='text-base text-center 2xl:text-lg font-bold text-gray-100'>
        {item.title}
      </h2>
    </div>
  )
}

export default GridItem

import React from 'react'
import SadTrollFace from '../assets/SadTrollFace.webp'

const Fallback = ({ error }) => {
  return (
    <div className='mt-5 flex flex-col items-center gap-5 w-full'>
      <img
        src={SadTrollFace}
        alt='No results found or encountered an error'
        width={150}
        height={120}
      />
      <p className='text-base 2xl:text-lg text-gray-100 font-semibold text-center'>
        {error ? error.message : 'No results found.'}
      </p>
    </div>
  )
}

export default Fallback

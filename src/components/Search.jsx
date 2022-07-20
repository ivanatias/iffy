import React from 'react'

const Search = () => {
  return (
    <form className='w-full max-w-md'>
      <input
        className='border-none outline-none bg-gray-100 rounded-sm w-full py-2 px-3 placeholder:text-gray-400 text-sm lg:text-base'
        placeholder='Search...'
      />
    </form>
  )
}

export default Search

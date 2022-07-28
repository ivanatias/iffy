import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const Search = () => {
  const [input, setInput] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  const handleSearch = (event) => {
    setInput(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate(input ? '?search=' + input : location.pathname)
    setInput('')
  }

  return (
    <form
      className='flex flex-col gap-5 sm:flex-row sm:gap-0 items-center w-full max-w-md'
      onSubmit={handleSubmit}
    >
      <input
        value={input || ''}
        className='border-none outline-none bg-gray-100 w-full py-2 px-3 placeholder:text-gray-400 text-sm lg:text-base'
        placeholder='Search some funny stuff'
        onChange={handleSearch}
      />
      <button
        className='w-full max-w-md sm:w-fit py-2 px-8 text-gray-100 bg-red-600 font-bold text-sm lg:text-base cursor-pointer hover:bg-red-700 transition duration-150 disabled:bg-red-800'
        type='submit'
        disabled={!input}
      >
        Search
      </button>
    </form>
  )
}

export default Search

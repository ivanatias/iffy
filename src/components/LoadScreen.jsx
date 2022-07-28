import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const LoadScreen = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/gifs', { replace: true })
    }, 2500)

    return () => {
      clearTimeout(timeout)
    }
  }, [])
  return (
    <div className='h-screen grid place-content-center'>
      <h1 className='text-7xl italic text-gray-100 animate-bounce text-center'>
        Iffy
      </h1>
    </div>
  )
}

export default LoadScreen

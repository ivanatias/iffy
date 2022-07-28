import React from 'react'
import giphy from '../../assets/poweredby.png'

const Footer = () => {
  return (
    <div className='flex items-center justify-center py-5'>
      <img src={giphy} alt='Powered by Giphy' width={200} />
    </div>
  )
}

export default Footer

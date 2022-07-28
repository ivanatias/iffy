import React from 'react'
import { GridItem } from '../components'

const Grid = ({ items }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-content-center w-full gap-6 my-5'>
      {items.map((item, index) => (
        <GridItem key={item.id + index} item={item} />
      ))}
    </div>
  )
}

export default Grid

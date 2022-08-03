import React from 'react'
import { GridItemSkeleton } from '../../components'
import { createSkeletonElements } from '../../utilities/fake-skeleton-elements.utility'

const GridSkeleton = () => {
  const skeletonElements = createSkeletonElements()

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-content-center w-full gap-6 my-5'>
      {skeletonElements.map(() => (
        <GridItemSkeleton key={Math.random(Math.floor() * 1000)} />
      ))}
    </div>
  )
}

export default GridSkeleton

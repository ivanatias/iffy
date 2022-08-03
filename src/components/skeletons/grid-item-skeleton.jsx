import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const GridItemHeader = () => (
  <div className='flex items-center gap-2'>
    <p>
      <Skeleton circle={true} width={32} height={32} />
    </p>
    <p>
      <Skeleton width={64} height={20} />
    </p>
  </div>
)

const GridItemImage = () => (
  <div>
    <Skeleton width={200} height={100} />
  </div>
)

const GridItemTitle = () => (
  <h2>
    <Skeleton width={144} height={24} />
  </h2>
)

const GridItemSkeleton = () => {
  return (
    <SkeletonTheme baseColor='#9ca3af'>
      <div className='flex flex-col gap-2 items-center'>
        <GridItemHeader />
        <GridItemImage />
        <GridItemTitle />
      </div>
    </SkeletonTheme>
  )
}

export default GridItemSkeleton

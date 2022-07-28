import React from 'react'

const NextButton = ({ nextPage, hasMorePages, loading }) => (
  <div className='flex items-center justify-center mt-5'>
    <button
      className='py-2 px-8 text-gray-100 bg-red-600 rounded-sm font-bold text-sm 2xl:text-base cursor-pointer hover:bg-red-700 transition duration-150 disabled:bg-red-800'
      onClick={() => nextPage()}
      disabled={!hasMorePages}
    >
      {loading ? 'Loading...' : !hasMorePages ? 'No more results' : 'Load more'}
    </button>
  </div>
)

export default NextButton

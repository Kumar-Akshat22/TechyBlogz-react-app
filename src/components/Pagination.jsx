import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function Pagination() {

  const { page,handlePageChange,totalPages } = useContext(AppContext);
  return (
    <div className='w-full flex justify-center items-center border fixed bottom-0 bg-white footer'>
      <div className='w-11/12 max-w-[700px] flex justify-between items-center py-2'>
        <div className='flex gap-x-2'>

          { 
            page > 1 && (<button onClick={() => handlePageChange(page-1)} className='rounded-md border px-4 py-1 btnPrev'>Previous</button>)
          }

          {
            page<totalPages && (<button onClick={() => handlePageChange(page+1)} className='rounded-md border px-4 py-1 btnNext'>Next</button>)
          }

        </div>
        
        <p className='font-bold text-sm pageTracker'>
          Page {page} of {totalPages}
        </p>

      </div>
    </div>
  )
}

export default Pagination
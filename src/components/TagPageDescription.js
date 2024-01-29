import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function TagPageDescription() { 

    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");

  return (
    <div className='flex items-center gap-2 mt-6 ml-2'>
        <button onClick={()=>navigation(-1)} className='rounded-md border px-4 py-1'>
            Back
        </button>

        <span className='font-bold text-xl'>Blogs Tagged <span className='text-blue-700 underline'>#{tag}</span></span>
    </div>
  )
}

export default TagPageDescription
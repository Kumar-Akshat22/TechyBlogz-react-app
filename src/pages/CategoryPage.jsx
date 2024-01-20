import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';
import { AppContext } from '../context/AppContext';

function CategoryPage() {

  const navigation = useNavigate();
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);
  const { theme } = useContext(AppContext);

  return (
    <div className='w-full' id={theme}>

      <div className='w-11/12 max-w-[700px] mx-auto flex flex-col'>

        <div className='flex items-center gap-2 mt-9'>
          <button onClick={()=>navigation(-1)} className='rounded-md border px-4 py-1 btnBack'>
            Back
          </button>

          <h2 className='font-bold text-xl categoryDescription'>
            Blogs on <span className='underline category'>{category}</span>
          </h2>
        </div>
      
        <Blogs />
      </div>
      <Pagination />
    </div>
  )
}

export default CategoryPage
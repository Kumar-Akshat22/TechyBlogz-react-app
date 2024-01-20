import React, { useContext } from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';
import { AppContext } from '../context/AppContext';
import TagPageDescription from '../components/TagPageDescription'
function TagPage() {

    const { theme } = useContext(AppContext);

  return (

    <div className='w-full' id={theme}>

      <div className='w-11/12 max-w-[700px] mx-auto flex flex-col'>

        <TagPageDescription />
        <Blogs />
      </div>
        <Pagination />
    </div>
    
  )
}

export default TagPage
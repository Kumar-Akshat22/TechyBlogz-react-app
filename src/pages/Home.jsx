import React, { useContext } from 'react'
import Header from '../components/Header'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'
import { AppContext } from '../context/AppContext'

function Home() {

    const { theme } = useContext(AppContext);
    
    return (

    <div className='w-full' id={theme}>

        <div className='w-11/12 max-w-[700px] mx-auto'>
            <Blogs />
        </div>
        <Pagination />
    </div>
    )
}

export default Home
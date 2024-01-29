import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import BlogDetails from './BlogDetails';


function Blogs() {

    //Consume the context API
    const { posts , loading } = useContext(AppContext);
    console.log(posts);
    return (
        <div className='w-full min-h-screen max-w-[680px] py-8 flex flex-col gap-y-11 mx-auto mt-[0px] mb-[40px]'>
            {
                loading ? (<Spinner />) : (
                    posts.length === 0 ? (<div><p>No Posts</p></div>) : (posts.map( (post) => (
                        <BlogDetails key={post.id} post ={post}/>
                    )))
                )
            }
        </div>
    )
}

export default Blogs
import React from "react";
import { NavLink } from "react-router-dom";

function BlogDetails({post}) {
    
    return (
        <div className="flex flex-col justify-center blogCard">
            
            <div className="hover:underline">

                <NavLink to={`/blog/${post.id}`}>
                    <p className="font-bold text-[1.125rem] leading-5 postTitle">
                        {post.title}
                    </p>
                </NavLink>
            </div>

            <div className="mt-2">

                <p className="text-sm postBy"> 
                    By <span className="italic">{post.author}</span> On
                    <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
                        <span className="underline font-bold ml-1">
                            {post.category}
                        </span>
                    </NavLink>
                </p>

                <p className="text-sm postDate">Posted On {post.date}</p>
            </div>

            <div className="mt-5 postContent">
                <p>{post.content}</p>
            </div>

            <div className="mt-3">
                {post.tags.map((tag, index) => (
                    
                        <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
                            <span className="text-sm m-1 text-blue-700 font-medium hover:underline flex-wrap postTags">{`#${tag}`}</span>
                        </NavLink>
                    
                ))}
            </div>
        </div>
    )
}

export default BlogDetails;

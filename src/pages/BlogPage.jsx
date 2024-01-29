import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Spinner from "../components/Spinner";
import BlogDetails from "../components/BlogDetails";

function BlogPage() {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api";
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const { loading, setLoading, theme } = useContext(AppContext);
    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs() {
        setLoading(true);
        let url = `${newBaseUrl}/get-blog?blogId=${blogId}`;
        console.log("The URL is:");
        console.log(url);

        try {
            const res = await fetch(url);
            const data = await res.json();

            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
            console.log(data);
        } catch (error) {
            console.log("Error aa gaya in BlogID wali call");
            setBlog(null);
            setRelatedBlogs([]);
        }

        setLoading(false);
    }

    useEffect(() => {
        if (blogId) {
            fetchRelatedBlogs();
        }
    }, [location.pathname]);
    return (

        <div className="w-full" id={theme}>
            
            <div className="w-11/12 max-w-[700px] mx-auto flex flex-col">
                <div className="mt-2">
                    <button
                        onClick={() => navigation(-1)}
                        className="rounded-md border px-4 py-1 mt-5 btnBack"
                    >
                        Back
                    </button>
                </div>

                <div className="mt-[30px]">
                    {loading ? (
                        <Spinner />
                    ) : blog ? (
                        <div  className="flex flex-col gap-y-9 mb-3">
                            <BlogDetails post={blog} />
                            <h2 className="mt-1 font-bold text-3xl relatedBlogs">Related Blogs</h2>
                            {relatedBlogs.map((post) => (
                                <div key={post.id}>
                                    <BlogDetails post={post} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div>
                            <p>No Blog Found</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default BlogPage;

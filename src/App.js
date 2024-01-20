import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import "./App.css";
import { Routes, Route, useSearchParams, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import TagPage from "./pages/TagPage";
import BlogPage from "./pages/BlogPage";
import CategoryPage from "./pages/CategoryPage";
import Header from "./components/Header";

export default function App() {

  const [searchParams , setSearchParams] = useSearchParams();
  const location = useLocation(); 
  const { fetchBlogPost,theme } = useContext(AppContext);
  
  useEffect(() => {

    const page = searchParams.get("page") ?? 1;

    if(location.pathname.includes("tags")){

      // Iska matlab tag wala page show karna hain 
      const tag = location.pathname.split("/").at(-1).replace("-"," ");
      fetchBlogPost(Number(page) , tag);

    }

    else if(location.pathname.includes("categories")){

      // Iska matlab particular category waala page show karna hain
      const category = location.pathname.split("/").at(-1).replace("-"," ");
      fetchBlogPost(Number(page) , null , category);

    }

    else{

      fetchBlogPost(Number(page));
    }


  }, [location.pathname , location.search]);

  return (

    <>

      <Header></Header>
      <Routes>

          <Route path="/" element={<Home></Home>} />
          <Route path="/blog/:blogId" element={<BlogPage />} />
          <Route path="/tags/:tag" element={<TagPage />} />
          <Route path="/categories/:category" element={<CategoryPage />} />
        
      </Routes>
    </>

  );
}

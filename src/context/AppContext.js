import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import useLocalStorage from "use-local-storage";
import { useNavigate } from "react-router-dom";

// Step - 1: Create the Context
export const AppContext = createContext();

export default function AppContextProvider({ children }){

    const [loading , setLoading] = useState('false');
    const [posts , setPosts] = useState([]);
    const [page , setPage] = useState(1);
    const [totalPages , setTotalPages] = useState(null);
    const navigate = useNavigate();

    // useLocalStorage hook is used to temporarily store the current theme value so that on refreshing the page the theme is preserved
    const [theme , setTheme] = useLocalStorage('theme' , 'Light');
    
    function clickHandler(){

        setTheme(curr => 

            curr==='Light' ? 'Dark' : 'Light'

        )
    }

    // API call
    async function fetchBlogPost(page = 1 , tag=null , category){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        if(tag){

            url+= `&tag=${tag}`;
        }

        if(category){

            url+= `&category=${category}`; 
        }

        try{

            const result = await fetch(url)
            const data = await result.json();
            
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);

        }

        catch(error){
            
            console.log('Error in Fetching Data');
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }

        setLoading(false);
    }

    function handlePageChange(page){

        navigate( { search: `?page=${page}` } )
        setPage(page);  

    }


    const value = {
        loading,setLoading,posts,setPosts,page,setPage,totalPages,setTotalPages,fetchBlogPost,handlePageChange,theme,setTheme,clickHandler
    }

    // Step - 2: Context Provider
    return <AppContext.Provider value={value}>
    { children }
    </AppContext.Provider>
        


}
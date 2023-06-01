import './pagesstyles.css';
import { request } from 'graphql-request';
import React, { useState, useEffect } from "react";


const Pages = () => {
    const [blogs, setBlogs] = useState([]);
 
    useEffect(() => {
     const fetchBlogs = async () => {
         const { blogappsmwendwa } = await request(
             ` `{
                 blogappsmwendwa {
                     hereWeGoWithTheBlogapp
                     slugidentifier
         
            loremIpsumLoremIpsum
                 }
             }`
         );
         setBlogs(blogappsmwendwa);
     };
     fetchBlogs();
    }, []);
 
 
 
     return (
         
                 
    

 
            <div className="pagesection">
                     
                         {blogs.map((blogapp) => (
                         <p>{blogapp.loremIpsumLoremIpsum}</p>
                     ))}
                     
                         <div>
                             
                         </div>
                     </div>
                 
 
    )
}




export default Pages;







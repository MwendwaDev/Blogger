import "./Blogcardstyles.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/claudio-testa--SO3JtE3gZo-unsplash.jpg";
import image2 from "../assets/tomoko-uji-eriuKJwcdjI-unsplash.jpg";
import image3 from "../assets/henry-be-IicyiaPYGGI-unsplash.jpg";


import { request } from 'graphql-request';
const Blogcard = () => {
   const [blogs, setBlogs] = useState([]);
   
   useEffect(() => {
    const fetchBlogs = async () => {
        const { blogappsmwendwa } = await request(
            ``{
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
        <div className="work-container">
            <h1 className="project-heading">All Blogs</h1>
            <div className="project-container">
                <div className="project-card">
                
                    <img src={image1} alt="nature" />
                
                    
                   
                    <h2 className="project-title">Content fetched from Hygraph CMS</h2>
                    <div className="pro-details">
                        {blogs.map((blogapp) => (
                    
                        
                        <p>{blogapp.hereWeGoWithTheBlogapp}</p>
                    ))}
                    
                    
                    <div>
                    <Link to="/Page" className="btn">Read More</Link>
                        </div>
                    </div>
                </div>




                <div className="project-card">
                    <img src={image2} alt="nature" />
                    <h2 className="project-title">Content fetched from Hygraph CMS</h2>
                    <div className="pro-details">
                        {blogs.map((blogapp) => (
                        <p>{blogapp.hereWeGoWithTheBlogapp}</p>
                    ))}
                    
                        <div>
                            <Link to="/Page" className="btn">Read More</Link>
                        </div>
                    </div>
                </div>


                


                <div className="project-card">
                    <img src={image3} alt="nature" />
                    <h2 className="project-title">Content fetched from Hygraph CMS</h2>
                    <div className="pro-details">
                        {blogs.map((blogapp) => (
                        <p>{blogapp.hereWeGoWithTheBlogapp}</p>
                    ))}
                    
                    <div>
                    <Link to="/Page" className="btn">Read More</Link>
                        </div>
                    </div>
                </div>
            </div>


            



            
        </div>
        
            

                    
                   
    )
    }
            
                    
        

export default Blogcard;
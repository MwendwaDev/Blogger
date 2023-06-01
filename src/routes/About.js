import React from "react";
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer";
import Heroimg2 from "../components/Heroimg2";
import Aboutimg from "../components/Aboutimg";


const About = () => {
    return <div>
        <Navbar />

        <Heroimg2 heading="A little Something about me" 
        text="Blog app about section?" />

        <Aboutimg />
        

       

        <Footer />
    </div>
};




export default About;





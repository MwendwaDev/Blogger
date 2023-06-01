import React from 'react';
import Navbar from "../components/Navbar"; 
import Pages from "../components/Pages";
import Footer from "../components/Footer";
import Heroimg2 from "../components/Heroimg2";



const Page = () => {
    return <div>
        <Navbar />

        <Heroimg2 heading="Read more here" 
        text="And, why A of One?" />
        

        <Pages />

       

        <Footer />
    </div>
};

export default Page;

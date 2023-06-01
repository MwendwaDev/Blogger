import React from 'react';
import "./index.css";
import About from "./routes/About";
import Blogs from "./routes/Blogs";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import { Route, Routes} from "react-router-dom";
import Page from "./routes/Page";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/About" element={<About />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Page" element={<Page />} />


      </Routes>


    </>
  );
}

export default App;

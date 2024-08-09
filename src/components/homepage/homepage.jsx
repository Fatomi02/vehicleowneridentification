/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import Navbar from "./navbar/navbar";
import './homepage.css'
import Dashboard from "./dashboard/dashboard";
import Article from "./article/article";
import Contact from "./contact/contact";
import Footer from "./footer/footer";


function Homepage () {
    return (<>
     <Navbar  />
     <Dashboard />
     <Article />
    <Contact />
    <Footer />
    </>)

}

export default Homepage
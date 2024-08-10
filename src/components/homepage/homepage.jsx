/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from "react";
import axios from "axios";
import Navbar from "./navbar/navbar";
import './homepage.css'
import Dashboard from "./dashboard/dashboard";
import Article from "./article/article";
import Contact from "./contact/contact";
import Footer from "./footer/footer";


function Homepage () {
    const [toggle, setToggle] = useState(false)
    const dataChild = (data) => {
        setToggle(data)
    }
    return (<>
    {
        toggle ? 
        <>
            <Navbar setter={dataChild} />
        </> : 
        <>
            <Navbar setter={dataChild} />
            <Dashboard />
            <Article />
            <Contact />
            <Footer />
        </>
    }

    </>)

}

export default Homepage
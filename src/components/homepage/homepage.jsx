/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect, useRef} from "react";
import { useNavigate } from "react-router-dom";
import { useIdleTimer } from "react-idle-timer";
import axios from "axios";
import Navbar from "./navbar/navbar";
import Dashboard from "./dashboard/dashboard";
import Article from "./article/article";
import Contact from "./contact/contact";
import Footer from "./footer/footer";


function Homepage () {
    const navigate = useNavigate()
    const idleTimeRef = useRef(null)

    const onIdle = () => {
        localStorage.setItem("auth", "");
        navigate("/login")
    }

    const idleTimer = useIdleTimer({
        ref: idleTimeRef,
        timeout: 1000 * 60 * 5,
        onIdle,
        debounce: 500
    })
      //useState to switch the hamburger toggler
    const [toggle, setToggle] = useState(false);

    //function to set the toggler value
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
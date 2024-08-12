/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef} from "react";
import  Hamburger from "../../../assets/icons/bars-solid.svg"
import  Dismiss from "../../../assets/icons/xmark-solid.svg"
import { useNavigate } from "react-router-dom";


function Navbar ({setter}) {
    const navigate = useNavigate()
    //useState to switch the hamburger toggler
    const [toggle, setToggle] = useState(false);

    //function to toggle the switch on
    const toggleOn = () => {
        setToggle(true)
    }

      //function to toggle the switch off
    const toggleOff = () => {
        setToggle(false)
    }

    const logOut = () => {
        localStorage.setItem("auth", "");
        navigate("/login")
    }

    //function to be called in the Parent component
    setter(toggle)


    return (<>
        <section id="nav" className="bg-[#508C9B] w-full lg:py-2 m-0">
            {
                !toggle ? <>
            <nav className="flex flex-row flex-nowrap justify-between align-middle w-full lg:w-[98%] xl:w-[88%] m-auto p-4">
                <div className="flex gap-4 align-middle lg:hidden">
                    <div className="flex flex-row align-middle" onClick={toggleOn}>
                        <img className="h-[25px] mt-[1px]" src={Hamburger} alt="toggler" />
                    </div>
                    <h1 id="logo" className="text-[19px] md:text-2xl font-serif lg:hidden w-max">Vehicle Owner Identification</h1>
                </div>
                <h1 id="logo" className="hidden text-xl md:text-2xl font-serif lg:flex w-max">Vehicle Owner Identification</h1>
                <div className="hidden flex-row xl:gap-8 xl:text-xl gap-6 mt-1 lg:flex align-middle text-[18px]">
                    <div className="hover:border-b-2 h-10"><a href="#">Home</a></div>
                    <div className="hover:border-b-2 h-10"><a href="#article">Article</a></div>
                    {/* <div className="hover:border-b-2 h-10"><a href="#">Terms & Conditions</a></div> */}
                    <div className="hover:border-b-2 h-8"><a href="#contact">Contact Us</a></div>
                </div>
                <div className="flex-row gap-4 hidden md:flex h-10">
                    <button onClick={logOut} className="px-5 hover:bg-[#000000] bg-[#201E43] rounded-[20px] text-white">Log Out</button>
                    {/* <button className="px-5 hover:bg-[#000000] bg-[white] hover:text-white rounded-[20px]">Sign In</button> */}
                </div>
            </nav>
                </> : <>
                <nav className="flex relative">
                    <div className="block w-[86%] overflow-hidden h-[100vh] bg-[#EEEEEE] py-4 px-5 relative z-10">
                        <div className="h-[86vh]">
                            <h1 id="logo" className="text-[19px] md:text-2xl font-serif lg:hidden w-max">Vehicle Owner Identification</h1>
                        <div className="block">
                            <div className="w-[100%] cursor-pointer py-2 px-4 my-1" onClick={toggleOff}>
                                <a href="#">Home</a>
                            </div>
                            <div className="w-[100%] cursor-pointer py-2 px-4 my-1" onClick={toggleOff}>
                                <a href="#article">Article</a>
                            </div>
                            <div className="w-[100%] cursor-pointer py-2 px-4 my-1" onClick={toggleOff}>
                                <a href="#contact">Contact Us</a>
                            </div>
                        </div>
                        </div>

                        <div className="w-[100%] flex gap-5 mt-4">
                            <button onClick={logOut} className="px-5 py-2 hover:bg-[#000000] bg-[#201E43] rounded-[20px] text-white">Log Out</button>
                            {/* <button onClick={toggleOff} className="px-5 py-2 hover:bg-[#000000] bg-[white] hover:text-white rounded-[20px]">Sign In</button> */}
                        </div>
                    </div>
                    <div className="w-[14%] py-4 px-5 bg-[antiquewhite] opacity-70 h-[100vh]">
                        <div className="flex flex-row align-middle" onClick={toggleOff}>
                            <img className="h-[25px]" src={Dismiss} alt="toggler" />
                        </div>
                    </div>
                </nav>
 
                </>
            }
 
        </section>
    </>)

}

export default Navbar;
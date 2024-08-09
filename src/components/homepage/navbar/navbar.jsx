/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from "react";
import AOS from "aos";
import 'aos/dist/aos.css'


function Navbar () {
    return (<>
        <section id="nav" className="bg-[#508C9B] w-full py-2 m-0">
            <nav className="flex flex-row flex-nowrap justify-between align-middle w-full lg:w-[98%] xl:w-[88%] m-auto p-4">
                <h1 id="logo" className="text-xl md:text-2xl font-serif w-max">Vehicle Owner Identification</h1>
                <div className="hidden flex-row xl:gap-8 xl:text-xl gap-6 mt-1 lg:flex align-middle text-[18px]">
                    <div className="hover:border-b-2 h-10"><a href="#">Home</a></div>
                    <div className="hover:border-b-2 h-10"><a href="#article">Article</a></div>
                    {/* <div className="hover:border-b-2 h-10"><a href="#">Terms & Conditions</a></div> */}
                    <div className="hover:border-b-2 h-8"><a href="#contact">Contact Us</a></div>
                </div>
                <div className="flex-row gap-4 hidden md:flex h-10">
                    <button className="px-5 hover:bg-[#000000] bg-[#201E43] rounded-[20px] text-white">Log In</button>
                    <button className="px-5 hover:bg-[#000000] bg-[white] hover:text-white rounded-[20px]">Sign In</button>
                </div>
            </nav>
        </section>
    </>)

}

export default Navbar;
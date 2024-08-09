/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import './dashboard.css'


function Dashboard () {
    useEffect(()=> {
        AOS.init()
    }, [])

    return (<>
     <section className="bg-[#508C9B] w-full py-2 m-0" data-aos="zoom-out" data-aos-duration="2000">
        <h2 className="text-3xl font-bold text-center">Vehicle Owner Lookup</h2>
        <div className="tooltip_div" ><span className="tooltip font-sans font-medium mt-5 flex justify-center bg-[#EEEEEE] w-[300px] py-2 rounded-[30px] mx-auto">By Nigeria License Plate Number</span></div>
        <div className="mt-5 mx-auto w-[98%] md:w-[520px] py-2 align-middle md:h-[78px] bg-[#EEEEEE] rounded-[50px] border-2 border-[#201E43] flex">
            <input className="h-full w-[62%] py-[6px] px-4 text-sm md:text-xl font-bold bg-[#EEEEEE] border-none rounded-[50px]" type="text" placeholder="Enter Vehicle Plate Number" />
            <button className="md:h-[60px] w-[36%] bg-[#201E43] rounded-[50px] hover:opacity-90 md:text-xl text-[#EEEEEE]">Check Owner</button>
        </div>
        <div className="w-full text-center my-4">
           <a className="no-underline text-[#EEEEEE]" href="#">Where to find Vehicle Plate Number ?</a>
        </div>
     </section>
    </>)

}

export default Dashboard;
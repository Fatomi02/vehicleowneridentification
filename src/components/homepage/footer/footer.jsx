/* eslint-disable react/style-prop-object */
import React,{useEffect} from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

function Footer () {
    useEffect(()=> {
        AOS.init();
    }, [])

    return (
        <>
        <section id="footer" className="bg-[#508C9B] w-full py-6 md:py-8 m-0 text-center">
        <div>
            &copy; Copyright <strong><span>Fatomi Olaitan & Sanusi Segun</span></strong>
        </div>
        </section>
        </>
    )
}

export default Footer;
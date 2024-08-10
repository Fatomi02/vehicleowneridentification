/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";
import 'aos/dist/aos.css';
import './dashboard.css'
import { useNavigate } from "react-router-dom";


function Dashboard () {
    const navigate = useNavigate()
    const [vehicleData, setVehicleData] = useState();
    const [inputValue, setInputValue] = useState();
    const [error, setError] = useState(false);

    useEffect(()=> {
        AOS.init();
    }, [])

    useEffect(()=> {
        axios.get("http://localhost:8000/vehicle_owners").then((res)=> {
            setVehicleData(res.data);
        })
    }, [])


    const handleChange = (event) => {
        setInputValue(event.target.value);
        setError(false);
    }

    const search = () => {
        let detail = []
        if(inputValue) {
            let value = inputValue.toUpperCase();
            detail = vehicleData.filter((data)=> data.vehicle_plate_number === value)
            if(detail.length !== 0) {
                navigate(`/detail/${detail[0].id}`);
            }
    
        }

        if(detail.length === 0) {
            setError(true);
        } 
      
 
        
    }

  

    return (<>
     <section className="bg-[#508C9B] w-full py-2 m-0 text-center">
        <h2 className="text-3xl font-bold text-center">Vehicle Owner Lookup</h2>
        <div className="tooltip_div" ><span className="tooltip font-sans font-medium mt-5 flex justify-center bg-[#EEEEEE] w-[300px] py-2 rounded-[30px] mx-auto">By Nigeria License Plate Number</span></div>
        {
            !error ? 
            <>
                <div className="mt-5 mx-auto w-[98%] md:w-[520px] py-2 align-middle md:h-[78px] bg-[#EEEEEE] rounded-[50px] border-2 border-[#201E43] flex">
                    <input onChange={(e) => handleChange(e)} className="h-full w-[62%] py-[6px] px-4 text-[14px] md:text-xl font-bold bg-[#EEEEEE] border-none rounded-[50px]" type="text" placeholder="Enter Vehicle Plate Number" />
                    <button onClick={search} className="md:h-[60px] w-[36%] bg-[#201E43] rounded-[50px] hover:opacity-90 md:text-xl text-[#EEEEEE]">
                        Check Owner
                    </button>
                </div>
            </> : 
            <>
                <div className="mt-5 mx-auto w-[98%] md:w-[520px] py-2 align-middle md:h-[78px] bg-[#EEEEEE] rounded-[50px] border-2 border-red-700 flex">
                    <input onChange={(e) => handleChange(e)} className="h-full w-[62%] py-[6px] px-4 text-[14px] md:text-xl font-bold bg-[#EEEEEE] border-none rounded-[50px]" type="text" placeholder="Enter Vehicle Plate Number" />
                    <button onClick={search} className="md:h-[60px] w-[36%] bg-[#201E43] rounded-[50px] hover:opacity-90 md:text-xl text-[#EEEEEE]">Check Owner</button>
                </div>
                <span className="text-red-700">
                    No record found. Enter the correct vehicle plate number
                </span>
            </>
        }

        <div className="w-full text-center my-4">
           <a className="no-underline text-[#EEEEEE]" href="#">Where to find Vehicle Plate Number ?</a>
        </div>
     </section>
    </>)

}

export default Dashboard;
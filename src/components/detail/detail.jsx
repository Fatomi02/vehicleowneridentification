/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail () {
    //storing the data of the vehicle owner
    const [detail, setDetail] = useState()
    //used useParam to get the id of the url
    const { id } = useParams();
    //getting the detail of the owner with the id gotten using param
    useEffect(()=> {
        axios.get(`http://localhost:8000/vehicle_owners/${id}`).then((res)=> {
            setDetail(res?.data);
        })
    }, [])
    return (
        <>
        <h1>{detail?.address}</h1>
        </>
    )
}

export default Detail;
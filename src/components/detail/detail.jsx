/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail () {
    const [detail, setDetail] = useState()
    const { id } = useParams();
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
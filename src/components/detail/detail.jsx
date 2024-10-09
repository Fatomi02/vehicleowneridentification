/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useIdleTimer } from "react-idle-timer";
import Footer from "../homepage/footer/footer";

function Detail() {
  //storing the data of the vehicle owner
  const [detail, setDetail] = useState();
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState("");
  const [minValue, setMinValue] = useState(false);
  const [sent, setSent] = useState(false);
  const navigate = useNavigate();
  const idleTimeRef = useRef(null);

  const onIdle = () => {
    localStorage.clear();
    navigate("/login");
  };

  const idleTimer = useIdleTimer({
    ref: idleTimeRef,
    timeout: 1000 * 60 * 5,
    onIdle,
    debounce: 500,
  });
  //used useParam to get the id of the url
  const { id } = useParams();
  //getting the detail of the owner with the id gotten using param
  useEffect(() => {
    axios
      .get(
        `https://vehicle-owner-database-default-rtdb.firebaseio.com/vehicle_owners/${id}.json`,
      )
      .then((res) => {
        setDetail(res?.data);
        setDescription("");
      });
  }, []);

  const handleChange = (e) => {
    setDescription(e.target.value);
    if (e.target.value.length >= 5) {
      setMinValue(false);
    }
  };

  const submitToFrsc = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();

    // Determine AM or PM
    const period = hours >= 12 ? "pm" : "am";

    // Convert to 12-hour format
    hours = hours % 12 || 12; // Convert 0 to 12 for midnight

    // Pad minutes with leading zero if needed
    const formattedMinutes = minutes.toString().padStart(2, "0");
    // Combine into the final format
    const formattedTime = `${hours}:${formattedMinutes}${period}`;

    //For current Date
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const date = new Date();
    const day = String(date.getDate()).padStart(2, "0"); // Add leading zero for single digits
    const month = months[date.getMonth()]; // Get the short month name
    const year = date.getFullYear(); // Get the full year

    const formattedDate = `${day}-${month}-${year}`;

    if (description.length < 5) {
      setMinValue(true);
      return;
    } else {
      detail.read = false;
      detail.time = formattedTime;
      detail.date = formattedDate;
      detail.description = description;
      setDetail(detail);
      setLoading(true);
      setTimeout(() => {
        axios
          .post(
            `https://vehicle-owner-database-default-rtdb.firebaseio.com/post-info-FRSC.json`,
            detail,
            {
              headers: {
                "Content-Type": "application/json",
              },
            },
          )
          .then((res) => {
            console.log(res);
          })
          .catch(function (error) {
            console.log(error);
          });
        setLoading(false);
        setDescription("");
        setSent(true);
        setTimeout(() => {
          setSent(false);
        }, 2000);
      }, 4000);
    }
  };

  const submitToPolice = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();

    // Determine AM or PM
    const period = hours >= 12 ? "pm" : "am";

    // Convert to 12-hour format
    hours = hours % 12 || 12; // Convert 0 to 12 for midnight

    // Pad minutes with leading zero if needed
    const formattedMinutes = minutes.toString().padStart(2, "0");

    // Combine into the final format
    const formattedTime = `${hours}:${formattedMinutes}${period}`;

    //For current Date
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const date = new Date();
    const day = String(date.getDate()).padStart(2, "0"); // Add leading zero for single digits
    const month = months[date.getMonth()]; // Get the short month name
    const year = date.getFullYear(); // Get the full year

    const formattedDate = `${day}-${month}-${year}`;

    if (description.length < 5) {
      setMinValue(true);
      return;
    } else {
      detail.read = false;
      detail.time = formattedTime;
      detail.date = formattedDate;
      detail.description = description;
      setDetail(detail);
      setLoading(true);
      setTimeout(() => {
        axios
          .post(
            `https://vehicle-owner-database-default-rtdb.firebaseio.com/post-info-Police.json`,
            detail,
            {
              headers: {
                "Content-Type": "application/json",
              },
            },
          )
          .then((res) => {
            console.log(res);
          })
          .catch(function (error) {
            console.log(error);
          });
        setLoading(false);
        setDescription("");
        setSent(true);
        setTimeout(() => {
          setSent(false);
        }, 2000);
      }, 4000);
    }
  };

  return (
    <>
      <section id="nav" className="bg-[#508C9B] w-full lg:py-2 m-0">
        <nav className="flex flex-row flex-nowrap justify-between align-middle w-full lg:w-[98%] xl:w-[88%] m-auto p-4">
          <h1
            id="logo"
            className="text-xl md:text-2xl font-serif block text-center w-full"
          >
            Vehicle Owner Identification
          </h1>
        </nav>
      </section>
      {!loading ? (
        <>
          <div id="detail" className="w-full bg-[#EEEEEE] py-8">
            <h2 className="text-center text-2xl font-serif mb-5 text-[#201E43]">
              Owner's Information
            </h2>
            <div className="md:w-[82%] w-[96%] justify-between m-auto mt-5 p-2 block lg:flex">
              <div className="lg:w-[48%]">
                <h2 className="text-center text-xl text-[#201E43] font-serif mb-5">
                  Profile Picture
                </h2>
                <img
                  className="w-full lg:w-fit mx-auto lg:h-[590px] h-[300px] bg-blue-900"
                  src={detail?.image}
                  alt=""
                />
              </div>
              <div className="lg:w-[48%]">
                <h2 className="text-center border-b-[1px] text-xl font-serif mb-5">
                  Details
                </h2>
                <div className="block">
                  <h2 className="border-b-[1px] border-[#201E43] text-[#201E43] text-[18px] font-serif mb-3">
                    Name
                  </h2>
                  <div className="flex gap-4 mb-1">
                    <label className="font-bold text-[18px]">
                      First Name:{" "}
                    </label>
                    <span className="text-[#201E43] text-[18px]">
                      {detail?.firstname}
                    </span>
                  </div>
                  <div className="flex gap-4 mb-1">
                    <label className="font-bold text-[18px]">Last Name: </label>
                    <span className="text-[#201E43] text-[18px]">
                      {detail?.lastname}
                    </span>
                  </div>
                  <div className="flex gap-4 mb-1">
                    <label className="font-bold text-[18px]">
                      Middle Name:{" "}
                    </label>
                    <span className="text-[#201E43] text-[18px]">
                      {detail?.middlename}
                    </span>
                  </div>

                  <h2 className="border-b-[1px] border-[#201E43] text-[#201E43] text-[18px] font-serif my-4">
                    Location
                  </h2>
                  <div className="flex gap-4 mb-1">
                    <label className="font-bold text-[18px]">Address: </label>
                    <address className="text-[#201E43] text-[18px]">
                      {detail?.address}
                    </address>
                  </div>
                  <div className="flex gap-4 mb-1">
                    <label className="font-bold text-[18px]">State: </label>
                    <span className="text-[#201E43] text-[18px]">
                      {detail?.state}
                    </span>
                  </div>

                  <h2 className="border-b-[1px] border-[#201E43] text-[#201E43] text-[18px] font-serif my-4">
                    Date of Birth & Blood Group
                  </h2>
                  <div className="flex gap-4 mb-1">
                    <label className="font-bold text-[18px]">
                      Date of Birth:{" "}
                    </label>
                    <span className="text-[#201E43] text-[18px]">
                      {detail?.date_of_birth}
                    </span>
                  </div>
                  <div className="flex gap-4 mb-1">
                    <label className="font-bold text-[18px]">
                      Blood Group:{" "}
                    </label>
                    <span className="text-[#201E43] text-[18px]">
                      {detail?.blood_group}
                    </span>
                  </div>

                  <h2 className="border-b-[1px] border-[#201E43] text-[#201E43] text-[18px] font-serif my-4">
                    Vehicle Information
                  </h2>
                  <div className="flex gap-4 mb-1">
                    <label className="font-bold text-[18px]">
                      Vehicle Name:{" "}
                    </label>
                    <span className="text-[#201E43] text-[18px]">
                      {detail?.vehicle_name}
                    </span>
                  </div>
                  <div className="flex gap-4 mb-1">
                    <label className="font-bold text-[18px]">
                      Vehicle Plate Number:{" "}
                    </label>
                    <span className="text-[#201E43] text-[18px]">
                      {detail?.vehicle_plate_number}
                    </span>
                  </div>
                  <div className="flex gap-4 mb-1">
                    <label className="font-bold text-[18px]">
                      Plate Number Issued Date:{" "}
                    </label>
                    <span className="text-[#201E43] text-[18px]">
                      {detail?.plate_number_issued_date}
                    </span>
                  </div>
                  <div className="flex gap-4 mb-1">
                    <label className="font-bold text-[18px]">
                      Plate Number Expiring Date:{" "}
                    </label>
                    <span className="text-[#201E43] text-[18px]">
                      {detail?.plate_number_expiring_date}
                    </span>
                  </div>
                  <div className="flex gap-4 mb-1">
                    <label className="font-bold text-[18px]">
                      Valid Driver License:{" "}
                    </label>
                    <span className="text-[#201E43] text-[18px]">
                      {detail?.valid_driver_license ? `Yes` : `No`}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-center text-2xl font-serif mt-5 text-[#201E43]">
              Offense Description
            </h2>
            <div className="lg:w-[82%] w-[96%] justify-between m-auto mt-5 p-2 block lg:flex">
              <div className="lg:w-[48%] w-[96%] mx-auto lg:mx-0">
                <textarea
                  value={description}
                  onChange={(e) => handleChange(e)}
                  className="text-lg h-[180px] w-full p-3"
                  placeholder="Description of what the person did"
                  name="offense_description"
                  id="offense_description"
                ></textarea>
                {minValue ? (
                  <>
                    <span className="text-red-700">
                      Description character should be more than 4
                    </span>
                  </>
                ) : (
                  <></>
                )}
              </div>
              <div className="lg:w-[48%] mx-auto lg:mx-0 w-[96%] mt-5 lg:mt-0 flex gap-8 justify-around items-center">
                {sent ? (
                  <>
                    <div className="lg:w-[400px] w-[200px] h-14 bg-green-700 flex justify-center items-center rounded-[20px]">
                      <span>Data successfully sent</span>
                    </div>
                  </>
                ) : (
                  <>
                    <button
                      onClick={submitToFrsc}
                      className="bg-[#508C9B] hover:bg-[#000000] hover:text-white lg:h-12 text-center py-2 px-5 rounded-[50px]"
                    >
                      Send to FRSC
                    </button>
                    <button
                      onClick={submitToPolice}
                      className="bg-[#508C9B] hover:bg-[#000000] hover:text-white lg:h-12 text-center py-2 px-5 rounded-[50px]"
                    >
                      Send to Police Office
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-full h-[100vh] bg-gray-300 flex items-center justify-center">
            <span className="text-2xl">Sending Data ....</span>
          </div>
        </>
      )}
      <Footer />
    </>
  );
}

export default Detail;

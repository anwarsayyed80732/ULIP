import React, { useEffect, useState } from "react";
import Navbar from "../components/molecules/Navbar";
import ShipmentRequest from "../components/molecules/ShipmentRequest";
import Footer from "../components/molecules/Footer";
import ShipmentHistory from "../components/molecules/ShipmentHistory";
import cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { generateAuthHeader } from "../helpers/axiosHelper";
import axios from "axios";

export default function Dashboard() {
    const [cities, setCities] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    if (!cookies.get("auth")) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_API_BASEURL;

    const citiesUrl = `${baseUrl}/cities/`;

    const axiosConfig = generateAuthHeader();
    axios
      .get(citiesUrl, axiosConfig)
      .then((response) => {
        // console.log(response.data);
        setCities(response.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Uh-oh, couldn't reach our servers at the moment. We regret the inconvenience caused :(")
        navigate("/")
      });
  }, []);

  return (
    <>
      <Navbar type="loggedin" />
      <div className="mt-28 flex flex-col justify-center items-center">
        <ShipmentRequest cities={cities} />
        <div className="mt-5"></div>
        <ShipmentHistory cities={cities} />
      </div>
      <Footer />
    </>
  );
}

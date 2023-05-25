import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import cookies from "js-cookie";
import Navbar from "../components/molecules/Navbar";
import ShipmentDetailsCard from "../components/molecules/ShipmentDetailsCard";
import axios from "axios";
import { generateAuthHeader } from "../helpers/axiosHelper";

export default function ShipmentDetails() {
  const { shipmentId } = useParams();
  const navigate = useNavigate();

  const [shipmentDetails, setshipmentDetails] = useState({});
  const [cities, setCities] = useState([]);

  useEffect(() => {
    if (!cookies.get("auth")) {
      navigate("/login");
    } else {
      const baseUrl = import.meta.env.VITE_API_BASEURL;
      const shipmentDetailsUrl = `${baseUrl}/hubs/shipmentDetails/${shipmentId}`;
      const axiosConfig = generateAuthHeader();
      axios
        .get(shipmentDetailsUrl, axiosConfig)
        .then((response) => {
          console.log(response.data);
          setshipmentDetails(response.data);
        })
        .catch((err) => {
          console.log(err);
        });

      const citiesUrl = `${baseUrl}/cities/`;

      axios
        .get(citiesUrl, axiosConfig)
        .then((response) => {
          console.log(response.data);
          setCities(response.data);
        })
        .catch((err) => {
          console.log(err);
          alert(
            "Uh-oh, couldn't reach our servers at the moment. We regret the inconvenience caused :("
          );
          navigate("/");
        });
    }
  }, []);

  return (
    <>
      <Navbar type="loggedin" />
      <div className="flex flex-col items-center">
        <ShipmentDetailsCard
          shipmentDetails={shipmentDetails}
          cities={cities}
        />
      </div>
    </>
  );
}

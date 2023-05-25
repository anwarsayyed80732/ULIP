import React, { useState } from "react";
import ButtonPrimary from "../atoms/ButtonPrimary";
import { capitalize } from "../../helpers/wordHelper";
import { getFormattedDate } from "../../helpers/dateHelper";
import axios from "axios";
import { generateAuthHeader } from "../../helpers/axiosHelper";
import { useNavigate } from "react-router-dom";

export default function ShipmentRequest({ cities }) {
  const navigate = useNavigate();

  const [isInputValid, setIsInputValid] = useState(null);

  const shipmentTypes = [
    "machinery",
    "liquid bulk",
    "dry bulk",
    "live stock",
    "refrigerated cargo",
    "pharmaceutical drugs",
  ];

  const [shipmentDetails, setShipmentDetails] = useState({
    source: 0,
    destination: 1,
    date: getFormattedDate(new Date()),
    quantity: 100,
    shipmentType: shipmentTypes[0],
  });

  const onChange = (e) => {
    setShipmentDetails((details) => ({
      ...details,
      [e.target.name]:
        e.target.name != "date" && e.target.name != "shipmentType"
          ? parseInt(e.target.value)
          : e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // IMP: Validate whether all the fields are filled
    console.log(shipmentDetails);

    if (shipmentDetails.source === shipmentDetails.destination) {
      setIsInputValid(false);
      return;
    } else {
      setIsInputValid(true)
    }

    if (
      confirm(
        "Are you sure you want to submit the shipment request? \nOnce submitted you cannot cancel or edit the request"
      ) == true
    ) {
      const axiosConfig = generateAuthHeader();
      const baseUrl = import.meta.env.VITE_API_BASEURL;
      const shipmentRequestUrl = `${baseUrl}/hubs/addshipment`;
      axios
        .post(shipmentRequestUrl, shipmentDetails, axiosConfig)
        .then((response) => {
          console.log(response)
          navigate(`/submitrequest/${response.data.data.shipmentId}`)
        })
        .catch((err) => {
          console.log(err);
          alert(
            "Uh-oh, couldn't reach our servers at the moment. We regret the inconvenience caused :("
          );
          navigate("/");
        });
    }
  };

  return (
    <>
      <h2 className="text-3xl md:text-4xl">
        Request A <span className="text-orange-primary">Shipment</span>
      </h2>
      <div className="m-5 p-4 min-h-[10vh] min-w-[50vw] md:min-w-[80vw] bg-background-secondary rounded-xl shadow-bottom">
        <form
          onSubmit={onSubmit}
          className="flex flex-col md:flex-row md:justify-evenly md:items-center"
        >
          <div className="flex justify-between md:flex-col md:justify-center items-center">
            <label htmlFor="source-city" className="font-semibold">
              FROM
            </label>
            <select
              name="source"
              id="source-city"
              onChange={onChange}
              className="bg-background-tertiary focus-within:bg-background-primary p-3 m-2 rounded-lg outline-none cursor-pointer min-w-[10vw]"
            >
              {cities.map((city) => {
                return city._id === 0 ? (
                  <option key={city._id} value={city._id} selected>
                    {capitalize(city.name)}
                  </option>
                ) :(
                  <option key={city._id} value={city._id}>
                    {capitalize(city.name)}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="flex justify-between md:flex-col md:justify-center items-center">
            <label htmlFor="destination-city" className="font-semibold">
              TO
            </label>
            <select
              id="destination-city"
              name="destination"
              onChange={onChange}
              className="bg-background-tertiary focus-within:bg-background-primary p-3 m-2 rounded-lg outline-none cursor-pointer min-w-[10vw]"
            >
              {cities.map((city) => {
                return city._id === 1 ? (
                  <option key={city._id} value={city._id} selected>
                    {capitalize(city.name)}
                  </option>
                ) : (
                  <option key={city._id} value={city._id}>
                    {capitalize(city.name)}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="flex justify-between md:flex-col md:justify-center items-center">
            <label htmlFor="date-of-shipping" className="font-semibold">
              DATE
            </label>
            <input
              required
              type="date"
              name="date"
              onChange={onChange}
              id="date-of-shipping"
              defaultValue={getFormattedDate(new Date())}
              min={getFormattedDate(new Date())}
              className="bg-background-tertiary focus-within:bg-background-primary cursor-pointer p-3 m-2 rounded-lg outline-none min-w-[10vw]"
            />
          </div>

          <div className="flex justify-between md:flex-col md:justify-center items-center">
            <label htmlFor="shipment-type" className="font-semibold">
              TYPE
            </label>
            <select
              name="shipmentType"
              id="shipment-type"
              onChange={onChange}
              className="bg-background-tertiary focus-within:bg-background-primary p-3 m-2 rounded-lg outline-none cursor-pointer min-w-[10vw]"
            >
              {shipmentTypes.map((shipmentType, index) => {
                return (
                  <option key={index} value={shipmentType}>
                    {capitalize(shipmentType)}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="flex justify-between md:flex-col md:justify-center items-center">
            <label
              htmlFor="quantity"
              className="font-semibold whitespace-nowrap mr-2"
            >
              QUANTITY (in kgs.)
            </label>
            <input
              required
              name="quantity"
              id="quantity"
              type="number"
              onChange={onChange}
              placeholder="100"
              min={100}
              step={50}
              className="bg-background-tertiary focus-within:bg-background-primary p-3 m-2 rounded-lg outline-none min-w-[8vw] md:max-w-[10vw] text-end md:text-center"
            />
          </div>

          <div className="hidden md:block m-4 mt-10">
            <ButtonPrimary text="Send Request" size="xl" />
          </div>
          <div className="block md:hidden m-3">
            <ButtonPrimary text="Send Request" size="lg" />
          </div>
        </form>
        {isInputValid === false && (
          <p className="text-red mt-2">Source and destination cannot be the same! Please choose a different city</p>
        )}
      </div>
    </>
  );
}

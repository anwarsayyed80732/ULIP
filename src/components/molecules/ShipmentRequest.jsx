import React, { useState } from "react";
import ButtonPrimary from "../atoms/ButtonPrimary";
import { capitalize } from "../../helpers/wordHelper";
import { getFormattedDate } from "../../helpers/dateHelper";
import axios from "axios";

export default function ShipmentRequest() {

  const cities = [
    { id: 0, name: "new delhi" },
    { id: 1, name: "mumbai" },
    { id: 2, name: "bengaluru" },
    { id: 3, name: "chennai" },
    { id: 4, name: "hyderabad" },
    { id: 5, name: "kolkata" },
    { id: 6, name: "pune" },
    { id: 7, name: "ahmedabad" },
    { id: 8, name: "jaipur" },
    { id: 9, name: "kochi" },
  ];

  const [shipmentDetails, setShipmentDetails] = useState({
    source: cities[0].name,
    destination: cities[1].name,
    date: getFormattedDate(new Date()),
    quantity: 100,
  });

  const onChange = (e) => {
    setShipmentDetails((details) => ({
      ...details,
      [e.target.name]:
        e.target.name === "quantity"
          ? parseInt(e.target.value)
          : e.target.value,
    }));
  };

  const onSubmit = (e) => {
    // IMP: Validate whether all the fields are filled
    console.log(shipmentDetails);

    // IMP: Add the shipment request url here after the backend is completed.
    const shipmentRequestUrl = "";
    axios
      .post(shipmentRequestUrl, shipmentDetails)
      .then((response) => console.log(response))
      .catch((err) => {
        console.log(err);
        var userPreference;

      if (confirm("Are you sure you want to continue the shipment? \nOnce submitted you cannot cancel the request") == true) {
          userPreference = "Data saved successfully!";
          } else {
          userPreference = "Save Cancelled!";
}
       
      });
  };

  return (
    <>
      <h2 className="text-3xl md:text-4xl">
        Request A <span className="text-orange-primary">Shipment</span>
      </h2>
      <div className="m-5 p-4 min-h-[10vh] min-w-[50vw] md:min-w-[70vw] bg-background-secondary rounded-xl shadow-bottom">
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
                return (
                  <option key={city.id} value={city.name}>
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
                return city.id === 1 ? (
                  <option key={city.id} value={city.name} selected>
                    {capitalize(city.name)}
                  </option>
                ) : (
                  <option key={city.id} value={city.name}>
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
      </div>
    </>
  );
}

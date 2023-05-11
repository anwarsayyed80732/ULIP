import React from "react";
import Navbar from "../components/molecules/Navbar";
import ShipmentRequest from "../components/molecules/ShipmentRequest";
import Footer from "../components/molecules/Footer";

export default function Dashboard() {
  return (
    <>
      <Navbar type="loggedin" />
      <div className="mt-28 flex flex-col justify-center items-center">
        <h2 className="text-3xl md:text-4xl">Request A <span className="text-orange-primary">Shipment</span></h2>
        <ShipmentRequest />
      </div>
      {/* <Footer /> */}
    </>
  );
}

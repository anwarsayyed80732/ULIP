import React from "react";
import Navbar from "../components/molecules/Navbar";
import ShipmentRequest from "../components/molecules/ShipmentRequest";
import Footer from "../components/molecules/Footer";
import ShipmentHistory from "../components/molecules/ShipmentHistory";

export default function Dashboard() {
  return (
    <>
      <Navbar type="loggedin" />
      <div className="mt-28 flex flex-col justify-center items-center">
        <ShipmentRequest />
        <div className="mt-5"></div>
        <ShipmentHistory />
      </div>
      <Footer />
    </>
  );
}

import React from "react";
import Navbar from "../components/molecules/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import ButtonPrimary from "../components/atoms/ButtonPrimary";

export default function Nextpage() {
  const { shipmentId } = useParams();
  const navigate = useNavigate();

  const handleGoBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <>
      <Navbar type="loggedin" />
      <div className="bg-background-primary mt-40">
        <h1 className="text-4xl">Thank you for submitting your request</h1>
        <p className="mt-5 text-xl">Your shipment id: {shipmentId} </p>
        <p className="mt-5 text-xl">
          You can view the details and status of this request on your dashboard{" "}
        </p>
        <div className="mt-5" onClick={handleGoBack}>
          <ButtonPrimary size="lg" text="Back to Dashboard" />
        </div>
      </div>
    </>
  );
}

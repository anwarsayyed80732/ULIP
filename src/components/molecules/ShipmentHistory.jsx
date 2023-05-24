import React, { useEffect, useState } from "react";
import ShipmentHistoryTabs from "../atoms/ShipmentHistoryTabs";
import ShipmentCard from "./ShipmentCard";
import noShipment from "../../assets/vectors/no_shipments.svg";
import axios from "axios";
import { generateAuthHeader } from "../../helpers/axiosHelper";

export default function ShipmentHistory({ cities }) {
  const [currentTab, setCurrentTab] = useState(1);
  const [hasShipmentStatus, setHasShipmentStatus] = useState({
    past: false,
    ongoing: false,
    upcoming: false,
  });

  const [shipmentList, setShipmentList] = useState([]);

  /**
   * A function that changes the state which represents the current selected tab
   * @param tabId The tab which got selected, starting from 0
   *
   */
  const handleTabChange = (tabId) => {
    setCurrentTab(tabId);
  };

  useEffect(() => {
    const axiosConfig = generateAuthHeader();
    const baseUrl = import.meta.env.VITE_API_BASEURL;

    const historyUrl = `${baseUrl}/hubs/shipmenthistory`;
    axios
      .get(historyUrl, axiosConfig)
      .then((response) => {
        console.log(response.data);
        setShipmentList(response.data.shipmentDetails);
      })
      .catch((err) => {
        console.log(err);
        alert("Uh-oh! Unable to connect to our servers. We regret the inconvenience caused :(")
      });
  }, []);

  /**
   * A function that checks shipment list for the status of the various shipments
   * It sets the hasShipmentStatus state according to the list of shipments
   */
  const checkShipmentStatus = () => {
    shipmentList.forEach((shipmentDetails) => {
      console.log(shipmentDetails);
      if (shipmentDetails.status.startsWith("PAST")) {
        setHasShipmentStatus((currentState) => ({
          ...currentState,
          past: true,
        }));
      } else if (shipmentDetails.status.startsWith("ONGOING")) {
        setHasShipmentStatus((currentState) => ({
          ...currentState,
          ongoing: true,
        }));
      } else if (shipmentDetails.status.startsWith("UPCOMING")) {
        setHasShipmentStatus((currentState) => ({
          ...currentState,
          upcoming: true,
        }));
      }
    });
  };

  useEffect(() => {
    // IMP: After backend is completed make the API call and set the shipment list
    checkShipmentStatus();
  }, [shipmentList]);

  return (
    <>
      <h2 className="text-3xl md:text-4xl">
        <span className="text-orange-primary">Shipment</span> History
      </h2>

      <ShipmentHistoryTabs
        currentTab={currentTab}
        handleTabChange={handleTabChange}
      />

      {shipmentList.map((shipmentDetails) => {
        if (currentTab === 0 && shipmentDetails.status === "PAST") {
          return (
            <ShipmentCard
              key={shipmentDetails._id}
              shipmentDetails={shipmentDetails}
              cities={cities}
            />
          );
        } else if (
          currentTab === 1 &&
          shipmentDetails.status.startsWith("ONGOING")
        ) {
          return (
            <ShipmentCard
              key={shipmentDetails._id}
              shipmentDetails={shipmentDetails}
              cities={cities}
            />
          );
        } else if (currentTab === 2 && shipmentDetails.status === "UPCOMING") {
          return (
            <ShipmentCard
              key={shipmentDetails._id}
              shipmentDetails={shipmentDetails}
              cities={cities}
            />
          );
        }
      })}

      {currentTab === 0 && hasShipmentStatus.past == false && (
        <>
          <p className="m-10 text-3xl">No past shipments!</p>
          <img
            src={noShipment}
            alt="No shipments found"
            width={"350px"}
            height={"350px"}
            className="m-10"
          />
        </>
      )}
      {currentTab === 1 && hasShipmentStatus.ongoing === false && (
        <>
          <p className="m-10 text-3xl">No ongoing shipments!</p>
          <img
            src={noShipment}
            alt="No shipments found"
            width={"350px"}
            height={"350px"}
            className="m-10"
          />
        </>
      )}
      {currentTab === 2 && hasShipmentStatus.upcoming === false && (
        <>
          <p className="m-10 text-3xl">No upcoming shipments!</p>
          <img
            src={noShipment}
            alt="No shipments found"
            width={"350px"}
            height={"350px"}
            className="m-10"
          />
        </>
      )}
    </>
  );
}

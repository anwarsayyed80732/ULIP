import React from "react";
import { capitalize } from "../../helpers/wordHelper";
import { getDisplayDate } from "../../helpers/dateHelper";
import ButtonSecondary from "../atoms/ButtonSecondary";

export default function ShipmentCard({ shipmentDetails }) {
  return (
    <div className="m-5 p-4 flex flex-col items-start justify-center min-h-[10vh] min-w-[90vw] md:min-w-[70vw] bg-background-secondary rounded-xl">
      <span className="px-4">
        Shipment ID:{" "}
        <span className="text-orange-primary">
          {shipmentDetails.shipmentId}
        </span>
      </span>

      <div className="p-4 flex flex-row justify-evenly items-center w-full flex-wrap">
        <div className="m-3 text-xs md:text-base flex flex-col justify-center items-center">
          <span className="font-medium">FROM</span>
          <span className="font-bold text-2xl">{capitalize(shipmentDetails.source)}</span>
        </div>

        <div className="m-3 hidden md:block h-1 w-20 bg-orange-primary mt-9"></div>

        <div className="m-3 text-xs md:text-base flex flex-col justify-center items-center">
          <span className="font-medium">TO</span>
          <span className="font-bold text-2xl">{capitalize(shipmentDetails.destination)}</span>
        </div>
        

        <div className="m-3 text-xs md:text-base flex flex-col justify-center items-center">
          <span className="font-medium">DATE</span>
          <span className="font-bold text-2xl">{getDisplayDate(shipmentDetails.date)}</span>
        </div>

        <div className="m-3 text-xs md:text-base flex flex-col justify-center items-center">
          <span className="font-medium">TYPE</span>
          <span className="font-bold text-2xl">{capitalize(shipmentDetails.shipmentType)}</span>
        </div>

        {/* IMP: After backend is completed, add a handle click for this button */}
        <div className="mt-2 md:mt-0">
        <ButtonSecondary text="View Details" size="lg" />
        </div>
      </div>
    </div>
  );
}

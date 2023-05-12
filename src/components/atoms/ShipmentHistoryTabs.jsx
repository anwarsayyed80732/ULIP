import React from "react";
import "../../styles/shipmentHistory.css";

export default function ShipmentHistoryTabs({ currentTab, handleTabChange }) {
  return (
    <div className="md:min-w-[33vw] mt-2 text-xl font-bold flex justify-evenly items-center bg-background-secondary rounded-lg">
      <div className="w-1/4 m-2 p-4">
        {(currentTab === 1 || currentTab === 2) && (
          <span
            onClick={(e) => {
              e.preventDefault();
              handleTabChange(0);
            }}
            className="pb-1.5 px-2 w-full text-center tab tab-underline tab-underline-orange cursor-pointer"
          >
            Past
          </span>
        )}
        {currentTab === 0 && (
          <span
            onClick={(e) => {
              e.preventDefault();
              handleTabChange(0);
            }}
            className="pb-1.5 px-2 w-full text-center underline-orange text-orange-primary cursor-pointer"
          >
            Past
          </span>
        )}
      </div>

      <div className="w-1/3 m-2 p-4">
        {(currentTab === 0 || currentTab === 2) && (
          <span
            onClick={(e) => {
              e.preventDefault();
              handleTabChange(1);
            }}
            className="pb-1.5 px-2 w-full text-center tab tab-underline tab-underline-orange cursor-pointer"
          >
            Ongoing
          </span>
        )}
        {currentTab === 1 && (
          <span
            onClick={(e) => {
              e.preventDefault();
              handleTabChange(1);
            }}
            className="pb-1.5 px-2 w-full text-center underline-orange text-orange-primary cursor-pointer"
          >
            Ongoing
          </span>
        )}
      </div>

      <div className="w-1/3 m-2 p-4">
        {(currentTab === 0 || currentTab === 1) && (
          <span
            onClick={(e) => {
              e.preventDefault();
              handleTabChange(2);
            }}
            className="pb-1.5 px-2 w-full text-center tab tab-underline tab-underline-orange cursor-pointer"
          >
            Upcoming
          </span>
        )}
        {currentTab === 2 && (
          <span
            onClick={(e) => {
              e.preventDefault();
              handleTabChange(2);
            }}
            className="pb-1.5 px-2 w-full text-center underline-orange text-orange-primary cursor-pointer"
          >
            Upcoming
          </span>
        )}
      </div>
    </div>
  );
}

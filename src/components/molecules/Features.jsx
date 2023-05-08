import React from "react";
import logistics from "../../assets/vectors/logistics.svg";
import savings from "../../assets/vectors/savings.svg";
import certification from "../../assets/vectors/certification.svg";

export default function Features() {
  return (
    <>
      <div className="pt-20 ml-8 mr-8 md:ml-16 pb-10">
        <div>
          <h2 className="text-5xl pb-10">Features and Benefits</h2>
        </div>
        <div className="hidden md:flex md:justify-center">
          <div className="w-1/5 h-52 md:h-64 xl:h-80 my-5 mx-10 rounded-xl bg-background-secondary shadow-lg shadow-orange-light cursor-pointer hover:scale-110 transition-all duration-200">
            <img
              src={logistics}
              alt="Logistics"
              className="w-2/3 h-auto mx-auto pt-6"
            ></img>
            <p className="text-lg md:text-2xl xl:text-3xl mt-8">
              Simplified<br></br> <span className="text-orange-primary">Logistics<br></br> Management</span>
            </p>
          </div>
          <div className="w-1/5 h-52 md:h-64 xl:h-80 my-5 mx-10 rounded-xl bg-background-secondary shadow-lg shadow-orange-light cursor-pointer hover:scale-110 transition-all duration-200">
            <img
              src={savings}
              alt="savings"
              className="w-1/2 h-auto mx-auto pt-6"
            ></img>
            <p className="text-lg md:text-2xl xl:text-3xl mt-8">
              Saves<br></br> <span className="text-orange-primary">Time &<br></br> Money</span>
            </p>
          </div>
          <div className="w-1/5 h-52 md:h-64 xl:h-80 my-5 mx-10 rounded-xl bg-background-secondary shadow-lg shadow-orange-light cursor-pointer hover:scale-110 transition-all duration-200">
            <img
              src={certification}
              alt="certification"
              className="w-1/3 h-auto mx-auto pt-6"
            ></img>
            <p className="text-lg md:text-2xl xl:text-3xl mt-8">
              Hassle-free<br></br> <span className="text-orange-primary">License<br></br> Management</span>
            </p>
          </div>
        </div>
        <div className="md:hidden flex flex-col items-center justify-center">
          <div className="w-3/4 h-auto p-5 my-5 mx-10 rounded-xl bg-background-secondary shadow-lg shadow-orange-light">
            <img
              src={logistics}
              alt="Logistics"
              className="w-2/3 h-auto mx-auto pt-6"
            ></img>
            <p className="text-2xl md:text-2xl xl:text-3xl mt-8">
              Simplified <br></br> <span className="text-orange-primary">Logistics Management</span>
            </p>
          </div>
          <div className="w-3/4 h-auto p-5 my-5 mx-10 rounded-xl bg-background-secondary shadow-lg shadow-orange-light">
            <img
              src={savings}
              alt="savings"
              className="w-1/2 h-auto mx-auto pt-6"
            ></img>
            <p className="text-2xl md:text-2xl xl:text-3xl mt-8">
              Saves <br></br> <span className="text-orange-primary">Time & Money</span>
            </p>
          </div>
          <div className="w-3/4 h-auto p-5 my-5 mx-10 rounded-xl bg-background-secondary shadow-lg shadow-orange-light">
            <img
              src={certification}
              alt="certification"
              className="w-1/3 h-auto mx-auto pt-6"
            ></img>
            <p className="text-2xl md:text-2xl xl:text-3xl mt-8">
              Hassle-free<br></br> <span className="text-orange-primary">License Management</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

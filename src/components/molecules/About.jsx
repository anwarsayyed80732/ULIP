import React from "react";
import containerShip from "../../assets/vectors/container_ship.svg";

export default function About() {
  return (
    <>
      <div className="pt-20 ml-8 mr-8 md:ml-16 pb-10">
        <h2 className="text-5xl pb-10">
          About <span className="text-orange-light">ULIP</span>
        </h2>
        <div className="flex justify-center items-center">
          <img
            src={containerShip}
            alt="Container Ship"
            width="500px"
            height="500px"
            className="hidden lg:block lg:h-64 xl:max-h-full hover:scale-110 transition-all duration-200"
          ></img>
          <div className="text-justify p-3 md:mx-20 text-xl font-light">
            <p>
              ULIP aims to simplify and streamline the logistics process
              for businesses of all sizes. This platform provides a single
              interface that connects all aspects of the logistics process, from
              tracking shipments to managing inventory to coordinating
              transportation. With the platform, businesses can save time and
              money by reducing the need for multiple systems and integrations.
            </p>
            <p className="mt-5">
              The goal of the platform is to make logistics management more
              efficient, transparent, and accessible, so businesses can focus on
              growing. Join the platform on its mission to revolutionize the
              logistics industry!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

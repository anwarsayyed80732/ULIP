import React from "react";
import logo from "../../assets/images/Icon_resized_square.webp";
import ButtonPrimary from "../atoms/ButtonPrimary";
import ButtonSecondary from "../atoms/ButtonSecondary";

export default function Navbar() {
  return (
    <div className="absolute bg-none w-screen flex justify-between items-center">
      <a href="#home">
        <img
          src={logo}
          alt="ULIP"
          width="70px"
          height="70px"
          className="ml-5 md:ml-20 py-2"
        ></img>
      </a>
      <div className="flex justify-center items-center">
        <div className="max-h-14 mr-4 block md:hidden">
          <ButtonPrimary text="Log In" size="base" />
        </div>
        <div className="max-h-14 mr-4 hidden md:block">
          <ButtonPrimary text="Log In" size="lg" />
        </div>
        <div className="max-h-14 mr-5 block md:hidden">
          <ButtonSecondary text="Sign Up" size="base" />
        </div>
        <div className="max-h-14 mr-20 hidden md:block">
          <ButtonSecondary text="Sign Up" size="lg" />
        </div>
      </div>
    </div>
  );
}

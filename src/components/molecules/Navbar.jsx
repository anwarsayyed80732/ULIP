import React from "react";
import logo from "../../assets/images/Icon_resized_square.webp";
import ButtonPrimary from "../atoms/ButtonPrimary";
import ButtonSecondary from "../atoms/ButtonSecondary";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div className="fixed top-0 right-0 bg-none w-screen flex justify-between items-center backdrop-blur shadow-md">
      <Link to="/">
        <img
          src={logo}
          alt="ULIP"
          width="70px"
          height="70px"
          className="ml-5 md:ml-20 py-2"
        ></img>
      </Link>
      {props.type === "landing" && (
        <div className="flex justify-center items-center">
          <Link to="/login">
            <div className="max-h-14 mr-4 block md:hidden">
              <ButtonPrimary text="Log In" size="base" />
            </div>
          </Link>
          <Link to="/login">
            <div className="max-h-14 mr-4 hidden md:block">
              <ButtonPrimary text="Log In" size="lg" />
            </div>
          </Link>
          <Link to="/signup">
            <div className="max-h-14 mr-5 block md:hidden">
              <ButtonSecondary text="Sign Up" size="base" />
            </div>
          </Link>
          <Link to="/signup">
            <div className="max-h-14 mr-20 hidden md:block">
              <ButtonSecondary text="Sign Up" size="lg" />
            </div>
          </Link>

          {/* IMP: Remove after testing */}
          <Link to={"/dashboard"}>
            <button>Dashboard</button>
          </Link>
          
        </div>
      )}

      {/* IMP: Once the backend is completed perform proper logout by deleting the cookie */}
      {props.type === "loggedin" && (
        <div className="flex justify-center items-center">
          <Link to="/">
            <div className="max-h-14 mr-5 block md:hidden">
              <ButtonSecondary text="Sign Out" size="base" />
            </div>
          </Link>
          <Link to="/">
            <div className="max-h-14 mr-20 hidden md:block">
              <ButtonSecondary text="Sign Out" size="lg" />
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}

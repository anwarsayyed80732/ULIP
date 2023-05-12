import React from "react";
import logo from "../../assets/images/Icon.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="py-14 mb-20 w-4/5 mx-auto shadow-bottom rounded-lg">
      <Link to={"/"}>
        <img
          src={logo}
          alt="Unified Logistics Interface Platform"
          width="350px"
          height="350px"
          className="mx-auto mt-10"
        ></img>
      </Link>
      <p className="text-xl mx-auto text-center">
        View source code on{" "}
        <a
          className="text-orange-primary hover:text-white"
          href="https://github.com/gokz1119/ulip"
          target={"_blank"}
          rel="noreferrer"
        >
          GitHub
        </a>
      </p>
    </div>
  );
}

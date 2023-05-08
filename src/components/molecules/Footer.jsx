import React from "react";
import logo from "../../assets/images/Icon.png";

export default function Footer() {
  return (
    <div className="py-14 mb-20 w-4/5 mx-auto shadow-xl shadow-orange-primary rounded-lg">
      <img
        src={logo}
        alt="Unified Logistics Interface Platform"
        width="350px"
        height="350px"
        className="mx-auto mt-10"
      ></img>
      <p className="text-xl mx-auto text-center">
        View source code on{" "}
        <a
          className="text-orange-primary"
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

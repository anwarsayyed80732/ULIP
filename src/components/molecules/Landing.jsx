import React from "react";
import ButtonPrimary from "../atoms/ButtonPrimary";
import ButtonSecondary from "../atoms/ButtonSecondary";


export default function Landing() {
  return (
    <>
      <div className="bg-landing bg-cover w-screen" style={{ height: "800px" }}>
        <h1 className="pt-48 ml-10 text-6xl text-start tracking-wide md:ml-20 text-white" style={{ lineHeight: '5rem' }}>
          <span className="text-orange-light">U</span>nified{" "}
          <span className="text-orange-light">L</span>ogistics
          <br></br>
          <span className="text-orange-light">I</span>nterface{" "}
          <span className="text-orange-light">P</span>latform
        </h1>
        <h2 className="mt-4 text-3xl text-start ml-10 md:ml-20 text-orange-primary italic">
          Goods. Faster
        </h2>
        <div className="float-left mt-6 ml-10 md:ml-20">
          <ButtonPrimary text="Log In" size="xl" />
        </div>
        <div className="float-left mt-6 ml-4">
          <ButtonSecondary text="Sign Up" size="xl" />
        </div>
      </div>
    </>
  );
}

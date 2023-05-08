import React from "react";

export default function ButtonSecondary(props) {
  return (
    <>
      {props.size === "xl" && (
        <button
          className="px-6 py-2 text-xl rounded-md bg-opacity-0 text-orange-primary border-2 border-orange-primary 
          hover:text-white hover:border-white transition duration-300 ease-in-out"
        >
          {props.text}
        </button>
      )}
      {props.size === "lg" && (
        <button
          className="px-3 py-1 text-lg rounded-md text-orange-primary border-2 border-orange-primary 
          hover:text-white hover:border-white transition duration-300 ease-in-out"
        >
          {props.text}
        </button>
      )}
      {props.size === "base" && (
        <button
          className="px-3 py-1 text-base rounded-md text-orange-primary border-2 border-orange-primary 
          hover:text-white hover:border-white transition duration-300 ease-in-out"
        >
          {props.text}
        </button>
      )}
    </>
  );
}

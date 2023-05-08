import React from "react";

export default function ButtonPrimary(props) {
  return (
    <>
      {props.size === "xl" && (
        <button className="px-6 py-2 text-xl rounded-md bg-orange-primary text-white border-2 border-orange-primary 
        hover:bg-opacity-0 hover:text-orange-primary transition duration-300 ease-in-out">
          {props.text}
        </button>
      )}
      {props.size === "lg" && (
        <button className="px-3 py-1 text-lg rounded-md bg-orange-primary text-white border-2 border-orange-primary 
        hover:bg-opacity-0 hover:text-orange-primary transition duration-300 ease-in-out">
        {props.text}
      </button>
      )}
      {props.size === "base" && (
        <button className="px-3 py-1 text-base rounded-md bg-orange-primary text-white border-2 border-orange-primary 
        hover:bg-opacity-0 hover:text-orange-primary transition duration-300 ease-in-out">
        {props.text}
      </button>
      )}
    </>
  );
}

import React from "react";
import { Link } from "react-router-dom";

const Button = ({ to, btntext }) => {
  return (
    <div>
      <button className=" py-1 px-4 rounded-3xl bg-blue-500 text-white font-semibold cursor-pointer hover:bg-blue-400">
        {btntext}
      </button>
    </div>
  );
};

export default Button;

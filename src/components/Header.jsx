import React from "react";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="py-3 px-5  flex justify-between items-center box">
      <Link to={"/"}>
        <div className="flex">
          <img src={logo} alt="" className="h-7 w10" />
          <h1 className="font-bold text-2xl text-blue-500 ">
            Twin Appartments
          </h1>
        </div>
      </Link>

      <div className="flex gap-10 items-center">
        <Link to={"/login"}>
          <h3 className="text-base hover:text-blue-500 cursor-pointer font-semibold">
            Sign in
          </h3>
        </Link>
        <Link to={"/register"}>
          <button className=" py-1 px-4 rounded-3xl bg-blue-500 text-white font-semibold cursor-pointer hover:bg-blue-400">
            Get started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;

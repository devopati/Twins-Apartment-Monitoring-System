import React from "react";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Button from "../components/Button";
const WelcomePage = () => {
  return (
    <>
      <div className="mt-8">
        <Header />
      </div>
      <div className="container mt-16 flex flex-col items-center justify-center bg-[url(/assets/images/houses.svg)] bg-cover">
        <h1 className="pt-10 font-bold text-6xl text-center mx-48">
          Welcome to Twin Appartments home{" "}
          <span className="text-blue-500">monitoring system</span>.
        </h1>

        <p className="pt-10 text-xl text-center mx-80">
          Easiest way to monitor your daily and monthly bills,records and daily
          activities. Know your expenditure at Twins appartments for decision
          making
        </p>

        <div className="flex gap-7">
          <Link to={""} className="mt-10">
            <Button btntext={"About"} />
          </Link>
          <Link to={"/"} className="mt-10">
            <Button btntext={"Contact us"} />
          </Link>
        </div>
      </div>
      <div class=" bg-gradient-to-r from-cyan-500 to-blue-500 mt-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440
        310"
        >
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,192L48,186.7C96,181
        192,171,288,170.7C384,169,480,
        179,576,186.7C672,194,768,203,
        864,197.3C960,192,1056,160,115
        2,128L1152,0L1248,128L1344,
        128L1440,128L1440,320L1344,320
        L1248,320L1152,320L1056,320
        C960,320,864,320,768,
        197.3C672,203,576,194,480,
        179C384,179,288,170.7,
        192,186.7L96,197.3L96,320L0,32
        0Z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default WelcomePage;

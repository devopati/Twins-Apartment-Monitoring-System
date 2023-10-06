import React from "react";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header";
import Signup from "../components/Signup";
const WelcomePage = () => {
  return (
    <>
      <Header />
      <div className="container mt-10 ">
        <Signup />
        <h1 className="font-bold">Welcome to the Home Page</h1>
      </div>
    </>
  );
};

export default WelcomePage;

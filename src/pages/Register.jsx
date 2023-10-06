import React from "react";
import Signup from "../components/Signup";
import Header from "../components/Header";

const Register = () => {
  return (
    <>
      <Header />
      <div className="mt-4 flex flex-col items-center">
        <Signup />
      </div>
    </>
  );
};

export default Register;

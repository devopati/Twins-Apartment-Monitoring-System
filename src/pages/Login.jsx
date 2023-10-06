import React from "react";
import Header from "../components/Header";
import Signin from "../components/signin";

const Login = () => {
  return (
    <>
      <Header />
      <div className="mt-10 flex flex-col items-center">
        <Signin />
      </div>
    </>
  );
};

export default Login;

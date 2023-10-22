import React from "react";

import spinner from "../assets/images/spinner.svg";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center">
      <img src={spinner} alt="Loading..." />
    </div>
  );
};

export default LoadingSpinner;

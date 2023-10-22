import React from "react";

const CustomButton = ({ onButtonPress, isLoading, btnTitle }) => {
  return (
    <div>
      <button
        onClick={!isLoading && onButtonPress}
        className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        {isLoading ? "Processing..." : btnTitle}
      </button>
    </div>
  );
};

export default CustomButton;

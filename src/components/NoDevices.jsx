import React from "react";
import empty from "../assets/images/empty.png";

const NoDevices = ({ onAddPress, onReloadPress }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-8 ring-1 gap-2 py-2">
      <img src={empty} alt="No devicess" />

      <small
        onClick={onReloadPress}
        className="font-semibold text-base text-blue-500 cursor-pointer hover:text-blue-300 transition duration-300 ease-in-out"
      >
        Reload
      </small>
      <small
        onClick={onAddPress}
        className="font-semibold text-base text-blue-500 cursor-pointer hover:text-blue-300 transition duration-300 ease-in-out"
      >
        Add a device
      </small>
    </div>
  );
};

export default NoDevices;

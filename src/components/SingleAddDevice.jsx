import React from "react";
import { IoMdAdd } from "react-icons/io";
import { PiTelevisionSimpleDuotone } from "react-icons/pi";

const SingleAddDevice = ({ name, Icon, onAddDeviceClick }) => {
  return (
    <div className="flex shadow-lg bg-slate-100 p-2 rounded-md items-center justify-between flex-col gap-2 w-48 py-5 ">
      <div className="rounded-full bg-slate-700 h-10 w-10 flex items-center justify-center">
        <Icon className="text-slate-100" size={28} />
      </div>
      <small className="font-semibold text-base">{name}</small>
      <div
        className="rounded-full bg-blue-500 h-8 w-8 flex items-center justify-center hover:bg-blue-400 transition cursor-pointer"
        onClick={onAddDeviceClick}
      >
        <IoMdAdd className="text-slate-100" size={24} />
      </div>
    </div>
  );
};

export default SingleAddDevice;

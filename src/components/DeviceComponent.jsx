import React from "react";
import { AiFillEye, AiOutlineWifi, AiTwotoneDelete } from "react-icons/ai";

const DeviceComponent = ({ Icon, name, text, onDeviceClick }) => {
  return (
    <div
      className="flex border-slate-400 border-b-2 justify-between items-center"
      onClick={onDeviceClick}
    >
      <div className="flex gap-5 items-center  pb-4">
        <div className="rounded-full bg-slate-700 h-10 w-10 flex items-center justify-center">
          {Icon && <Icon className="text-slate-100" size={30} />}
        </div>
        <div className="flex flex-col gap-0 items-center">
          <small className="font-semibold text-sm">{name}</small>
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <small className="text-slate-700 font-bold text-xl"></small>
              <small className="font-bold text-xs">{text}</small>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="rounded-full bg-green-600 h-7 w-7 flex items-center justify-center cursor-pointer">
          <AiFillEye className="text-slate-100" size={24} />
        </div>
        {/* 
        <div className="rounded-full bg-red-600 h-7 w-7 flex items-center justify-center cursor-pointer">
          <AiTwotoneDelete className="text-slate-100" size={24} />
        </div> */}
      </div>
    </div>
  );
};

export default DeviceComponent;

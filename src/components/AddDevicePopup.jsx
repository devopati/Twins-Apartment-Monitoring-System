import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import SingleAddDevice from "./SingleAddDevice";
import { DevicesToAdd } from "../Data/DevicesToAdd";
// import { FaComputer as computer } from "react-icons/fa";

const AddDevicePopup = ({
  visible,
  onClosePress,
  setDeviceIdentifier,
  setNewDeviceVisible,
}) => {
  return (
    <div
      className={`bg-blue-200 py-3 px-4 w-full shadow-xl rounded flex flex-col gap-4 pb-6 ${
        visible ? "visible" : "invisible"
      }`}
    >
      <div
        className="flex justify-end cursor-pointer hover:rounded-full hover:bg-red-300 p-2 self-end transition-all"
        onClick={onClosePress}
      >
        <AiOutlineClose size={24} className="flex text-red-700" />
      </div>
      <h1 className="text-slate-600 font-bold text-xl px-12">
        Choose a device to be added
      </h1>

      <div className="grid grid-cols-3 gap-5">
        {DevicesToAdd.map((device, index) => {
          return (
            <div key={index}>
              <SingleAddDevice
                Icon={device.icon}
                name={device.name}
                onAddDeviceClick={() => {
                  setNewDeviceVisible(true);
                  setDeviceIdentifier(device);
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddDevicePopup;

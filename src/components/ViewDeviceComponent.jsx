import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import LoadingSpinner from "./LoadingSpinner";
import Draggable from "react-draggable";

const ViewDeviceComponent = ({ visible, onClosePress, currentDevice }) => {
  const initialPosition = { x: 100, y: 10 };
  return (
    <Draggable position={initialPosition}>
      <div
        className={`bg-slate-100 py-3 px-4 w-full shadow-2xl rounded flex flex-col gap-4 pb-6 h-full  ${
          visible ? "visible" : "invisible"
        }`}
      >
        <div
          className="flex justify-end cursor-pointer hover:rounded-full hover:bg-red-300 p-2 self-end transition-all"
          onClick={onClosePress}
        >
          <AiOutlineClose size={24} className="flex text-red-700" />
        </div>

        <h1 className="  font-bold text-xl px-12">
          Current{" "}
          <small className="text-blue-500  text-xl">
            {currentDevice?.uniqueName}
          </small>{" "}
          real time data
        </h1>
        <LoadingSpinner />
      </div>
    </Draggable>
  );
};

export default ViewDeviceComponent;

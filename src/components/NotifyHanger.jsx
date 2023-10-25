import React from "react";
import Draggable from "react-draggable";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";

const NotifyHanger = ({
  visible,
  title,
  onClosePress,
  onRemoveDeviceClick,
}) => {
  const { removingDevice } = useSelector((state) => state.device);
  return (
    <Draggable>
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

        <div className="self-center">
          <h1 className="  font-bold text-lg px-12 text-center">
            All device data will be erased
          </h1>
          <h4 className="font-semibold text-sm text-slate-800 text-center py-3">
            Are you sure you want to remove this device <br /> from your
            devices?
          </h4>
        </div>
        <div className="self-end mt-6">
          <button
            className=" py-1 px-4 rounded-md bg-red-500 text-white font-semibold cursor-pointer hover:bg-red-400 "
            onClick={onRemoveDeviceClick}
          >
            {removingDevice ? "Deleting data..." : "Remove"}
          </button>
        </div>
      </div>
    </Draggable>
  );
};

export default NotifyHanger;

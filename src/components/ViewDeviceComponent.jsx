import React from "react";
import { AiOutlineClose, AiOutlinePoweroff } from "react-icons/ai";
import LoadingSpinner from "./LoadingSpinner";
import Draggable from "react-draggable";
import Button from "./Button";
import { useSelector } from "react-redux";

const ViewDeviceComponent = ({
  visible,
  onClosePress,
  currentDevice,
  onRemoveDeviceClick,
  Icon,
}) => {
  const initialPosition = { x: 100, y: 10 };

  const { isLoading, singleDeviceData, removingDevice } = useSelector(
    (state) => state.device
  );

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
        {isLoading && <LoadingSpinner />}
        {!isLoading && (
          <div
            className={`rounded-full ${
              singleDeviceData?.isOn ? "bg-green-400" : "bg-slate-400 "
            } h-10 w-10 flex items-center justify-center self-center`}
          >
            <AiOutlinePoweroff className="text-slate-100" size={24} />
          </div>
        )}

        {!isLoading && (
          <div className="flex flex-col gap-7 mt-4">
            <div className="flex justify-between">
              <div className="flex flex-col gap-3">
                <small className="font-semibold text-base text-slate-800">
                  Device Type:
                </small>
                <small className="font-semibold text-base text-slate-500 border-b border-blue-400 px-4 py-1">
                  {" "}
                  {singleDeviceData?.identifier?.name}
                </small>
              </div>

              <div className="flex flex-col gap-3 w-48">
                <small className="font-semibold text-base text-slate-800">
                  Serial Number:
                </small>
                <small className="font-semibold text-base text-slate-500 border-b border-blue-400 px-4 py-1">
                  {singleDeviceData?.serialNo}
                </small>
              </div>
            </div>

            <div className="flex flex-col gap-3 w-44">
              <small className="font-semibold text-base text-slate-800">
                Consumption capacity:
              </small>
              <small className="font-semibold text-base text-slate-500 border-b border-blue-400 px-4 py-1">
                {" "}
                {singleDeviceData?.consumptionCapacity} (W)
              </small>
            </div>

            <div className="flex justify-between">
              <div className="flex flex-col gap-3 w-40">
                <small className="font-semibold text-base text-slate-800">
                  Active hours:
                </small>
                <small className="font-semibold text-base text-slate-500 border-b border-blue-400 px-4 py-1">
                  {" "}
                  {singleDeviceData?.hoursActive
                    ? singleDeviceData?.hoursActive
                    : 0}
                </small>
              </div>

              <div className="flex flex-col gap-3 w-44">
                <small className="font-semibold text-base text-slate-800">
                  Tokens consumed:
                </small>
                <small className="font-semibold text-base text-slate-500 border-b border-blue-400 px-4 py-1">
                  {" "}
                  {singleDeviceData?.tokensConsumed}
                </small>
              </div>
            </div>

            <div className="self-end mt-6">
              <button
                className=" py-1 px-4 rounded-md bg-red-500 text-white font-semibold cursor-pointer hover:bg-red-400 "
                onClick={onRemoveDeviceClick}
              >
                {removingDevice ? "Deleting data..." : "Remove device"}
              </button>
            </div>
          </div>
        )}
      </div>
    </Draggable>
  );
};

export default ViewDeviceComponent;

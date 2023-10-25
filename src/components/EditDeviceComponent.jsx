import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import LoadingSpinner from "./LoadingSpinner";
import {
  AiFillCheckCircle,
  AiOutlineCheckCircle,
  AiOutlineClose,
} from "react-icons/ai";
import InputField from "./InputField";
import { useDispatch, useSelector } from "react-redux";
import Dropdown from "./Dropdown";
import {
  GetAllDevices,
  UpdateDevice,
  setDeviceUpdated,
} from "../redux/slices/DeviceSlice";

const EditDeviceComponent = ({
  onClosePress,
  visible,
  device,
  setEditdeviceActive,
}) => {
  const dispatch = useDispatch();

  const profileData = JSON.parse(localStorage.getItem("user"));

  const { isLoading, singleDeviceData, updatingDevice, deviceUpdated } =
    useSelector((state) => state.device);

  const [deviceStatus, setDeviceStatus] = useState(singleDeviceData?.isOn);
  const [uniqueName, setUniqueName] = useState(singleDeviceData?.uniqueName);
  const [consumptionCapacity, setConsumptionCapacity] = useState(
    singleDeviceData?.consumptionCapacity
  );
  const [hoursActive, setHoursActive] = useState(singleDeviceData?.hoursActive);

  useEffect(() => {
    setDeviceStatus(singleDeviceData?.isOn);
    setConsumptionCapacity(singleDeviceData?.consumptionCapacity);
    setUniqueName(singleDeviceData?.uniqueName);
    setHoursActive(singleDeviceData?.hoursActive);
  }, [singleDeviceData, isLoading]);

  const onUpdateDeviceHandler = async (e) => {
    e.preventDefault();

    const data = {
      deviceId: singleDeviceData?._id,
      device: {
        uniqueName: uniqueName,
        consumptionCapacity: Number(consumptionCapacity),
        hoursActive: Number(hoursActive),
        isOn: deviceStatus === true ? true : false,
      },
    };

    await dispatch(UpdateDevice(data));
  };

  useEffect(() => {
    if (deviceUpdated) {
      setEditdeviceActive(false);
      (async () => {
        await dispatch(GetAllDevices(profileData?._id));
      })();
      dispatch(setDeviceUpdated(false));
    }
  }, [dispatch, deviceUpdated, updatingDevice]);

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

        <h1 className="  font-bold text-xl px-12">Edit {device?.uniqueName}</h1>
        {/* <LoadingSpinner /> */}

        <div className="flex flex-col">
          <div className="flex gap-16 mt-4 items-center">
            <InputField
              value={uniqueName}
              label={"Device Unique Name:"}
              onChangeHandler={(e) => setUniqueName(e.target.value)}
            />
            <InputField
              value={consumptionCapacity}
              label={"Consumption capacity (W):"}
              onChangeHandler={(e) => setConsumptionCapacity(e.target.value)}
            />
          </div>

          <div className="flex gap-16 mt-4 items-center">
            <InputField
              value={hoursActive ? hoursActive : 0}
              label={"Hours Active:"}
              onChangeHandler={(e) => setHoursActive(e.target.value)}
            />
            {/* <InputField
              value={singleDeviceData?.consumptionCapacity}
              label={"Consumption capacity (W):"}
            /> */}
          </div>

          <div className="mt-5">
            <label
              htmlFor={"isOn"}
              className="block text-sm font-medium leading-6 text-gray-600"
            >
              Device status:
            </label>

            <div className="flex gap-8 mt-4">
              <div className="flex gap-3 items-center">
                <small className="text-slate-700 font-semibold">ON</small>
                {deviceStatus == true ? (
                  <AiFillCheckCircle size={24} className="text-blue-600" />
                ) : (
                  <AiOutlineCheckCircle
                    size={24}
                    className="text-slate-400  cursor-pointer"
                    onClick={() => setDeviceStatus(true)}
                  />
                )}
              </div>

              <div className="flex gap-3 items-center">
                <small className="text-slate-700 font-semibold">OFF</small>
                {deviceStatus == false ? (
                  <AiFillCheckCircle size={24} className="text-blue-600" />
                ) : (
                  <AiOutlineCheckCircle
                    size={24}
                    className="text-slate-400  cursor-pointer"
                    onClick={() => setDeviceStatus(false)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="self-end mt-6">
          <button
            className=" py-1 px-4 rounded-md bg-blue-500 text-white font-semibold cursor-pointer hover:bg-blue-400 "
            onClick={onUpdateDeviceHandler}
          >
            {updatingDevice ? "Saving changes..." : "Save changes"}
          </button>
        </div>
      </div>
    </Draggable>
  );
};

export default EditDeviceComponent;

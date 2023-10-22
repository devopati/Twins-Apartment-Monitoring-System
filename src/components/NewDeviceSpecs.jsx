import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import InputField from "./InputField";
import CustomButton from "./CustomButton";
import { useDispatch, useSelector } from "react-redux";
import {
  AddNewDevice,
  GetAllDevices,
  setIsAdded,
} from "../redux/slices/DeviceSlice";
import { useNavigate } from "react-router-dom";

const NewDeviceSpecs = ({
  visible,
  onClosePress,
  identifierName,
  Icon,
  identifier,
  setAddDeviceVisible,
  setNewDeviceVisible,
}) => {
  const dispatch = useDispatch();

  const profileData = JSON.parse(localStorage.getItem("user"));

  const { isLoading, isAdded } = useSelector((state) => state.device);

  const [deviceData, setDeviceData] = useState({
    consumptionCapacity: 0,
    uniqueName: "",
    serialNo: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setDeviceData({ ...deviceData, [name]: value });
  };

  const [field1Err, setField1Err] = useState(false);
  const [field2Err, setField2Err] = useState(false);
  const [field3Err, setField3Err] = useState(false);

  useEffect(() => {
    if (deviceData.uniqueName.length > 1) {
      setField1Err(false);
    }
    if (deviceData.consumptionCapacity > 0) {
      setField2Err(false);
    }
    if (deviceData.serialNo.length > 1) {
      setField3Err(false);
    }
  }, [
    deviceData.consumptionCapacity,
    deviceData.serialNo,
    deviceData.uniqueName,
  ]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (deviceData.uniqueName.length < 1) {
      setField1Err(true);
      return;
    }
    if (
      deviceData.consumptionCapacity == 0 ||
      deviceData.consumptionCapacity == null
    ) {
      setField2Err(true);
      return;
    }

    if (!deviceData.serialNo) {
      setField3Err(true);
      return;
    }

    const data = {
      userId: profileData?._id,
      device: {
        identifier,
        ...deviceData,
      },
    };

    await dispatch(AddNewDevice(data));
  };

  useEffect(() => {
    if (isAdded) {
      (async () => {
        await dispatch(GetAllDevices(profileData?._id));
      })();

      setNewDeviceVisible(false);
      setTimeout(() => {
        setAddDeviceVisible(false);
      }, 400);

      setDeviceData({
        ...deviceData,
        consumptionCapacity: 0,
        uniqueName: "",
        serialNo: "",
      });
      dispatch(setIsAdded(false));
    }
  }, [dispatch, isAdded, isLoading]);
  return (
    <div
      className={`bg-slate-100 py-3 px-4 w-full shadow-xl rounded flex flex-col gap-4 pb-6 h-full ${
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
        Fill the fields to add {identifierName}
      </h1>

      <div className="rounded-full bg-slate-700 h-16 w-16 flex items-center justify-center self-center">
        {Icon && <Icon className="text-slate-100" size={40} />}
      </div>

      <div className="flex flex-col gap-5">
        <InputField
          label={"Enter unique name:"}
          onChangeHandler={handleInputChange}
          value={deviceData.uniqueName}
          name={"uniqueName"}
          fieldErr={field1Err}
        />

        <InputField
          label={"Consumption capacity(W):"}
          type={"number"}
          onChangeHandler={handleInputChange}
          value={deviceData.consumptionCapacity}
          name={"consumptionCapacity"}
          fieldErr={field2Err}
        />

        <InputField
          label={"Serial number:"}
          onChangeHandler={handleInputChange}
          value={deviceData.serialNo}
          name={"serialNo"}
          fieldErr={field3Err}
        />

        <CustomButton
          btnTitle={"Add device"}
          onButtonPress={onSubmitHandler}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default NewDeviceSpecs;

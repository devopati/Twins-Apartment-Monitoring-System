import React from "react";
import { useSelector } from "react-redux";
import { GetSingleDevice } from "../redux/slices/DeviceSlice";
import DeviceComponent from "./DeviceComponent";
import { GetSpecificIcon } from "../utils/GetSpecificIcon";

const HighConsumptionDevices = () => {
  const { isLoading, devices } = useSelector((state) => state.device);
  return (
    <div className="flex justify-between px-20 bg-blue-300 py-2 pt-5 flex-wrap ">
      {devices.length > 0 &&
        !isLoading &&
        devices.map((item) => {
          return (
            <div key={item?._id}>
              <DeviceComponent
                viewIcon={true}
                bottomBorder={true}
                column={true}
                name={item?.uniqueName}
                Icon={GetSpecificIcon(item?.identifier?.name)[0]?.icon}
              />
              <small className="flex items-center justify-center">
                {(item?.tokensConsumed * 12).toFixed(2)}
              </small>
            </div>
          );
        })}
    </div>
  );
};

export default HighConsumptionDevices;

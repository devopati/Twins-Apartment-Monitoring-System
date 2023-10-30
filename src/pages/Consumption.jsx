import React, { useEffect, useState } from "react";
import DashContainer from "../components/DashContainer";
import EnergyConsumptionGraph from "../components/EnergyConsumptionGraph";
import { TbDevices } from "react-icons/tb";
import { RiTokenSwapFill } from "react-icons/ri";
import { FiPower } from "react-icons/fi";
import Table from "../components/Table";
import { useSelector } from "react-redux";
import EditDeviceComponent from "../components/EditDeviceComponent";

const Consumption = () => {
  const { isLoading, devices } = useSelector((state) => state.device);

  const [editDeviceActive, setEditdeviceActive] = useState(false);
  const [deviceToEdit, setDeviceToEdit] = useState({});
  return (
    <div className="overflow-y-auto scrollbar-hide h-max">
      <div
        className={`absolute w-max left-1/4 top-1/4 transform -translate-x-1/4 -translate-y-1/4 ${
          editDeviceActive ? " z-50" : "z-0"
        }`}
      >
        <EditDeviceComponent
          visible={editDeviceActive}
          onClosePress={() => setEditdeviceActive(false)}
          device={deviceToEdit}
          setEditdeviceActive={setEditdeviceActive}
        />
      </div>
      <div className="flex justify-between">
        <DashContainer
          background={"bg-blue-400"}
          text={"My Devices"}
          text2={devices && devices.length}
          Icon={TbDevices}
        />
        <DashContainer
          background={"bg-red-400"}
          text={"Tokens consumed"}
          text2={
            devices
              ? devices
                  ?.reduce(
                    (acc, currValue) => acc + currValue.tokensConsumed,
                    0
                  )
                  .toFixed(2)
              : 0
          }
          Icon={RiTokenSwapFill}
        />
        <DashContainer
          background={"bg-teal-400"}
          text={"Devices turned on"}
          Icon={FiPower}
          text2={
            devices
              ? devices?.filter((device) => device?.isOn == true)?.length
              : 0
          }
        />
      </div>

      <div className="mt-16">
        <small className="text-slate-700 font-semibold text-2xl mx-3">
          Added devices
        </small>
        <div className="mt-6">
          <Table
            setDeviceToEdit={setDeviceToEdit}
            setEditdeviceActive={setEditdeviceActive}
          />
        </div>
      </div>

      <div className="mt-16">
        <small className="text-slate-700 font-bold text-2xl">
          Power Consumption (kW)
        </small>
        <EnergyConsumptionGraph />
      </div>
    </div>
  );
};

export default Consumption;

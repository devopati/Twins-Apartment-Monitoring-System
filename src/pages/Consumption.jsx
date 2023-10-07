import React from "react";
import WaterConsumptionGraph from "../components/WaterConsumptionGraph";
import EnergyConsumptionGraph from "../components/EnergyConsumptionGraph";

const Consumption = () => {
  return (
    <div>
      <div>
        <small className="text-slate-700 font-bold text-2xl">
          Water Consumption (Ltrs.)
        </small>
        <WaterConsumptionGraph />
      </div>
      <div>
        <small className="text-slate-700 font-bold text-2xl">
          Energy Consumption (kWh)
        </small>
        <EnergyConsumptionGraph />
      </div>
    </div>
  );
};

export default Consumption;

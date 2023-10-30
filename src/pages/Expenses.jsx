import React from "react";
import ExpensesGraph from "../components/ExpensesGraph";
import ExpensesTable from "../components/ExpensesTable";
import { useSelector } from "react-redux";
import HighConsumptionDevices from "../components/HighConsumptionDevices";

const Expenses = () => {
  const { isLoading, devices } = useSelector((state) => state.device);

  let totalExpense = 0;

  for (let i = 0; i <= devices?.length; i++) {
    if (devices[i]?.tokensConsumed > 0) {
      totalExpense += devices[i]?.tokensConsumed * 12;
    }
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between">
        <h1 className="text-slate-500 text-3xl">
          Ksh.{totalExpense.toFixed(2)}
        </h1>
        <div className="relative pt-1 px-0 overflow-hidden">
          <ExpensesGraph />
          <div className="absolute h-32 w-32 bg-slate-50 ring-1 ring-slate-300 top-16 left-20 rounded-full flex items-center justify-center shadow-lg">
            <h1 className="text-slate-500 text-xl">Ksh.</h1>
            <h1 className="text-slate-500 text-xl">
              {totalExpense.toFixed(2)}
            </h1>
          </div>
        </div>
        <h2 className="text-slate-400 text-xl font-light">
          For the last 30 days
        </h2>
      </div>

      <div className="flex flex-col">
        <ExpensesTable />
      </div>

      {/* <div className="flex-flex-col">
        <HighConsumptionDevices />
      </div> */}
    </div>
  );
};

export default Expenses;

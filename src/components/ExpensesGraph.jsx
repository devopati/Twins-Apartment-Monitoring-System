import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";

const ExpensesGraph = () => {
  const { isLoading, devices } = useSelector((state) => state.device);

  let deviceNames = devices?.map((item) => item?.uniqueName);
  let deviceAmounts = devices?.map((item) =>
    Math.floor(item?.tokensConsumed * 12)
  );

  const [graphState, setGraphState] = useState({
    options: {
      labels: [...deviceNames],
    },
    series: [...deviceAmounts],
  });

  useEffect(() => {
    setGraphState({
      options: {
        labels: [...deviceNames],
      },
      series: [...deviceAmounts],
    });
  }, [devices]);
  return (
    <div>
      <Chart
        options={graphState.options}
        series={graphState.series}
        type="donut"
        width={444.5}
        height={250}
      />
    </div>
  );
};

export default ExpensesGraph;

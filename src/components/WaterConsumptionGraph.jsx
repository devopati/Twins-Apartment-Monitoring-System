import React, { useState } from "react";
import Chart from "react-apexcharts";

const WaterConsumptionGraph = () => {
  const [graphState, setGraphState] = useState({
    options: {
      chart: {
        id: "apexchart-example",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "Consumed",
        data: [30, 40, 35, 50, 49, 60, 40, 91, 125],
      },
      {
        name: "Collected from rain",
        data: [10, 10, 15, 15, 19, 30, 70, 51, 75],
      },
    ],
  });
  return (
    <div>
      <Chart
        options={graphState.options}
        series={graphState.series}
        type="bar"
        // width={500}
        height={320}
      />
    </div>
  );
};

export default WaterConsumptionGraph;

// bar
// line
// area
// radar
// histogram
// scatter
// heatmap

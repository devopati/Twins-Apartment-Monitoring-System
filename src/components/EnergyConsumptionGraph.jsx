import React, { useState } from "react";
import Chart from "react-apexcharts";

const EnergyConsumptionGraph = () => {
  const [graphState, setGraphState] = useState({
    options: {
      chart: {
        id: "apexchart-example",
      },
      xaxis: {
        categories: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"],
      },
    },
    series: [
      {
        name: "Regular Energy",
        data: [31, 48, 35, 50, 40, 60],
      },
      {
        name: "Generated Solar Power",
        data: [10, 21, 25, 12, 49, 30],
      },
    ],
  });
  return (
    <div>
      <div>
        <Chart
          options={graphState.options}
          series={graphState.series}
          type="heatmap"
          //   width={500}
          height={320}
        />
      </div>
    </div>
  );
};

export default EnergyConsumptionGraph;

// bar
// line
// area
// radar
// histogram
// scatter
// heatmap

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
        data: [3150, 4890, 3545, 5078, 4009, 6000],
      },
      {
        name: "Generated Solar Power",
        data: [1000, 2110, 2500, 1255, 4925, 301],
      },
    ],
  });
  return (
    <div>
      <div>
        <Chart
          options={graphState.options}
          series={graphState.series}
          type="area"
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

import React, { useState } from "react";
import Chart from "react-apexcharts";

const WaterConsumptionGraph = () => {
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
        name: "Consumed",
        data: [300, 415, 357, 510, 429, 630],
      },
      {
        name: "Collected from rain",
        data: [100, 120, 155, 265, 78, 170],
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

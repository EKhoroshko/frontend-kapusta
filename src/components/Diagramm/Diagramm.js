import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
//import style from "./Diagram.module.css";

const chartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: " График",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [165, 259, 80, 581, 156, 55, 40],
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

function Diagramm() {
  return (
    <div>
      <Bar
        options={options}
        data={chartData}
        width={100}
        // height={50}
        // options={{
        //   responsive: true,
        //   maintainAspectRatio: false
        // }}
      />
    </div>
  );
}
export default Diagramm;

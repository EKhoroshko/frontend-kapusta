import React from "react";
import { Bar } from "react-chartjs-2";
//import style from "./Diagram.module.css";

import Panel from "./Panel";

const Chart = ({ chartData }) => {
  //const { width } = useWindowSize();
  return <Panel>{<Bar data={chartData} options={{}} />}</Panel>;
};

export default Chart;

// export default function Diagram() {
//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top' as const,
//       }
//     },

//   };
//   /// назва продуктів на які розбита діаграма
//   const labels = ({ children }) => {
//     return <div className={styles.panel}>{children}</div>;
//   };

//   const data = {
//     labels: sortedLables,
//     datasets: [
//       {
//         data: (),
//         backgroundColor: colorsArray(sortedSum),
//         borderColor: colorsArray(sortedSum),
//         borderWidth: 1,
//         borderRadius: 10,
//         barThickness: barWidth,
//         barMargin: 20,

//       }
//     ],
//   };

//   return (
//     <div className={style}>
//       return (

//       <Bar data={data} height={height} width={320} options={options} />

//     </div>
//   );
// }

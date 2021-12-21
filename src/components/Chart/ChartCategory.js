import React from "react";
import { useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";
// eslint-disable-next-line no-unused-vars
import Chart from "chart.js/auto";
import { getIDiagramInfo } from "../../redux/transaction/selectors";

import s from "../Chart/Chart.module.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function ChartCategory({ category, type }) {
  const info = useSelector(getIDiagramInfo);

  console.log(info);

  return (
    <div className={s.chartContainer}>
      {/*<Bar data={data} width={320} height={450} options={optionsVertical} />*/}
    </div>
  );
}

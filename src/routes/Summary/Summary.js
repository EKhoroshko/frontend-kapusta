import React from "react";
// import { useHistory } from "react-router-dom";

import ArrowGoBack from "../../components/ArrowGoBack/ArrowGoBack";
import ReportListByCategory from "../../components/ReportListByCategory";
import DetailsBalance from "../../components/ReportDetailsBalance";
import ReportListChart from "../../components/ReportListChart";
import ReportButtonGoBack from "../../components/ReportButtonGoBack";

import style from "./Summary.module.css";

function Summary() {
  // const history = useHistory();

  // const goHome = () => {
  //   history.push("/home");
  // };

  return (
    <div className={style.container}>
      <div className={style.info}>
        <ReportButtonGoBack />
        {/* <ArrowGoBack onClick={goHome} /> */}

        <div>
          <p> Баланс:</p>
          <p> ТУТ БАЛАНС</p>
        </div>
        <ul>
          <li>Текущий период:</li>
          <li> arrow + period</li>
        </ul>
      </div>
      <DetailsBalance />
      <ReportListByCategory />
      <ReportListChart />
    </div>
  );
}

export default Summary;

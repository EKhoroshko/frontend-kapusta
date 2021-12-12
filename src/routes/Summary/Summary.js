import React from "react";
import { useHistory } from "react-router-dom";

import ArrowGoBack from "../../components/ArrowGoBack/ArrowGoBack";
import ReportListByCategory from "../../components/ReportListByCategory";
import DetailsBalance from "../../components/DetailsBalance";
import ReportListChart from "../../components/ReportListChart";

// import style from "./Summary.module.css";

function Summary() {
  const history = useHistory();

  const goHome = () => {
    history.push("/home");
  };

  return (
    <div>
      <div>
        <ArrowGoBack onClick={goHome} />
        <p> Баланс:</p>
        <p> ТУТ БАЛАНС</p>
        <ul>
          <li>Текущий период:</li>
          <li> arrow + period</li>
        </ul>
      </div>
      {/* <ul>
        <li> Расходы: сумма</li>
        <li> Доходы: сумма </li>
      </ul>
      <h3>Расходы</h3>
      <ul>
        <li>
          <p>сумма с бека</p>
          <span>картинка</span>
          <p>Категория</p>
        </li>
      </ul> */}
      <DetailsBalance />
      <ReportListByCategory />
      <ReportListChart chartData={100} />
    </div>
  );
}

export default Summary;

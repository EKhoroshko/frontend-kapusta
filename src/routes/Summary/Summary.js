import React from "react";
// import { useHistory } from "react-router-dom";

// import ArrowGoBack from "../../components/ArrowGoBack/ArrowGoBack";
// import ReportListByCategory from "../../components/ReportListByCategory";
// import DetailsBalance from "../../components/ReportDetailsBalance";
// import ReportListChart from "../../components/ReportListChart";
import ReportButtonGoBack from "../../components/ReportButtonGoBack";
import Balance from "../../components/Balance";
//import ReportCurrentPeriod from "../../components/ReportCurrentPeriod";
import Period from "../../components/CurrentPeriod/CurrentPeriod"; // замінила попередню секцію

import style from "./Summary.module.css";

function Summary() {
  // const history = useHistory();

  // const goHome = () => {
  //   history.push("/home");
  // };

  return (
    <div className={style.container}>
      <div className={style.menu}>
        <ReportButtonGoBack />
        <div className={style.menuGrup}>
          <Balance />
          <Period />
        </div>
      </div>
      {/* <DetailsBalance /> */}
      {/* <ReportListByCategory />
      <ReportListChart /> */}
    </div>
  );
}

export default Summary;

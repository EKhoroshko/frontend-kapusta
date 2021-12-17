import React from "react";
// import { useHistory } from "react-router-dom";

// import ArrowGoBack from "../../components/ArrowGoBack/ArrowGoBack";
// import ReportListByCategory from "../../components/ReportListByCategory";
// import DetailsBalance from "../../components/ReportDetailsBalance";
// import ReportListChart from "../../components/ReportListChart";
import ReportButtonGoBack from "../../components/Report/ReportButtonGoBack";
import Balance from "../../components/Balance";
import ReportCurrentPeriod from "../../components/Report/ReportCurrentPeriod";
import CurrentAmount from "../../components/Report/CurrentAmount/CurrentAmount";

import style from "./Summary.module.css";

function Summary() {
  // const history = useHistory();

  // const goHome = () => {
  //   history.push("/home");
  // };

  return (
    <div className={style.summaryImageBg}>
      <div className={style.containerImgBg}>
        <div className={style.container}>
          <div className={style.menu}>
            <ReportButtonGoBack />
            <Balance />
            <ReportCurrentPeriod />
          </div>
          <div>
            <CurrentAmount />
          </div>

          {/* <DetailsBalance /> */}
          {/* <ReportListByCategory />
      <ReportListChart /> */}
        </div>
      </div>
    </div>
  );
}

export default Summary;

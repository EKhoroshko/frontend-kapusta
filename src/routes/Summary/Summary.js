import { useHistory } from "react-router-dom";
import ReportListByCategory from "../../components/Report/ReportListByCategory";
import ReportButtonGoBack from "../../components/Report/ReportButtonGoBack";
import Balance from "../../components/Balance";
import CurrentPeriod from "../../components/Report/CurrentPeriod/CurrentPeriod";
import CurrentAmount from "../../components/Report/CurrentAmount/CurrentAmount";
import ChartCategory from "../../components/Chart/ChartCategory";
import style from "./Summary.module.css";

function Summary() {
  const history = useHistory();

  const goHome = () => {
    history.push("/home");
  };

  return (
    <section className={style.section}>
      <div className={style.summaryImageBg}>
        <div className={style.containerImgBg}>
          <div className={style.container}>
            <div className={style.menu}>
              <ReportButtonGoBack onClick={goHome} />
              <Balance />
              <CurrentPeriod />
            </div>
            <div>
              <CurrentAmount />
            </div>
            <ReportListByCategory />
          </div>
          <ChartCategory />
        </div>
      </div>
      <div className={style.imgBackKapusta}></div>
    </section>
  );
}

export default Summary;

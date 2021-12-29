import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import ReportListByCategory from "../../components/Report/ReportListByCategory";
import ReportButtonGoBack from "../../components/Report/ReportButtonGoBack";
import Balance from "../../components/Balance";
import CurrentPeriod from "../../components/Report/CurrentPeriod/CurrentPeriod";
import CurrentAmount from "../../components/Report/CurrentAmount/CurrentAmount";
import ChartCategory from "../../components/Chart/ChartCategory";
import { diagramDataClear } from "../../redux/transaction/slice";
import style from "./Summary.module.css";

function Summary() {
  const dispatch = useDispatch();
  const history = useHistory();

  const goHome = () => {
    dispatch(diagramDataClear());
    history.push("/home");
  };

  return (
    <section className={style.section}>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.menu}>
            <ReportButtonGoBack onClick={goHome} />
            <Balance />
            <CurrentPeriod />
          </div>
          <div>
            <CurrentAmount />
          </div>
          <ReportListByCategory />
          <ChartCategory />
        </div>
        <div className={style.imgBackKapusta}></div>
      </div>
    </section>
  );
}

export default Summary;

import { useHistory } from "react-router-dom";
import ReportListByCategory from "../../components/Report/ReportListByCategory";
import ReportButtonGoBack from "../../components/Report/ReportButtonGoBack";
import Balance from "../../components/Balance";
import CurrentPeriod from "../../components/Report/CurrentPeriod/CurrentPeriod";
import CurrentAmount from "../../components/Report/CurrentAmount/CurrentAmount";
import ChartCategory from "../../components/Chart/ChartCategory";
import style from "./Summary.module.css";

const category = [
  { name: "vova1", amount: 100, icon: "q", id: 1 },
  { name: "vova2", amount: 200, icon: "qw", id: 2 },
  { name: "vova3", amount: 300, icon: "qe", id: 3 },
  { name: "vova4", amount: 400, icon: "qr", id: 4 },
  { name: "vova5", amount: 500, icon: "qt", id: 5 },
  { name: "vova6", amount: 600, icon: "qt", id: 6 },
  { name: "vova7", amount: 700, icon: "qt", id: 7 },
  { name: "vova8", amount: 800, icon: "qt", id: 8 },
  { name: "vova9", amount: 800, icon: "qt", id: 9 },
  { name: "vova10", amount: 800, icon: "qt", id: 10 },
  { name: "vova11", amount: 800, icon: "qt", id: 11 },
];

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
            <ReportListByCategory items={category} />
          </div>

          <ChartCategory />
        </div>
      </div>
      <div className={style.imgBackKapusta}></div>
    </section>
  );
}

export default Summary;

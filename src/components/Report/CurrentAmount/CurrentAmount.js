import s from "./CurrentAmount.module.css";
import Line from "../../../assets/images/line.svg";

const CurrentAmount = () => {
  return (
    <div className={s.userAmount}>
      <div className={s.expensesWrap}>
        <p className={s.expenseText}>Расходы :</p>
        <span className={s.expensesTotal}>-100 грн.</span>
      </div>
      <img className={s.Line} src={Line} alt="line" width="2" height="32" />
      <div className={s.incomeWrap}>
        <p className={s.incomeText}>Доходы :</p>
        <span className={s.incomeTotal}>+1000000 грн.</span>
      </div>
    </div>
  );
};
export default CurrentAmount;

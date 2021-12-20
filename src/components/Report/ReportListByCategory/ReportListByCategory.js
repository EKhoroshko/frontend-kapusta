import React, { useState, useEffect } from "react";
import ReportItemByCategory from "../ReportItemByCategory";
import { ReactComponent as BtnLeft } from "../../../assets/images/BtnLefl.svg";
import { ReactComponent as BtnRight } from "../../../assets/images/BtnRight.svg";
import { findTotalSumForChart } from "../../../helpers/support/FilterState";
import styles from "./ReportListByCategory.module.css";
import {
  getTransactions,
  getCurrentPeriod,
} from "../../../redux/transaction/selectors";
import { useSelector } from "react-redux";

const ReportListByCategory = () => {
  const [type, setType] = useState("costs");
  const tr = useSelector(getTransactions);
  const date = useSelector(getCurrentPeriod);
  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    setTransaction(findTotalSumForChart(tr, type, date));
  }, [type, tr, date]);
  return (
    <div className={styles.container}>
      <div className={styles.switchWrap}>
        <button
          type="button"
          name="leftBtn"
          onClick={() => setType("costs")}
          className={styles.calendarBtn}
        >
          <BtnLeft />
        </button>
        <p className={styles.cldrMonth}>
          {type === "costs" ? "Рассходы" : "Доход"}
        </p>
        <button
          type="button"
          name="rightBtn"
          className={styles.calendarBtn}
          onClick={() => setType("incomes")}
        >
          <BtnRight />
        </button>
      </div>
      <ul className={styles.list}>
        {transaction.length > 0 &&
          transaction.map((transaction) => (
            <li className={styles.listItem} key={transaction.subCategory}>
              <button type="button">
                <ReportItemByCategory data={transaction} />
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ReportListByCategory;

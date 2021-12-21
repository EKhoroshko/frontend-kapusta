import React, { useState, useEffect } from "react";
import ReportItemByCategory from "../ReportItemByCategory";
import { ReactComponent as BtnLeft } from "../../../assets/images/BtnLefl.svg";
import { ReactComponent as BtnRight } from "../../../assets/images/BtnRight.svg";
import { findTotalSumForChart } from "../../../helpers/support/FilterState";
import { iconsArray } from "../../../helpers/support/IconsCosts";
import {
  getTransactions,
  getCurrentPeriod,
} from "../../../redux/transaction/selectors";
import { useSelector } from "react-redux";
import styles from "./ReportListByCategory.module.css";

const ReportListByCategory = () => {
  const [type, setType] = useState("costs");
  const tr = useSelector(getTransactions);
  const date = useSelector(getCurrentPeriod);
  const [transaction, setTransaction] = useState([]);

  const map = new Map();
  [...transaction, ...iconsArray].forEach((item) => {
    if (map.has(item.subCategory)) {
      Object.assign(map.get(item.subCategory), item);
    } else {
      map.set(item.subCategory, item);
    }
  });

  useEffect(() => {
    setTransaction(findTotalSumForChart(tr, type, date, iconsArray));
  }, [type, tr, date]);

  const changeType = () => {
    if (type === "costs") {
      return setType("incomes");
    }
    return setType("costs");
  };

  return (
    <div className={styles.container}>
      <div className={styles.switchWrap}>
        <button
          type="button"
          name="leftBtn"
          onClick={changeType}
          className={styles.calendarBtn}
        >
          <BtnLeft />
        </button>
        <p className={styles.cldrMonth}>
          {type === "costs" ? "Расход" : "Доход"}
        </p>
        <button
          type="button"
          name="rightBtn"
          className={styles.calendarBtn}
          onClick={changeType}
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

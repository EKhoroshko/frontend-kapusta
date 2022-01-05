import React, { useState, useEffect } from "react";
import ReportItemByCategory from "../ReportItemByCategory";
import { ReactComponent as BtnLeft } from "../../../assets/images/BtnLefl.svg";
import { ReactComponent as BtnRight } from "../../../assets/images/BtnRight.svg";
import {
  findTotalSumForChart,
  filterDescr,
} from "../../../helpers/support/FilterState";
import { iconsArray } from "../../../helpers/support/IconsCosts";
import {
  getTransactions,
  getCurrentPeriod,
} from "../../../redux/transaction/selectors";
import {
  diagramData,
  diagramDataClear,
} from "../../../redux/transaction/slice";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import styles from "./ReportListByCategory.module.css";

const ReportListByCategory = () => {
  const [type, setType] = useState("costs");
  const tr = useSelector(getTransactions);
  const date = useSelector(getCurrentPeriod);
  const [transaction, setTransaction] = useState([]);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  console.log(transaction);

  const map = new Map();
  [...transaction, ...iconsArray].forEach((item) => {
    if (map.has(item.subCategory)) {
      Object.assign(map.get(item.subCategory), item);
    } else {
      map.set(item.subCategory, item);
    }
  });

  const renderDiagramma = (category) => {
    const dia = filterDescr(tr, type, date, category);
    dispatch(diagramData(dia));
  };

  useEffect(() => {
    setTransaction(findTotalSumForChart(tr, type, date, iconsArray));
  }, [type, tr, date]);

  const changeType = () => {
    if (type === "costs") {
      return setType("incomes");
    }
    return setType("costs");
  };
  const clear = () => {
    dispatch(diagramDataClear());
    changeType();
  };
  return (
    <div className={styles.container}>
      <div className={styles.switchWrap}>
        <button
          type="button"
          name="leftBtn"
          onClick={() => clear()}
          className={styles.calendarBtn}
        >
          <BtnLeft />
        </button>
        {type === "costs" ? (
          <p className={styles.cldrMonth}>{t("costs")}</p>
        ) : (
          <p className={styles.cldrMonth}>{t("incomes")}</p>
        )}
        <button
          type="button"
          name="rightBtn"
          className={styles.calendarBtn}
          onClick={() => clear()}
        >
          <BtnRight />
        </button>
      </div>
      <ul className={styles.list}>
        {transaction.length > 0 &&
          transaction.map((transaction) => (
            <li className={styles.listItem} key={transaction.subCategory}>
              <button
                type="button"
                onClick={() => renderDiagramma(transaction.subCategory)}
              >
                <ReportItemByCategory data={transaction} />
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ReportListByCategory;

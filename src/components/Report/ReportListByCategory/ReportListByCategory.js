import React from "react";
import ReportItemByCategory from "../ReportItemByCategory";
import { ReactComponent as BtnLeft } from "../../../assets/images/BtnLefl.svg";
import { ReactComponent as BtnRight } from "../../../assets/images/BtnRight.svg";

import styles from "./ReportListByCategory.module.css";

const ReportListByCategory = ({ items }) => {
  return (
    <div className={styles.container}>
      <div className={styles.switchWrap}>
        <button type="button" name="leftBtn" className={styles.calendarBtn}>
          <BtnLeft />
        </button>
        <p className={styles.cldrMonth}>Расх/прих</p>
        <button type="button" name="rightBtn" className={styles.calendarBtn}>
          <BtnRight />
        </button>
      </div>
      <ul className={styles.list}>
        {items.map(({ name, amount, icon, id }) => (
          <li className={styles.listItem} key={id}>
            <button type="button">
              <ReportItemByCategory name={name} amount={amount} icon={icon} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReportListByCategory;

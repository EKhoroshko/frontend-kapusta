import React from "react";
import styles from "./ReportCurrentPeriod.module.css";
import { ReactComponent as BtnLeft } from "../../assets/images/BtnLefl.svg";
import { ReactComponent as BtnRight } from "../../assets/images/BtnRight.svg";

const ReportCurrentPeriod = () => {
  return (
    <div className={styles.calendarWrap}>
      <p className={styles.calendarText}>Текущий период :</p>
      <div className={styles.switchWrap}>
        <button type="button" name="leftBtn" className={styles.calendarBtn}>
          <BtnLeft />
        </button>
        <p className={styles.cldrMonth}>Период</p>
        <button type="button" name="rightBtn" className={styles.calendarBtn}>
          <BtnRight />
        </button>
      </div>
    </div>
  );
};

export default ReportCurrentPeriod;

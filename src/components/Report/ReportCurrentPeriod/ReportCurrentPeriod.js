import React from "react";
import moment from "moment";
import "moment/locale/ru";
import styles from "./ReportCurrentPeriod.module.css";
import { ReactComponent as BtnLeft } from "../../../assets/images/BtnLefl.svg";
import { ReactComponent as BtnRight } from "../../../assets/images/BtnRight.svg";

const ReportCurrentPeriod = ({ date, monthChange }) => {
  return (
    <div className={styles.calendarWrap}>
      <p className={styles.calendarText}>Текущий период :</p>
      <div className={styles.switchWrap}>
        <button
          type="button"
          onClick={monthChange}
          name="leftBtn"
          className={styles.calendarBtn}
        >
          <BtnLeft />
        </button>

        <p className={styles.cldrMonth}>
          {moment(date).locale("ru").format("MMMM YYYY")}
        </p>
        <button
          type="button"
          onClick={monthChange}
          name="rightBtn"
          className={styles.calendarBtn}
        >
          <BtnRight />
        </button>
      </div>
    </div>
  );
};

export default ReportCurrentPeriod;

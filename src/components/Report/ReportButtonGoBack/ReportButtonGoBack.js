import React from "react";
import { ReactComponent as BtnGoBack } from "../../../assets/images/BtnGoBack.svg";

import styles from "./ReportButtonGoBack.module.css";

const ReportButtonGoBack = ({ onClick }) => {
  return (
    <button type="button" className={styles.GoBackButton} onClick={onClick}>
      <BtnGoBack className={styles.goBackIcon} />
      <span className={styles.title}>Вернуться на главную</span>
    </button>
  );
};

export default ReportButtonGoBack;

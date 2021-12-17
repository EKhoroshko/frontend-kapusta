import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as BtnGoBack } from "../../../assets/images/BtnGoBack.svg";

import styles from "./ReportButtonGoBack.module.css";

const ReportButtonGoBack = () => {
  return (
    <button type="button" className={styles.GoBackButton}>
      <Link className={styles.link}>
        <BtnGoBack className={styles.goBackIcon} />
        <span className={styles.title}>Вернуться на главную</span>
      </Link>
    </button>
  );
};

export default ReportButtonGoBack;

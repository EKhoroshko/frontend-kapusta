import React from "react";
import { Link } from "react-router-dom";
import svg from "./svg/goBack.svg";
import styles from "./ReportButtonGoBack.module.css";

const ReportButtonGoBack = () => {
  return (
    <button type="button" className={styles.GoBackButton}>
      <Link className={styles.link}>
        <svg className={styles.goBackIcon}>
          <use href={svg + "#goBack"} />
        </svg>
        <span className={styles.title}>Вернуться на главную</span>
      </Link>
    </button>
  );
};

export default ReportButtonGoBack;

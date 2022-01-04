import React from "react";
import { ReactComponent as BtnGoBack } from "../../../assets/images/BtnGoBack.svg";
import { useTranslation } from "react-i18next";
import styles from "./ReportButtonGoBack.module.css";

const ReportButtonGoBack = ({ onClick }) => {
  const { t } = useTranslation();

  return (
    <button type="button" className={styles.GoBackButton} onClick={onClick}>
      <BtnGoBack className={styles.goBackIcon} />
      <span className={styles.title}>{t("arrowGoBack")}</span>
    </button>
  );
};

export default ReportButtonGoBack;

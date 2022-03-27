import React from "react";
import PropTypes from "prop-types";
import { getLang } from "../../../redux/languag/selectors";
import { useSelector } from "react-redux";
import styles from "./ReportItemByCategory.module.css";
import svg from "../../../assets/images/svgSummorry/sprite.svg";

const ReportItemByCategory = ({ data }) => {
  const { subCategory, sum, icon, label } = data;
  const lang = useSelector(getLang);
  return (
    <div className={styles.item}>
      <p className={styles.sum}>{sum}</p>
      <div className={styles.flex}>
        <svg className={styles.svg}>
          <use href={svg + `#${icon}`}></use>
        </svg>
        <div className={styles.circle}></div>
      </div>
      {lang === "ru" ? (
        <p className={styles.descr}>{subCategory}</p>
      ) : (
        <p className={styles.descr}>{label}</p>
      )}
    </div>
  );
};

ReportItemByCategory.prototype = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.isRequired,
};

export default ReportItemByCategory;

import React from "react";
import PropTypes from "prop-types";
import styles from "./ReportItemByCategory.module.css";

const ReportItemByCategory = ({ data }) => {
  const { subCategory, sum, icon } = data;

  return (
    <div className={styles.item}>
      <p className={styles.sum}>{sum}</p>
      <button className={styles.flex}>
        <svg
          width="56"
          className={styles.svg}
          xmlns="http://www.w3.org/2000/svg"
        >
          {icon.pathOne && <path d={icon.pathOne} />}
          {icon.pathTwo && <path d={icon.pathTwo} />}
          {icon.pathThree && <path d={icon.pathThree} />}
        </svg>
      </button>
      <p className={styles.descr}>{subCategory}</p>
    </div>
  );
};

ReportItemByCategory.prototype = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.isRequired,
};

export default ReportItemByCategory;

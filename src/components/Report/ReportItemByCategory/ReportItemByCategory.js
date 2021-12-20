import React from "react";
import PropTypes from "prop-types";
import styles from "./ReportItemByCategory.module.css";

const ReportItemByCategory = ({ data }) => {
  const { subCategory, sum } = data;
  return (
    <div className={styles.item}>
      <p>{sum}</p>
      <div>{/* <img src={icon} alt={category}></img> */}</div>
      <p>{subCategory}</p>
    </div>
  );
};

ReportItemByCategory.prototype = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.isRequired,
};

export default ReportItemByCategory;

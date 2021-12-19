import React from "react";
import PropTypes from "prop-types";
import styles from "./ReportItemByCategory.module.css";

const ReportItemByCategory = ({ name, amount, icon }) => {
  return (
    <div className={styles.item}>
      <p>{amount}</p>
      <div>
        <img src={icon} alt={name}></img>
      </div>
      <p>{name}</p>
    </div>
  );
};

ReportItemByCategory.prototype = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.isRequired,
};

export default ReportItemByCategory;

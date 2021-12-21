import React from "react";
import PropTypes from "prop-types";
import styles from "./ReportItemByCategory.module.css";

const ReportItemByCategory = ({ data }) => {
  const { subCategory, sum, icon } = data;

  return (
    <div className={styles.item}>
      <p>{sum}</p>
      <div>
        <button type="button" className={styles.btnIcon}>
          <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg">
            <path d={icon.pathOne} />{" "}
            {icon.pathTwo && <path d={icon.pathTwo} />}
            {icon.pathThree && <path d={icon.pathThree} />}
          </svg>
        </button>
      </div>
      <p>{subCategory}</p>
    </div>
  );
};

ReportItemByCategory.prototype = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.isRequired,
};

export default ReportItemByCategory;

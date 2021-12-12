import React from "react";
import PropTypes from "prop-types";

const ReportItemByCategory = ({ name, amount, icon }) => {
  return (
    <div>
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

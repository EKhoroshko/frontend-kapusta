import React from "react";
import PropTypes from "prop-types";

const ReportItemByCategory = ({}) => {
  return (
    <div>
          <p>{сума}</p>
          <div>
              <img src={} alt={назва}></img>
          </div>
          <p>{ назва}</p>
    </div>
  );
};

ReportItemByCategory.prototype = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.isRequired,
}

export default ReportItemByCategory;

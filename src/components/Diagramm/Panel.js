import React from "react";
import PropTypes from "prop-types";
import style from "./Diagram.module.css";

const Panel = ({ children }) => {
  return <div className={style.panel}>{children}</div>;
};

Panel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.node,
  ]).isRequired,
};

export default Panel;

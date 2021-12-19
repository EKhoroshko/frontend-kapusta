import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as ToReportsIcon } from "../../assets/images/toReports.svg";
import style from "../ToReport/toReports.module.css";

function ToReports() {
  return (
    <NavLink to="/reports" className={style.container}>
      <p className={style.text}>Перейти к отчётам</p>
      <ToReportsIcon className={style.icon} />
    </NavLink>
  );
}

export default ToReports;

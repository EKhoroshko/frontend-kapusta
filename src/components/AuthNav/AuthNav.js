import React from "react";
import { NavLink } from "react-router-dom";
// import Button from "../Button/Button";

import s from "./AuthNav.module.css";

export default function AuthNav({ props }) {
  return (
    <div className={s.formButton}>
      <NavLink to={"/"} exact className={s.link} activeClassName={s.activeLink}>
        Войти
      </NavLink>

      <NavLink
        to={"/register"}
        exact
        className={s.link}
        activeClassName={s.activeLink}
      >
        Регистрация
      </NavLink>
    </div>
  );
}

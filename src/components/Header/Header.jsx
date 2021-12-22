import React from "react";
import css from "./Header.module.css";
import UserMenu from "./userMenu";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../redux/auth/selectors";
import { Redirect } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Header() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const location = useLocation()
  return (
    <header className={css.header}>
      <div className={css.container}>
        <div className={css.header}>
          <img src={logo} alt="" width={90} height={30} />
          <NavLink to="/team" className={css.container}>
            <p className={css.text}>Показать команду</p>
          </NavLink>
        </div>
        {location.pathname === '/team' &&
          <NavLink to="/home" className={css.container}>
            <p className={css.text}>На главную</p>
          </NavLink>}
        {isLoggedIn && <UserMenu />}
        {!isLoggedIn && <Redirect to="/" />}
      </div>
    </header>
  );
}

export default Header;

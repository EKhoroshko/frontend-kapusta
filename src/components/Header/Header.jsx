import React from "react";
import css from "./Header.module.css";
import UserMenu from "./userMenu";
import logo from "../../assets/images/logo.svg";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../redux/auth/selectors";
import { Redirect, Link } from "react-router-dom";
function Header() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <header className={css.header}>
      <div className={css.container}>
        <Link to={isLoggedIn ? "/home" : "/"}>
          <img src={logo} alt="" width={90} height={30} />
        </Link>
        {isLoggedIn && <UserMenu />}
        {!isLoggedIn && <Redirect to="/" />}
      </div>
    </header>
  );
}

export default Header;

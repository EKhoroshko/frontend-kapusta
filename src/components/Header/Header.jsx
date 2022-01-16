import React, { useEffect } from "react";
import UserMenu from "./userMenu";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { useSelector, useDispatch } from "react-redux";
import { getIsLoggedIn } from "../../redux/auth/selectors";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { checkLang } from '../../redux/languag/slice';
import en from '../../assets/lang/en.jpg';
import ru from '../../assets/lang/ru.jpg'
import css from "./Header.module.css";

function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const location = useLocation()
  const { t } = useTranslation();

  const { i18n } = useTranslation();

  useEffect(() => {
    dispatch(checkLang(i18n.language))
  }, [dispatch, i18n.language])

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <header className={css.header}>
      <div className={css.container}>
        <div className={css.box}>
          <Link to={isLoggedIn ? "/home" : "/"}>
            <img src={logo} alt="" width={90} height={30} />
          </Link>
          <div className={css.btnLang}>
            <button
              className={css.btn}
              onClick={() => changeLanguage("en")}>
              <img src={en} alt="Mikhail" className={css.picture} />
            </button>
            <button
              className={css.btn}
              onClick={() => changeLanguage("ru")}>
              <img src={ru} alt="Mikhail" className={css.picture} />
            </button>
          </div>
        </div>
        {location.pathname === '/team' &&
          <NavLink to="/home" className={css.container}>
            <p className={css.text}>{t("home")}</p>
          </NavLink>}
        {isLoggedIn && <UserMenu />}
      </div>
    </header>
  );
}

export default Header;

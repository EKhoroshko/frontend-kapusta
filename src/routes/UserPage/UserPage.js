import React from "react";
import { useHistory, NavLink } from "react-router-dom";
import Button from "../../components/Button/Button";
import { useTranslation } from "react-i18next";
import css from "./UserPage.module.css";

const UserPage = () => {
  const history = useHistory();
  const { t } = useTranslation();

  const goHome = () => {
    history.push("/home");
  };

  return (
    <div>
      <h3>Hi!! I page User</h3>
      <Button text="Go HOME" onClick={goHome} />
      <NavLink to="/team" className={css.container}>
        <p className={css.text}>{t("team")}</p>
      </NavLink>
    </div>
  );
};

export default UserPage;

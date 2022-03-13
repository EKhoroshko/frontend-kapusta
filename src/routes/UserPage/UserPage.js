import React from "react";
import { useHistory, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { getUserName, getAvatar } from "../../redux/auth/selectors";
import { ReactComponent as BtnGoBack } from "../../assets/images/BtnGoBack.svg";
import AvatarUpload from "../../components/AvatarUpload/AvatarUpload";
import css from "./UserPage.module.css";

const UserPage = () => {
  const history = useHistory();
  const { t } = useTranslation();
  const userName = useSelector(getUserName);
  const avatarURL = useSelector(getAvatar);

  const goHome = () => {
    history.push("/home");
  };

  return (
    <section className={css.section}>
      <div className={css.container}>
        <div className={css.wrapper}>
          <button type="button" className={css.GoBackButton} onClick={goHome}>
            <BtnGoBack className={css.goBackIcon} />
            <span className={css.title}>{t("arrowGoBack")}</span>
          </button>
          <div className={css.content}>
            <div className={css.contentAva}>
              <p className={css.name}>{userName}</p>
              <img
                className={css.avatar}
                src={avatarURL}
                alt="аватар пользователя"
              />
              <AvatarUpload />
            </div>
            <NavLink to="/team" className={css.box}>
              <p>{t("team")}</p>
            </NavLink>
          </div>
        </div>
        <div className={css.imgBackKapusta}></div>
      </div>
    </section>
  );
};

export default UserPage;

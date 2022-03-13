import logout from "../../assets/images/logout.svg";
import MediaQuery from "react-responsive";
import { getUserName, getAvatar } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import { useSelector, useDispatch } from "react-redux";
import LogoutModal from "./LogoutModal";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import css from "./Header.module.css";



export default function UserMenu() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const userName = useSelector(getUserName);
  const avatarURL = useSelector(getAvatar);
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const isLogOut = () => {
    dispatch(logOut());
  };
  return (
    <div className={css.user__menu}>
      <NavLink to="/user" className={css.link}>
        <p className={css.user__avatar}>
          <img src={avatarURL} alt="аватар пользователя" />
        </p>
        <MediaQuery minWidth={768}>
          <p className={css.user__name}>{userName}</p>
        </MediaQuery>
      </NavLink>
      <button type="button" className={css.logout} onClick={toggleModal}>
        <MediaQuery maxWidth={767}>
          <img src={logout} alt="" width={16} height={16} />
        </MediaQuery>
        <MediaQuery minWidth={768}>
          <p className={css.logout__text}>{t("logOut")}</p>
        </MediaQuery>
        {isModalOpen && (
          <LogoutModal
            text={t("modal.text1")}
            onCancel={toggleModal}
            onSubmit={isLogOut}
          />
        )}
      </button>
    </div>
  );
}

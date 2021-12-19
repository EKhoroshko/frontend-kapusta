import logout from "../../assets/images/logout.svg";
import css from "./Header.module.css";
import MediaQuery from "react-responsive";
import { getUserName, getAvatar } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import { useSelector, useDispatch } from "react-redux";

export default function UserMenu() {
  const userName = useSelector(getUserName);
  const avatarURL = useSelector(getAvatar);
  console.log(userName);
  const dispatch = useDispatch();
  return (
    <div className={css.user__menu}>
      <p className={css.first__letter}>
        <span className={css.symbol}>
        <img src={avatarURL} alt=""/>
          </span>
      </p>
      <MediaQuery minWidth={768}>
        <p className={css.user__name}>{userName}</p>
      </MediaQuery>
      <button
        type="button"
        className={css.logout}
        onClick={() => dispatch(logOut())}
      >
        <MediaQuery maxWidth={767}>
          <img src={logout} alt="" width={16} height={16} />
        </MediaQuery>
        <MediaQuery minWidth={768}>
          <p className={css.logout__text}>Выйти</p>
        </MediaQuery>
      </button>
    </div>
  );
}

import { useLocation } from "react-router-dom";
import s from "./FormContent.module.css";
import { userGoogle } from "../../redux/auth/operations";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const FormContent = ({ children }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const token = location.search.slice(7);

  useEffect(() => {
    dispatch(userGoogle(token));
  }, [dispatch, token]);

  return (
    <div className={s.container}>
      <div className={s.kapImg}></div>
      <div className={s.kapImg2}></div>
      <div className={s.loginPage}>
        <div className={s.titleBox}>
          <h1 className={s.title}>
            Kapu<span></span>ta
          </h1>
          <p className={s.titleDescription}>Smart finance</p>
        </div>
        <div className={s.formBox}>
          <p className={s.descriptionA}>
            Вы можете авторизоваться с помощью Google Account:
          </p>
          <a className={s.button} href="http://localhost:3000/api/auth/google">
            <span></span>
            Google
          </a>
          {/*<button className={s.button} type="button">
            <span></span>
            Google
  </button>*/}
          <p className={s.descriptionB}>
            Или зайти с помощью e-mail и пароля, предварительно
            зарегистрировавшись:
          </p>
          <div className={s.wrapper}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default FormContent;

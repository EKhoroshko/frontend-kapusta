import { useLocation } from "react-router-dom";
import { userGoogle } from "../../redux/auth/operations";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import s from "./FormContent.module.css";

const FormContent = ({ children }) => {
  const { t } = useTranslation();
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
          <p className={s.descriptionA}>{t("logdescr1")}</p>
          <a
            className={s.button}
            href="https://back-kapusta.onrender.com/api/auth/google"
          >
            <span></span>
            Google
          </a>
          <p className={s.descriptionB}>{t("logdescr2")}</p>
          <div className={s.wrapper}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default FormContent;

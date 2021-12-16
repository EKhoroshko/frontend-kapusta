import React from "react";
import s from "./Register.module.css";
import RegistForm from "../../components/RegistForm/RegistForm";
import AuthNav from "../../components/AuthNav/AuthNav";

function Register() {
  return (
    <section className={s.section}>
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
            <button className={s.button} type="button">
              <span></span>
              Google
            </button>
            <p className={s.descriptionB}>
              Или зайти с помощью e-mail и пароля, предварительно
              зарегистрировавшись:
            </p>
            <RegistForm />
            <AuthNav />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;

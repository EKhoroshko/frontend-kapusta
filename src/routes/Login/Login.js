import React from "react";
import s from "./Login.module.css";
import LoginForm from "../../components/LoginForm/LoginForm";
import back2 from "../../assets/images/back2.png";

function Login() {
  return (
    <div className={s.wrapper}>
      <img className={s.bgImg} title="back" src={back2} alt="back" />
      <span className={s.kapustaImg}></span>
      <span className={s.kapustaImg2}></span>
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
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default Login;

import React, { useEffect } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../redux/auth/selectors";
import s from "./Login.module.css";
import { useHistory } from "react-router-dom";

function Login() {
  const login = useSelector(getIsLoggedIn);
  const history = useHistory();

  /*const log = async ({ email, password }) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    };

    try {
      const resp = await fetch(
        "https://back-kapusta.herokuapp.com/api/auth/users/login",
        options
      ).then((response) => {
        if (response.ok) {
          return response.json();
        }
      });
      console.log(resp.error);
    } catch (error) {
      console.log(error);
    }
  };
  log({
    email: "xapoxa14@gmail.com",
    password: "12345678",
  });*/

  useEffect(() => {
    if (login) {
      setTimeout(() => {
        history.push("/home");
      }, 2500);
    }
  }, [history, login]);

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
            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;

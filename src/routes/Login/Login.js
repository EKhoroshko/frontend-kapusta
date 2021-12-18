import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../redux/auth/selectors";
import { useHistory } from "react-router-dom";

import AuthNav from "../../components/AuthNav/AuthNav";
import FormContent from "../../components/FormContent/FormContent";
import s from "./Login.module.css";

function Login() {
  const login = useSelector(getIsLoggedIn);
  const history = useHistory();

  useEffect(() => {
    if (login) {
      setTimeout(() => {
        history.push("/home");
      }, 2500);
    }
  }, [history, login]);

  return (
    <section className={s.section}>
      <div className={s.wrapper}>
        <FormContent>
          <AuthNav />
        </FormContent>
      </div>
    </section>
  );
}

export default Login;

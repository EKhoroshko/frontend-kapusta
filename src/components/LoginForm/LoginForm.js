import s from "./LoginForm.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register, logIn } from "../../redux/auth/operations";

function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginActive, setLoginActive] = useState(true);
  const [registerActive, setRisterActive] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const toggleLoginBtn = () => {
    setLoginActive(true);
    setRisterActive(false);
  };

  const toggleRegisterBtn = () => {
    setLoginActive(false);
    setRisterActive(true);
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (loginActive) {
      dispatch(logIn({ email, password }));
      setEmail("");
      setPassword("");
    }

    if (registerActive) {
      dispatch(register({ email, password }));
      setEmail("");
      setPassword("");
    }
  }

  return (
    <div className={s.wrapper}>
      <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={s.label}>
          <p className={s.description}>Электронная почта:</p>
          <input
            className={s.input}
            type="email"
            name="email"
            value={email}
            required
            onChange={handleChange}
            placeholder="@mail"
          />
        </label>
        <label className={s.label}>
          <p className={s.description}>Пароль:</p>
          <input
            className={s.input}
            type="password"
            name="password"
            value={password}
            required
            onChange={handleChange}
            placeholder="**********"
          />
        </label>

        <div className={s.formButton}>
          <button
            className={s.button}
            type="submit"
            onClick={toggleLoginBtn}
            active={loginActive.toString()}
            name="login"
          >
            Войти
          </button>
          <button
            className={s.button}
            type="submit"
            onClick={toggleRegisterBtn}
            active={registerActive.toString()}
            name="register"
          >
            Регистрация
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;

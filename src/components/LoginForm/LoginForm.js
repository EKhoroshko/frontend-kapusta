import s from "./LoginForm.module.css";
import Button from "../Button/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registration, loginUser } from "../../redux/auth/operations";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setMail] = useState("");
  const [password, setPass] = useState("");
  const [type, setType] = useState("");

  const waitCheck = (e) => {
    const { name, value } = e.currentTarget;
    if (name === "email") {
      setMail(value);
    } else {
      setPass(value);
    }
  };

  const handlSubmit = (e) => {
    e.preventDefault();
    const user = {
      value: type,
      email,
      password,
    };
    submitUser(user);
    setMail("");
    setPass("");
    setType("");
  };

  const checkType = (e) => {
    setType(e.target.outerText);
  };

  const submitUser = async ({ value, email, password }) => {
    const options = {
      email,
      password,
    };
    switch (value) {
      case "РЕГИСТРАЦИЯ":
        return await dispatch(registration(options));
      case "ВОЙТИ":
        return await dispatch(loginUser(options));
      default:
        return "I cannot login user";
    }
  };

  return (
    <div className={s.wrapper}>
      <form className={s.form} onSubmit={handlSubmit}>
        <label className={s.label}>
          <p className={s.description}>Электронная почта:</p>
          <input
            className={s.input}
            type="email"
            name="email"
            value={email}
            required
            value={email}
            onChange={waitCheck}
          />
        </label>
        <label className={s.label}>
          <p className={s.description}>Пароль:</p>
          <input
            className={s.input}
            type="password"
            name="password"
            required
            value={password}
            onChange={waitCheck}
            autoComplete="off"
          />
        </label>
        <div className={s.formButton}>
          <Button text="Войти" lassName={s.button} onClick={checkType} />
          <Button text="Регистрация" lassName={s.button} onClick={checkType} />
        </div>
      </form>
    </div>
  );
}

export default LoginForm;

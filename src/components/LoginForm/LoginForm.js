import s from "./LoginForm.module.css";
import Button from "../Button/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { submitUser } from "../../redux/auth/operations";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setMail] = useState("");
  const [password, setPass] = useState("");
  const [type, setType] = useState("");

  console.log(type);

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
      type: type,
      email,
      password,
    };
    console.log(user);
    //dispatch(submitUser(user));
    setMail("");
    setPass("");
    setType("");
  };

  const checkType = (e) => {
    setType(e.target.outerText);
  };

  return (
    <div className={s.wrapper}>
      <form className={s.form} onSubmit={handlSubmit}>
        <label className={s.label}>
          <p className={s.description}>Электронная почта:</p>
          <input
            className={s.input}
            type="text"
            name="email"
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
};

export default LoginForm;

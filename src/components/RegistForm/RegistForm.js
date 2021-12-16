import { useState } from "react";
import { useDispatch } from "react-redux";
import { registration } from "../../redux/auth/operations";

import s from "./RegistForm.module.css";
// import Button from "../Button/Button";

const RegistForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
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
      name,
      email,
      password,
      value: type,
    };
    submitUser(user);
    setName("");
    setMail("");
    setPass("");
    setType("");
  };

  // const checkType = (e) => {
  //   setType(e.target.outerText);
  // };

  const submitUser = async ({ value, name, email, password }) => {
    const options = {
      name,
      email,
      password,
    };
    switch (value) {
      case "РЕГИСТРАЦИЯ":
        return await dispatch(registration(options));
      default:
        return "I cannot login user";
    }
  };
  return (
    <div className={s.wrapper}>
      <form className={s.form} onSubmit={handlSubmit} autoComplete="off">
        <label className={s.label}>
          <p className={s.description}>Имя:</p>
          <input
            className={s.input}
            type="text"
            name="name"
            required
            onChange={waitCheck}
          />
        </label>
        <label className={s.label}>
          <p className={s.description}>Электронная почта:</p>
          <input
            className={s.input}
            type="email"
            name="email"
            value={email}
            required
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
          />
        </label>

        <div className={s.formButton}>
          {/* <Button text="Регистрация" className={s.button} onClick={checkType} /> */}
        </div>
      </form>
    </div>
  );
};

export default RegistForm;

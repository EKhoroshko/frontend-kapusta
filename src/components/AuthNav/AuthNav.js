import React, { useState } from "react";
import { registration, loginUser } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

import s from "./AuthNav.module.css";

export default function AuthNav({ props }) {
  const dispatch = useDispatch();
  const [email, setMail] = useState("");
  const [password, setPass] = useState("");
  const [name, setName] = useState("");
  const [isActiv, setIsActiv] = useState(true);

  const waitCheck = (e) => {
    const { name, value } = e.currentTarget;
    if (name === "email") {
      setMail(value);
    }
    if (name === "name") {
      setName(value);
    }
  };

  const waitPass = (e) => {
    setPass(e.target.value);
  };

  const handleChangeForm = () => {
    setIsActiv(!isActiv);
  };

  const handlSubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
      name,
    };
    submitUser(user);
    setMail("");
    setPass("");
    setName("");
  };

  const submitUser = async ({ name, email, password }) => {
    const options = {
      name,
      email,
      password,
    };

    switch (isActiv) {
      case true:
        return await dispatch(registration(options));
      case false:
        return await dispatch(loginUser({ email, password }));
      default:
        return "I cannot login user";
    }
  };

  return (
    <div className={s.wrapper}>
      <form className={s.form} onSubmit={handlSubmit} autoComplete="off">
        {isActiv && (
          <label className={s.label}>
            <p className={s.description}>
              <span></span> Имя:
            </p>
            <input
              className={s.input}
              type="text"
              name="name"
              value={name}
              required
              onChange={waitCheck}
            />
          </label>
        )}
        <label className={s.label}>
          <p className={s.description}>
            <span></span> Электронная почта:
          </p>
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
          <p className={s.description}>
            <span></span> Пароль:
          </p>
          <input
            className={s.input}
            type="password"
            name="password"
            required
            value={password}
            onChange={waitPass}
          />
        </label>
        <div className={s.formButton}>
          <button className={s.button} type="submit">
            {isActiv ? "Регистрация" : "Войти"}
          </button>
          <button className={s.button} onClick={handleChangeForm} type="submit">
            {isActiv ? "Войти" : "Регистрация"}{" "}
          </button>
        </div>
      </form>
    </div>
  );
}

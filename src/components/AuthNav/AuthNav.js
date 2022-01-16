import React, { useState } from "react";
import { registration, loginUser } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import s from "./AuthNav.module.css";

export default function AuthNav() {
  const { t } = useTranslation();
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
      name,
      email,
      password,
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
            <p className={s.description}>{t("name")}:</p>
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
          <p className={s.description}>{t("mail")}:</p>
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
          <p className={s.description}>{t("pass")}:</p>
          <input
            className={s.input}
            placeholder={t("plPass")}
            type="password"
            name="password"
            required
            value={password}
            onChange={waitPass}
          />
        </label>
        <div className={s.formButton}>
          <button className={s.button + " " + s.buttonActive} type="submit">
            {isActiv ? t("reg") : t("log")}
          </button>
          <button className={s.button} onClick={handleChangeForm} type="submit">
            {isActiv ? t("log") : t("reg")}
          </button>
        </div>
      </form>
    </div>
  );
}

import { useState } from "react";
import s from "./RegistForm.module.css";

const RegistForm = ({ submitUser }) => {
  const [name, setName] = useState("");
  const [email, setMail] = useState("");
  const [password, setPass] = useState("");

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
    };
    console.log(user);
    submitUser(user);
    setName("");
    setMail("");
    setPass("");
  };

  return (
    <div className={s.wrapper}>
      {/*<form className={s.form} onSubmit={handlSubmit} autoComplete="off">
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
        <button type="submit"> rere</button>
  </form>*/}
    </div>
  );
};

export default RegistForm;

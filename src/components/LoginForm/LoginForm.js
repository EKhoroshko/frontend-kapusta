import s from "./LoginForm.module.css";
import { useState } from "react";

const LoginForm = ({ submitUser }) => {
  const [email, setMail] = useState("");
  const [password, setPass] = useState("");
  const [isActiv, setIsActiv] = useState(true);

  const handleChangeForm = () => {
    setIsActiv(!isActiv);
  };

  const waitCheck = (e) => {
    const { name, value } = e.currentTarget;
    if (name === "email") {
      setMail(value);
    } else {
      setPass(value);
    }
  };

  return <div className={s.wrapper}></div>;
};

export default LoginForm;

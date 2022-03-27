import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from "react-toastify";
import { UpdatePass } from '../../redux/auth/operations';
import { useTranslation } from "react-i18next";
import "react-toastify/dist/ReactToastify.css";
import css from './AddPass.module.css'

function AddPass() {
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [newPass, setNewPass] = useState('');
  const { t } = useTranslation();

  const waitPass = (e) => {
    setPassword(e.target.value)
  }

  const waitCheck = (e) => {
    setNewPass(e.target.value)
  }

  const handlSubmit = (e) => {
    e.preventDefault()
    if (password.toLowerCase() === newPass.toLowerCase() && password.length >= 8) {
      dispatch(UpdatePass(password));
      clearForm();
    } else {
      return toast.warning('russian ship');
    }
  }

  const clearForm = () => {
    setPassword('')
    setNewPass('')
  }

  return (
    <div className={css.boxPass}>
      <form className={css.form} onSubmit={handlSubmit} autoComplete="off">
        <h3 className={css.title}>{t("Chpass")}</h3>
        <label className={css.label}>
          <p className={css.description}>{t("newPass")}</p>
          <input
            className={css.input}
            placeholder={t("plPass")}
            type="password"
            name="password"
            required
            value={password}
            onChange={waitPass}
          />
        </label>
        <label className={css.label}>
          <p className={css.description}>{t("repetPass")}</p>
          <input
            className={css.input}
            type="password"
            name="password"
            value={newPass}
            required
            onChange={waitCheck}
          />
        </label>
        <button className={css.button} type="submit">
          {t("confirm")}
        </button>
      </form>
    </div>
  )
}

export default AddPass

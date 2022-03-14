import React, { useState } from 'react'
import css from './AddPass.module.css'

function AddPass() {
  const [password, setPassword] = useState('');
  const [newPass, setNewPass] = useState('');

  console.log('password', password)
  console.log(newPass);

  const waitPass = (e) => {
    setPassword(e.target.value)
  }

  const waitCheck = (e) => {
    setNewPass(e.target.value)
  }

  const handlSubmit = (e) => {
    e.preventDefault()
    if (password === newPass && password.length >= 8) {
      console.log('eqial');
    } else {
      console.log('russian ship');
    }
  }

  return (
    <div className={css.boxPass}>
      <form className={css.form} onSubmit={handlSubmit} autoComplete="off">
        <h3 className={css.title}>Изменить пароль</h3>
        <label className={css.label}>
          <p className={css.description}>Введите новый пароль</p>
          <input
            className={css.input}
            placeholder="Не менее 8 символов"
            type="password"
            name="password"
            required
            value={password}
            onChange={waitPass}
          />
        </label>
        <label className={css.label}>
          <p className={css.description}>Повторите пароль</p>
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
          Отправить
        </button>
      </form>
    </div>
  )
}

export default AddPass

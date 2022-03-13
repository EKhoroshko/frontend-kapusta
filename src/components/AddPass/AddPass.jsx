import React, { useState } from 'react'
import css from './AddPass.module.css'

function AddPass() {
  const [password, setPassword] = useState('');
  const [newPass, setNewPass] = useState('');

  const waitPass = () => {

  }

  const waitCheck = () => {

  }

  const handlSubmit = (e) => {
    e.preventDefault()

  }

  return (
    <div>
      <form className={css.form} onSubmit={handlSubmit} autoComplete="off">
        <h3 className={css.title}>Изменить пароль</h3>
        <label className={css.label}>
          <p className={css.description}>Изменить, добавить пароль</p>
          <input
            className={css.input}
            placeholder="Ведите новый пароль, не менее 8 знаков"
            type="password"
            name="password"
            required
            value={password}
            onChange={waitPass}
          />
        </label>
        <label className={css.label}>
          <p className={css.description}>dfsdg:</p>
          <input
            className={css.input}
            type="email"
            name="email"
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

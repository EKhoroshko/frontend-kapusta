import s from "./LoginForm.module.css";

const LoginForm = () => {
  return (
    <div className={s.wrapper}>
      <form className={s.form} onSubmit>
        <label className={s.label}>
          <p className={s.description}>Электронная почта:</p>
          <input
            className={s.input}
            type="text"
            name="email"
            required
            value
            onChange
          />
        </label>
        <label className={s.label}>
          <p className={s.description}>Пароль:</p>
          <input
            className={s.input}
            type="password"
            name="password"
            required
            value
            onChange
            autoComplete="off"
          />
        </label>

        <div className={s.formButton}>
          <button className={s.button} type="submit">
            Войти
          </button>
          <button className={s.button} type="submit">
            Регистрация
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

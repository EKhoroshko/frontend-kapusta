import s from "./FormContent.module.css";
const FormContent = ({ children }) => {
  return (
    <div className={s.container}>
      <div className={s.kapImg}></div>
      <div className={s.kapImg2}></div>
      <div className={s.loginPage}>
        <div className={s.titleBox}>
          <h1 className={s.title}>
            Kapu<span></span>ta
          </h1>
          <p className={s.titleDescription}>Smart finance</p>
        </div>
        <div className={s.formBox}>
          <p className={s.descriptionA}>
            Вы можете авторизоваться с помощью Google Account:
          </p>
          <button className={s.button} type="button">
            <span></span>
            Google
          </button>
          <p className={s.descriptionB}>
            Или зайти с помощью e-mail и пароля, предварительно
            зарегистрировавшись:
          </p>
          <div className={s.wrapper}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default FormContent;

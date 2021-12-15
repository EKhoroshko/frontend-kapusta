import React from "react";
import css from "./Balance.module.css";

const Balance = () => {
  return (
    <div className={css.balance}>
      <p className={css.text}>Баланс:</p>

      <form className={css.wraper} onSubmit={() => {}}>
        <input
          className={css.add}
          type="text"
          placeholder="0.00 UAH"
          // onChange={checkBalance}
          // value={balanse}
        />
        <button className={css.btnAdd} type="submit">
          Подтвердить
        </button>
      </form>
    </div>
  );
};

export default Balance;

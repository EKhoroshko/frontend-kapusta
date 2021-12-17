import React, { useState } from "react";
import css from "./Balance.module.css";
import { getBalance } from "../../redux/auth/selectors";
import { useSelector, useDispatch } from "react-redux";
import { changeBalance } from "../../redux/auth/operations";

const Balance = () => {
  const oldBalance = useSelector(getBalance);
  const [balance, setBalance] = useState(oldBalance);
  const dispatch = useDispatch();

  const checkBalance = (e) => {
    setBalance(e.currentTarget.value);
  };

  const updateBalance = (e) => {
    e.preventDefault();
    dispatch(changeBalance(balance));
  };

  return (
    <div className={css.balance}>
      <p className={css.text}>Баланс:</p>

      <form className={css.wraper} onSubmit={updateBalance}>
        <input
          className={css.add}
          type="text"
          placeholder="0.00 UAH"
          onChange={checkBalance}
          value={balance}
        />
        <button className={css.btnAdd} type="submit">
          Подтвердить
        </button>
      </form>
    </div>
  );
};

export default Balance;

import React from "react";
import css from "./Comment.module.css";

function Comment() {
  return (
    <div className={css.box}>
      <div className={css.polygon}></div>
      <div className={css.wraper}>
        <p className={css.text1}>
          Привет! Для начала работы внеси текущий баланс своего счета!
        </p>
        <p className={css.text2}>
          Ты не можешь тратить деньги пока их у тебя нет !
        </p>
      </div>
    </div>
  );
}

export default Comment;

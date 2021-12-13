import React from "react";
import css from "./Button.module.css";

function Button({ text, type, onClick, onSubmit }) {
  return (
    <button
      type={type}
      className={css.button}
      onClick={onClick}
      onSubmit={onSubmit}
    >
      {text}
    </button>
  );
}

export default Button;

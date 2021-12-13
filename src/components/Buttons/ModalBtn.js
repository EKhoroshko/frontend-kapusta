import React from "react";
import styles from "./ModalBtn.module.css";

const ModalBtn = ({ text, btnAction }) => {
  const onClickAction = (e) => {
    e.preventDefault();
    btnAction();
  };
  return (
    <>
      <button type="button" className={styles.modalBtn} onClick={onClickAction}>
        {text}
      </button>
    </>
  );
};

export default ModalBtn;

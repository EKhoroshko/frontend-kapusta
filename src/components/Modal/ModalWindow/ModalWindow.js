import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import ModalBtn from "../../Button/Button";
import { clearId } from "../../../redux/transaction/slice";
import { deleteTransaction } from "../../../redux/transaction/operation";
import { getIdTransaction } from "../../../redux/transaction/selectors";
import s from "./ModalWindow.module.css";

const modalRoot = document.querySelector("#modal-root");

function Modal({ onCancel, text }) {
  const dispatch = useDispatch();
  const id = useSelector(getIdTransaction);
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const removeTransact = (num) => {
    dispatch(deleteTransaction(num));
    dispatch(clearId());
    onCancel();
  };

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onCancel();
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onCancel();
    }
  };
  return createPortal(
    <div className={s.ModalOverlay} onClick={handleOverlayClick}>
      <div className={s.ModalWindow}>
        <div className={s.CloseModalBtnWrap}>
          <button
            type="button"
            onClick={onCancel}
            className={s.CloseModalBtn}
          ></button>
        </div>
        <div className={s.ModalWindowWrap}>
          <p className={s.ModalText}>{text}</p>
        </div>
        <div className={s.ModalWindowWrap}>
          <div className={s.btnWrapper}>
            <ModalBtn text={"Да"} onClick={() => removeTransact(id)} />
          </div>
          <div className={s.btnWrapper}>
            <ModalBtn text={"Нет"} key="2" onClick={onCancel} />
          </div>
        </div>
      </div>
    </div>,
    modalRoot
  );
}

export default Modal;

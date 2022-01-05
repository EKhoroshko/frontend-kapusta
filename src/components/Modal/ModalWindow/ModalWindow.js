import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import ModalBtn from "../../Button/Button";
import { clearId } from "../../../redux/transaction/slice";
import { deleteTransaction } from "../../../redux/transaction/operation";
import { getIdTransaction } from "../../../redux/transaction/selectors";
import { useTranslation } from "react-i18next";
import s from "./ModalWindow.module.css";

const modalRoot = document.querySelector("#modal-root");

function Modal({ onCancel, text }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const id = useSelector(getIdTransaction);

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onCancel();
    }
  };

  const clickNo = () => {
    dispatch(clearId());
    onCancel();
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const removeTransact = (num) => {
    dispatch(deleteTransaction(num));
    dispatch(clearId());
    onCancel();
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
            <ModalBtn
              text={t("modal.btnYes")}
              onClick={() => removeTransact(id)}
            />
          </div>
          <div className={s.btnWrapper}>
            <ModalBtn
              text={t("modal.btnNo")}
              key="2"
              onClick={() => clickNo()}
            />
          </div>
        </div>
      </div>
    </div>,
    modalRoot
  );
}

export default Modal;

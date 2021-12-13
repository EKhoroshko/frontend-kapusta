import React, { Component } from "react";
import { createPortal } from "react-dom";
import ModalBtn from "../../Button/Button"

import s from "./ModalWindow.module.css";

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onCancel();
    }
  };

  handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.onCancel();
    }
  };

  render() {
    const { text, onSubmit, onCancel } = this.props;
    return createPortal(
      <div className={s.ModalOverlay} onClick={this.handleOverlayClick}>
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
              <ModalBtn text={"Да"} btnAction={onSubmit} />
            </div>
            <div className={s.btnWrapper}>
              <ModalBtn text={"Нет"} key="2" btnAction={onCancel} />
            </div>
          </div>
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;

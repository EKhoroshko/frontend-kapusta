import React from "react";
import { useTranslation } from "react-i18next";
import css from "./Comment.module.css";

function Comment() {
  const { t } = useTranslation();
  return (
    <div className={css.box}>
      <div className={css.polygon}></div>
      <div className={css.wraper}>
        <p className={css.text1}>{t("modal.comment1")}</p>
        <p className={css.text2}>{t("modal.comment2")}</p>
      </div>
    </div>
  );
}

export default Comment;

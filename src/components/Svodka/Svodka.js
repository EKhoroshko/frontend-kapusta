import React from "react";
import { useSelector } from "react-redux";
import { getTransactions } from "../../redux/transaction/selectors";
import period from "../../helpers/SvodkaMonth.js";
import { sortMounth } from "../../helpers/support/FilterState";
import { useTranslation } from "react-i18next";
import { getLang } from "../../redux/languag/selectors";
import s from "./Svodka.module.css";

export default function Svodka({ type }) {
  const lang = useSelector(getLang);
  const transaction = useSelector(getTransactions);
  const { t } = useTranslation();

  const date = new Date();
  const currentYear = date.getFullYear();

  const list = sortMounth(transaction, type, period, currentYear);
  const svodkaInfo = (arr, arr2) => {
    return arr.forEach((tr) => {
      // eslint-disable-next-line array-callback-return
      arr2.find((element) => {
        if (Object.keys(tr).toString() === element.name) {
          tr.nameEn = element.nameEn;
        }
      });
    });
  };
  svodkaInfo(list, period);

  return (
    <div className={s.svodka}>
      <table className={s.svodkaHistory}>
        <thead>
          <tr className={s.tr}>
            <th className={s.svodkaHeader} colSpan="2">
              {t("summary")}
            </th>
          </tr>
        </thead>
        <tbody>
          {lang === "ua" && list
            ? list.map((tr) => {
                return (
                  <tr className={s.tr} key={Object.keys(tr)[0]}>
                    <td className={s.month}>{Object.keys(tr)[0]}</td>
                    <td className={s.sum}>{Object.values(tr)[0]}</td>
                  </tr>
                );
              })
            : list.map((tr) => {
                return (
                  <tr className={s.tr} key={tr.nameEn}>
                    <td className={s.month}>{tr.nameEn}</td>
                    <td className={s.sum}>{Object.values(tr)[0]}</td>
                  </tr>
                );
              })}
          <tr className={s.empty}>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

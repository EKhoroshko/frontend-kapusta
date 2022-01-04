import React from "react";
import { useSelector } from "react-redux";
import { getTransactions } from "../../redux/transaction/selectors";
import period from "../../helpers/SvodkaMonth.js";
import { sortMounth } from "../../helpers/support/FilterState";
import { useTranslation } from "react-i18next";
import s from "./Svodka.module.css";

export default function Svodka({ type }) {
  const transaction = useSelector(getTransactions);
  const { t } = useTranslation();

  const date = new Date();
  const currentYear = date.getFullYear();

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
          {sortMounth(transaction, type, period, currentYear).map((tr) => {
            return (
              <tr className={s.tr} key={Object.keys(tr)}>
                <td className={s.month}>{Object.keys(tr)}</td>
                <td className={s.sum}>{Object.values(tr)}</td>
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

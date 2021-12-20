import React from "react";
import s from "./Svodka.module.css";
import { useSelector } from "react-redux";
import { getTransactions } from "../../redux/transaction/selectors";
import period from "../../helpers/SvodkaMonth.js";
import { sortMounth } from "../../helpers/support/FilterState";

export default function Svodka({ type }) {
  const transaction = useSelector(getTransactions);

  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <div className={s.svodka}>
      <table className={s.svodkaHistory}>
        <thead>
          <tr className={s.tr}>
            <th className={s.svodkaHeader} colSpan="2">
              Сводка
            </th>
          </tr>
        </thead>
        <tbody>
          {sortMounth(transaction, type, period, currentYear).map((tr) => {
            return (
              <tr className={s.tr} key={Object.keys(tr)}>
                <td className={s.month}>{[Object.keys(tr)]}</td>
                <td className={s.sum}>{[Object.values(tr)]}</td>
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

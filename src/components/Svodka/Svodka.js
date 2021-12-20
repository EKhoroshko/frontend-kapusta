import React from "react";
import s from "./Svodka.module.css";
import { useSelector } from "react-redux";
import { getTransactions } from "../../redux/transaction/selectors";
import period from "../../helpers/SvodkaMonth.js";

export default function Svodka({ type }) {
  const transaction = useSelector(getTransactions);

  const filterAll = (arr, type, id) => {
    return arr
      .filter((tr) => tr.transactionType === type)
      .filter((tr) => tr.monthString === id)
      .reduce((allprice, tr) => {
        const { monthString } = tr;
        return { ...allprice, [monthString]: tr.sum };
      }, {});
  };

  const sortMounth = (arr, data) => {
    const newArr = data.map(({ name }) => filterAll(arr, type, name));
    return newArr;
  };

  console.log(sortMounth(transaction, period));

  //console.log(filterAll(transaction, type, "Декабрь"));

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
          <tr className={s.tr}>
            <td className={s.month}>январь</td>
            <td className={s.sum}>3454523</td>
          </tr>
          <tr className={s.empty}>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

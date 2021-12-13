import React from "react";
import s from "./Svodka.module.css";

export default function Svodka () {
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
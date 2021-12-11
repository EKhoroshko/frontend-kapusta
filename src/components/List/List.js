import React from "react";

import s from "./List.module.css";

import deleteIcon from "../../images/svg/delete.svg";

function List() {
  return (
    <div className={s.listContainer}>
      <table className={s.table}>
        <thead className={s.headerTable}>
          <tr>
            <th className={s.tableTh}>Дата</th>
            <th className={s.tableTh}>Описание</th>
            <th className={s.tableTh}>Категория</th>
            <th className={s.tableTh}>Сумма</th>
            <th className={s.tableTh}></th>
          </tr>
        </thead>
        <tbody>
          <tr className={s.tr}>
            <td>date</td>
            <td>description</td>
            <td>category</td>
            <td>summa</td>
            <td>
              <button
                type="button"
                className={s.deleteBtn}
              >
                <img className={s.icon} src={deleteIcon} alt="Delete icon" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default List;

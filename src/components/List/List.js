import React from "react";

// import Svodka from "../Svodka/Svodka";
import MobileList from "./MobileList";
import s from "./List.module.css";

import deleteIcon from "../../images/svg/delete.svg";

function List() {
  return (
    <>
    <div className={s.mainContainer}>
    <div className={s.listContainer}>
      <table className={s.table}>
        <thead className={s.headerTable}>
          <tr className={s.tableTh}>
            <th classname={s.tableTh}>Дата</th>
            <th classname={s.tableTh}>Описание</th>
            <th classname={s.tableTh}>Категория</th>
            <th classname={s.tableTh}>Сумма</th>
            <th classname={s.tableTh}></th>
          </tr>
        </thead>
        <tbody className={s.tableBody}>
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
    {/* <Svodka /> */}
    </div>
    <div className={s.mobileWrap}>
        <div className={s.listWrap}>
          <ul className={s.mobileList}>
                <MobileList

                />
          
            </ul>
          </div>
        </div>
        
        </>
  );
}

export default List;

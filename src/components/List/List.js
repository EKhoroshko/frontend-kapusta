import React from "react";
// import transactionsOperations from "../../redux/transaction/operations";
import { useState } from "react";
import { useDispatch } from "react-redux";
import MobileList from "./MobileList";
import s from "./List.module.css";
import Modal from "../Modal/ModalWindow/ModalWindow";

import deleteIcon from "../../assets/images/delete.svg";

function List() {
  const dispatch = useDispatch();

  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = (e) => {
    setModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className={s.mainContainer}>
        <div className={s.listContainer}>
          <table className={s.table}>
            <thead className={s.headerTable}>
              <tr className={s.tableHeadTr}>
                <th className={s.tableTh1}>Дата</th>
                <th className={s.tableTh}>Описание</th>
                <th className={s.tableTh}>Категория</th>
                <th className={s.tableTh}>Сумма</th>
                <th className={s.tableTh}></th>
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
                    onClick={() => {
                      toggleModal();
                    }}
                  >
                    <img
                      className={s.icon}
                      src={deleteIcon}
                      alt="Delete icon"
                    />
                  </button>
                  {isModalOpen && (
                    <Modal
                      text={"Вы уверены?"}
                      onCancel={toggleModal}
                      onSubmit={() => {
                        // dispatch(transactionsOperations.deleteTransaction());
                      }}
                    />
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={s.mobileWrap}>
        <div className={s.listWrap}>
          <ul className={s.mobileList}>
            <MobileList />
          </ul>
        </div>
      </div>
    </>
  );
}

export default List;

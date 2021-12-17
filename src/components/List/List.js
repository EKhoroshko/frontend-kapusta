import React from "react";
// import transactionsOperations from "../../redux/transaction/operations";
import { useState } from "react";
// import { useDispatch } from "react-redux";
import MobileList from "./MobileList";
import s from "./List.module.css";
import Modal from "../Modal/ModalWindow/ModalWindow";

import deleteIcon from "../../assets/images/delete.svg";

function List() {
  // const dispatch = useDispatch();

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
                <th className={s.tableThDate}>Дата</th>
                <th className={s.tableThDesc}>Описание</th>
                <th className={s.tableThCateg}>Категория</th>
                <th className={s.tableThAmout}>Сумма</th>
                <th className={s.tableThDel}></th>
              </tr>
            </thead>
            <tbody className={s.tableBody}>
              <tr className={s.tr}>
                <td className={s.tableDate}>date</td>
                <td className={s.tableDescription}>description</td>
                <td className={s.tableCategory}>category</td>
                <td className={s.tableAmount}>555</td>
                <td className={s.tableDel}>
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

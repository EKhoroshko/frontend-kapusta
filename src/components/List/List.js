import React from "react";
// import transactionsOperations from "../../redux/transaction/operations";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MobileList from "./MobileList";
import s from "./List.module.css";
// import { getCosts } from "../../redux/transaction/selectors";
import Modal from "../Modal/ModalWindow/ModalWindow";

import deleteIcon from "../../assets/images/delete.svg";
import { deleteTransaction } from "../../redux/transaction/operations";

function List() {
  const dispatch = useDispatch();
  // const costs = useSelector(getCosts);
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = (e) => {
    setModalOpen(!isModalOpen);
  };
  const deleteItem = (id) => {
    dispatch(deleteTransaction(id));
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
              {/* {costs && ( */}
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
                </td>
              </tr>
              {/* )} */}

              {isModalOpen && (
                <Modal
                  text={"Вы уверены?"}
                  onCancel={toggleModal}
                  onSubmit={() => {
                    toggleModal();
                  }}
                />
              )}
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

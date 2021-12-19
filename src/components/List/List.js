import React from "react";
import { useState } from "react";
import MobileList from "./MobileList";
import Modal from "../Modal/ModalWindow/ModalWindow";
import { getAllTransactions } from "../../redux/transaction/operation";
import { getIdResolve } from "../../redux/transaction/slice";
import { getTransactions } from "../../redux/transaction/selectors";
import deleteIcon from "../../assets/images/delete.svg";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import s from "./List.module.css";

function List({ type }) {
  const transactions = useSelector(getTransactions);
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTransactions());
  }, [dispatch]);

  const filterAll = (arr, type) => {
    switch (type) {
      case "incomes":
        return arr.filter((tr) => tr.transactionType === type);
      case "costs":
        return arr.filter((tr) => tr.transactionType === type);
      default:
        return arr;
    }
  };

  const toggleModal = () => {
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
              {transactions &&
                filterAll(transactions, type).map((tr) => {
                  const incomes = tr.transactionType === "incomes";
                  return (
                    <tr className={s.tr} key={tr._id}>
                      <td className={s.td}>{tr.date}</td>
                      <td className={s.td}>{tr.description}</td>
                      <td className={s.td}>{tr.category}</td>
                      <td className={s.td}>
                        {incomes ? "+" + tr.sum : "-" + tr.sum}
                      </td>
                      <td className={s.td}>
                        <button
                          type="button"
                          className={s.deleteBtn}
                          onClick={() => {
                            toggleModal();
                            dispatch(getIdResolve(tr._id));
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
                  );
                })}
              {isModalOpen && (
                <Modal text={"Вы уверены?"} onCancel={toggleModal} />
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

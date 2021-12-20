import React from "react";
import { useState } from "react";
import MobileList from "./MobileList";
import Modal from "../Modal/ModalWindow/ModalWindow";
import {
  getAllTransactions,
  deleteTransaction,
} from "../../redux/transaction/operation";
import { filterAll } from "../../helpers/support/FilterList.js";
import { getTransactions } from "../../redux/transaction/selectors";
import { getLoading } from "../../redux/transaction/selectors";
import deleteIcon from "../../assets/images/delete.svg";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import s from "./List.module.css";
import Skeleton from "../Loader/Loader";

function List({ type }) {
  const transactions = useSelector(getTransactions);
  const trLoad = useSelector(getLoading);
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTransactions());
  }, [dispatch]);

  const toggleModal = (id) => {
    setModalOpen(!isModalOpen);
  };

  return (
    <>
      {trLoad && <Skeleton />}

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
                      {incomes ? (
                        <td className={s.td}>+ {tr.sum} :</td>
                      ) : (
                        <td className={s.td}>- {tr.sum}</td>
                      )}
                      <td className={s.td}>
                        <button
                          type="button"
                          className={s.deleteBtn}
                          onClick={() => {
                            toggleModal(tr._id);
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
                <Modal
                  text={"Вы уверены?"}
                  onCancel={toggleModal}
                  onSubmit={() => {
                    dispatch(deleteTransaction());
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

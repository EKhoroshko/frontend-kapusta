import React from "react";
// import transactionsOperations from "../../redux/transaction/operations";
import { useState } from "react";
// import { useDispatch } from "react-redux";
import MobileList from "./MobileList";
import s from "./List.module.css";
import Modal from "../Modal/ModalWindow/ModalWindow";
import { getAllTransactions } from "../../redux/transaction/operations";
import {
  getCosts,
  getIncomes,
  getTransactions,
} from "../../redux/transaction/selectors";
import deleteIcon from "../../assets/images/delete.svg";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function List({ type }) {
  const incomes = useSelector(getIncomes);
  const costs = useSelector(getCosts);
  const transactions = useSelector(getTransactions);
  const [isModalOpen, setModalOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTransactions());
  }, [dispatch]);

  const toggleModal = (e) => {
    setModalOpen(!isModalOpen);
  };
  const cost = costs && type === "cost";
  const income = incomes && type === "incomes";

  const trans = transactions && type === "";

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
              {trans &&
                transactions.map((tr) => {
                  const incomes = tr.transactionType === "incomes";
                  return (
                    <tr className={s.tr} key={tr.id}>
                      <td>{tr.date}</td>
                      <td>{tr.description}</td>
                      <td>{tr.category}</td>
                      <td>{incomes ? "+" + tr.sum : "-" + tr.sum}</td>
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
                  );
                })}
              {income &&
                incomes.map((tr) => {
                  return (
                    <tr className={s.tr} key={tr.id}>
                      <td>{tr.date}</td>
                      <td>{tr.description}</td>
                      <td>{tr.category}</td>
                      <td>+{tr.sum}</td>
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
                  );
                })}
              {cost &&
                costs.map((tr) => {
                  return (
                    <tr className={s.tr} key={tr.id}>
                      <td>{tr.date}</td>
                      <td>{tr.description}</td>
                      <td>{tr.category}</td>
                      <td>-{tr.sum}</td>
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
                  );
                })}

              {isModalOpen && (
                <Modal
                  text={"Вы уверены?"}
                  onCancel={toggleModal}
                  onSubmit={() => {
                    // dispatch(transactionsOperations.deleteTransaction());
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

import React from "react";
import { useState } from "react";
import MobileList from "./MobileList";
import Modal from "../Modal/ModalWindow/ModalWindow";
import {
  getAllTransactions,
  deleteTransaction,
} from "../../redux/transaction/operation";
import { getIdResolve } from "../../redux/transaction/slice";
import { filterAll } from "../../helpers/support/FilterList.js";
import { getTransactions } from "../../redux/transaction/selectors";
import { getLoading } from "../../redux/transaction/selectors";
import deleteIcon from "../../assets/images/delete.svg";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Skeleton from "../Loader/Loader";
import { useTranslation } from "react-i18next";
import s from "./List.module.css";

function List({ type }) {
  const transactions = useSelector(getTransactions);
  const trLoad = useSelector(getLoading);
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getAllTransactions());
  }, [dispatch]);

  const toggleModal = (id) => {
    setModalOpen(!isModalOpen);
    dispatch(getIdResolve(id));
  };

  return (
    <>
      {trLoad && <Skeleton />}

      <div className={s.mainContainer}>
        <div className={s.listContainer}>
          <table className={s.table}>
            <thead className={s.headerTable}>
              <tr className={s.tableHeadTr}>
                <th className={s.tableThDate}>{t("list.date")}</th>
                <th className={s.tableThDesc}>{t("list.descr")}</th>
                <th className={s.tableThCateg}>{t("list.category")}</th>
                <th className={s.tableThAmout}>{t("list.sum")}</th>
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
                      <td className={s.tdDescr}>{tr.description}</td>
                      <td className={s.td}>{tr.category}</td>
                      {incomes ? (
                        <td className={s.tdIncomes}>
                          + {tr.sum} {t("money.uah")}.{" "}
                        </td>
                      ) : (
                        <td className={s.tdCosts}>
                          - {tr.sum} {t("money.uah")}.{" "}
                        </td>
                      )}
                      <td className={s.tdDelete}>
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
                  text={t("modal.text2")}
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

import styles from "./List.module.css";
// import transactionsOperations from "../../redux/transaction/operations";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import deleteIcon from "../../assets/images/delete.svg";
import Modal from "../Modal/ModalWindow/ModalWindow";
import {
  getAllTransactions,
  // deleteTransaction,
} from "../../redux/transaction/operationT";
import { getTransactions } from "../../redux/transaction/selectors";

const Mobile = ({ type }) => {
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

  const toggleModal = (e) => {
    setModalOpen(!isModalOpen);
  };

  return (
    <>
      <ul className={styles.mobileWrap}>
        {transactions &&
          filterAll(transactions, type).map((tr) => {
            const incomes = tr.transactionType === "incomes";
            return (
              <li className={styles.mobileList2} key={tr._id}>
                <div className={styles.mobileListWrap}>
                  <p className={styles.textDescMob}>{tr.description}</p>
                  <div className={styles.descWrap}>
                    <p className={styles.dateMob}>{tr.date}</p>
                    <p className={styles.categoryMob}>{tr.category}</p>
                  </div>
                </div>
                <p> {incomes ? "+" + tr.sum : "-" + tr.sum}</p>

                <div className={styles.btnWrapper}>
                  <button
                    type="button"
                    className={styles.deleteBtn}
                    onClick={() => {
                      toggleModal(tr._id);
                    }}
                  >
                    <img
                      className={styles.icon}
                      src={deleteIcon}
                      alt="Delete icon"
                    />
                  </button>
                </div>
              </li>
            );
          })}
      </ul>
      {isModalOpen && (
        <Modal
          text={"Вы уверены?"}
          onCancel={toggleModal}
          onSubmit={() => {
            // dispatch(transactionsOperations.deleteTransaction());
          }}
        />
      )}
    </>
  );
};

export default Mobile;

import styles from "./List.module.css";
import transactionsOperations from "../../redux/transaction/operations";
import { useState } from "react";
import { useDispatch } from "react-redux";
import deleteIcon from "../../assets/images/delete.svg";
import Modal from "../Modal/ModalWindow/ModalWindow"

const Mobile = () => {
  const dispatch = useDispatch();

  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = (e) => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className={styles.mobileWrap}>
      <li className={styles.mobileList2}>
        <div className={styles.mobileListWrap}>
          <p className={styles.textDescMob}>description</p>
          <div className={styles.descWrap}>
            <p className={styles.dateMob}>date</p>
            <p className={styles.categoryMob}>category</p>
          </div>
        </div>
        <p>3333</p>
      
        <div className={styles.btnWrapper}>
          <button type="button" className={styles.deleteBtn}
                          onClick={() => {
                            toggleModal();
                          }}>
            <img className={styles.icon} src={deleteIcon} alt="Delete icon" />
          </button>
          {isModalOpen && (
          <Modal
            text={"Вы уверены?"}
            onCancel={toggleModal}
            onSubmit={() => {
              dispatch(transactionsOperations.deleteTransaction());
            }}
          />
        )}
        </div>
      </li>
    </div>


  );
};

export default Mobile;



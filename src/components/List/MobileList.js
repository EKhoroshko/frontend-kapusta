import styles from "./List.module.css";
import deleteIcon from "../../images/svg/delete.svg";

const Mobile = () => {
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
          <button type="button" className={styles.deleteBtn}>
            <img className={styles.icon} src={deleteIcon} alt="Delete icon" />
          </button>
        </div>
      </li>
    </div>
  );
};

export default Mobile;

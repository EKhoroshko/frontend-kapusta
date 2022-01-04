import { toast } from "react-toastify";
import React, { useEffect, useState } from "react";
import {
  NavLink,
  useRouteMatch,
  useHistory,
  useLocation,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as Diagramma } from "../../assets/images/summary.svg";
import Calendar from "../../components/Calendar/Calendar";
import Comment from "../../components/Modal/Comment/Comment";
import MobileList from "../../components/List/MobileList";
import AddForm from "../../components/AddForm/AddForm";
import List from "../../components/List/List";
import AddFormMobile from "../../components/AddForm/AddFormMobile";
import Skeleton from "../../components/Loader/Loader";
import { getBalance, getIsLoading } from "../../redux/auth/selectors";
import { changeBalance } from "../../redux/auth/operations";
import {
  addTransaction,
  getAllTransactions,
} from "../../redux/transaction/operation";
import { getDateTransaction } from "../../redux/transaction/selectors";
import { useTranslation } from "react-i18next";
import "react-toastify/dist/ReactToastify.css";
import css from "./Home.module.css";

const toastAction = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

function Home() {
  const { t } = useTranslation();
  const balance = useSelector(getBalance);
  const login = useSelector(getIsLoading);
  const dateTransaction = useSelector(getDateTransaction);
  const [type, setType] = useState("");
  const [active, setActive] = useState(false);
  const [money, setMoney] = useState(balance);
  const match = useRouteMatch();
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTransactions());
  }, [dispatch]);

  useEffect(() => {
    const path = location.pathname !== "/home";
    setActive(path);
  }, [location.pathname]);

  useEffect(() => {
    setMoney(balance);
  }, [balance]);

  const goSummary = () => {
    history.push("/summary");
  };

  const updateBalance = ({ date, sum, type, category, description }) => {
    if (type === "costs") {
      let newBalanceCost = balance - Number(sum);
      if (newBalanceCost < 0) {
        return toast.warning("Не достаточно средст на счету", toastAction);
      } else {
        setMoney(newBalanceCost);
        dispatch(changeBalance(newBalanceCost));
        dispatch(addTransaction({ date, sum, type, category, description }));
      }
    } else {
      let newBalanceIncoms = balance + Number(sum);
      setMoney(newBalanceIncoms);
      dispatch(changeBalance(newBalanceIncoms));
      dispatch(addTransaction({ date, sum, type, category, description }));
    }
  };

  const getFormInfo = ({ price, description, select }) => {
    const transaction = {
      sum: Number(price),
      description,
      category: select.value,
      date: dateTransaction,
      type,
    };
    if (
      dateTransaction === "" ||
      type === "" ||
      price === "" ||
      select === "" ||
      description === ""
    ) {
      return toast.warning("Заполните всю форму и выберите тип транзакции");
    } else {
      updateBalance(transaction);
    }
  };

  const checkBalance = (e) => {
    setMoney(e.target.value);
  };

  const addBalance = (e) => {
    e.preventDefault();
    dispatch(changeBalance(money));
  };

  return (
    <section className={css.section}>
      {login && <Skeleton />}
      <div className={css.imgBack}>
        <div className={css.container}>
          {active ? (
            <AddFormMobile onSubmit={getFormInfo} type={type} />
          ) : (
            <div className={css.box}>
              {!balance && <Comment />}
              <button className={css.sum} type="button" onClick={goSummary}>
                {t("toReport")}
                <Diagramma className={css.diagramma} />
              </button>
              <div className={css.balance}>
                <p className={css.text}>{t("balance")}:</p>
                <form className={css.wraper} onSubmit={addBalance}>
                  <input
                    className={css.add}
                    type="number"
                    min="1"
                    placeholder="0.00 UAH"
                    onChange={checkBalance}
                    value={money}
                  />
                  {balance <= 0 && (
                    <button className={css.btnAdd} type="submit">
                      {t("confirm")}
                    </button>
                  )}
                </form>
              </div>
              <div className={css.flex}>
                <Calendar />
              </div>
              <div className={css.mobile}>
                <MobileList type={type} />
              </div>
              <div className={css.descktop}>
                <AddForm onSubmit={getFormInfo} type={type} />
                <div className={css.list}>
                  <List type={type} />
                </div>
              </div>
              <div className={css.boxLinkMin}>
                <NavLink className={css.link} to={`${match.url}/costs`}>
                  <button
                    className={css.btn}
                    type="button"
                    onClick={() => setType("costs")}
                  >
                    {t("costs")}
                  </button>
                </NavLink>
                <NavLink className={css.link} to={`${match.url}/incomes`}>
                  <button
                    className={css.btn}
                    type="button"
                    onClick={() => setType("incomes")}
                  >
                    {t("incomes")}
                  </button>
                </NavLink>
              </div>

              <div className={css.boxButton}>
                <button
                  className={css.btn}
                  type="button"
                  onClick={() => setType("costs")}
                  style={
                    type === "costs" ? { color: "orange" } : { color: "black" }
                  }
                >
                  {t("costs")}
                </button>
                <button
                  className={css.btn}
                  type="button"
                  onClick={() => setType("incomes")}
                  style={
                    type === "incomes"
                      ? { color: "orange" }
                      : { color: "black" }
                  }
                >
                  {t("incomes")}
                </button>
              </div>
            </div>
          )}
          <div className={css.imgBackKapusta}></div>
        </div>
      </div>
    </section>
  );
}

export default Home;

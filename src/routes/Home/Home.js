import React, { useEffect, useState } from "react";
import {
  NavLink,
  useRouteMatch,
  useHistory,
  useLocation,
} from "react-router-dom";
import { ReactComponent as Diagramma } from "../../assets/images/summary.svg";
import Calendar from "../../components/Calendar/Calendar";
import Comment from "../../components/Modal/Comment/Comment";
import MobileList from "../../components/List/MobileList";
import AddForm from "../../components/AddForm/AddForm";
import List from "../../components/List/List";
import AddFormMobile from "../../components/AddForm/AddFormMobile";
import { useDispatch, useSelector } from "react-redux";
import { getBalance, getIsLoading } from "../../redux/auth/selectors";
import { changeBalance } from "../../redux/auth/operations";
import { addTransaction } from "../../redux/transaction/operation";
import css from "./Home.module.css";
import Skeleton from "../../components/Loader/Loader";
import { toast } from "react-toastify";

function Home() {
  const balance = useSelector(getBalance);
  const login = useSelector(getIsLoading);
  const [type, setType] = useState("");
  const [active, setActive] = useState(false);
  const [money, setMoney] = useState(balance);
  const match = useRouteMatch();
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

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

  const updateBalance = (price, type) => {
    if (type === "costs") {
      const newBalanceCost = balance - Number(price);
      setMoney(newBalanceCost);
      return dispatch(changeBalance(newBalanceCost));
    } else {
      const newBalanceIncoms = balance + Number(price);
      setMoney(newBalanceIncoms);
      dispatch(changeBalance(newBalanceIncoms));
    }
  };

  const getFormInfo = ({ price, description, select }) => {
    const transaction = {
      sum: Number(price),
      category: select,
      description,
      type,
    };
    if (type === "") return toast.warning("Выберите тип транзакции");
    dispatch(addTransaction(transaction));
    updateBalance(price, type);
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
            <AddFormMobile onSubmit={getFormInfo} />
          ) : (
            <div className={css.box}>
              {!balance && <Comment />}
              <button className={css.sum} type="button" onClick={goSummary}>
                Перейти к отчетам
                <Diagramma className={css.diagramma} />
              </button>
              <div className={css.balance}>
                <p className={css.text}>Баланс:</p>
                <form className={css.wraper} onSubmit={addBalance}>
                  <input
                    className={css.add}
                    type="text"
                    placeholder="0.00 UAH"
                    onChange={checkBalance}
                    value={money}
                  />
                  <button className={css.btnAdd} type="submit">
                    Подтвердить
                  </button>
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
                <NavLink className={css.link} to={`${match.url}/casts`}>
                  <button
                    className={css.btn}
                    type="button"
                    onClick={() => setType("costs")}
                  >
                    Расходы
                  </button>
                </NavLink>
                <NavLink className={css.link} to={`${match.url}/incomes`}>
                  <button
                    className={css.btn}
                    type="button"
                    onClick={() => setType("incomes")}
                  >
                    Доход
                  </button>
                </NavLink>
              </div>

              <div className={css.boxButton}>
                <button
                  className={css.btn}
                  type="button"
                  onClick={() => setType("costs")}
                >
                  Расходы
                </button>
                <button
                  className={css.btn}
                  type="button"
                  onClick={() => setType("incomes")}
                >
                  Доход
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

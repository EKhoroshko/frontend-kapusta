import React, { useEffect, useState } from "react";
import { NavLink, useRouteMatch, useHistory } from "react-router-dom";
import { ReactComponent as Diagramma } from "../../assets/images/summary.svg";
import Calendar from "../../components/Calendar/Calendar";
import Comment from "../../components/Modal/Comment/Comment";
import MobileList from "../../components/List/MobileList";
import AddForm from "../../components/AddForm/AddForm";
import List from "../../components/List/List";
import AddFormMobile from "../../components/AddForm/AddFormMobile";
import css from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { addTransaction } from "../../redux/transaction/operations";
import { getBalance } from "../../redux/auth/selectors";

function Home() {
  const balance = useSelector(getBalance);

  const [type, setType] = useState("");
  const [active, setActive] = useState(false);
  const [money, setMoney] = useState(balance ?? 5);
  const match = useRouteMatch();
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const a = location.pathname !== "/home";
    setActive(a);
  }, [location.pathname]);

  const handleChangeBalance = (e) => {
    e.preventDefault();
  };
  const goSummary = () => {
    history.push("/summary");
  };

  const getFormInfo = ({ price, description, select }) => {
    const transaction = {
      sum: Number(price),
      category: select,
      description,
      type,
    };
    dispatch(addTransaction(transaction));
    // transactions.length(updateBalance( price));
  };

  const checkBalance = (e) => {
    setMoney(e.target.value);
  };

  const addBalance = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <section className={css.section}>
      <div className={css.imgBack}>
        <div className={css.container}>
          {active ? (
            <AddFormMobile />
          ) : (
            <div className={css.box}>
              {!money && <Comment />}
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
                  <button
                    className={css.btnAdd}
                    type="submit"
                    onSubmit={handleChangeBalance}
                  >
                    Подтвердить
                  </button>
                </form>
              </div>
              <div className={css.flex}>
                <Calendar />
              </div>
              <div className={css.mobile}>
                <MobileList />
              </div>
              <div className={css.descktop}>
                <AddForm onSubmit={getFormInfo} />
                <div className={css.list}>
                  <List type={type} />
                </div>
              </div>
              <div className={css.boxLinkMin}>
                <NavLink className={css.link} to={`${match.url}/casts`}>
                  <button className={css.btn} type="button">
                    Расходы
                  </button>
                </NavLink>
                <NavLink className={css.link} to={`${match.url}/incomes`}>
                  <button className={css.btn} type="button">
                    Доход
                  </button>
                </NavLink>
              </div>

              <div className={css.boxButton}>
                <button
                  className={css.btn}
                  type="button"
                  onClick={() => setType("cost")}
                >
                  Расходы
                </button>
                <button
                  className={css.btn}
                  type="button"
                  onClick={() => setType("income")}
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

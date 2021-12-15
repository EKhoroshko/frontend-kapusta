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
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function Home() {
  const [balanse, setBalanse] = useState(5);
  const [active, setActive] = useState(false);
  const match = useRouteMatch();
  const location = useLocation();
  console.log(active);
  const history = useHistory();

  useEffect(() => {
    const a = location.pathname !== "/home";
    setActive(a);
  }, [location.pathname]);

  const goSummary = () => {
    history.push("/summary");
  };

  const checkBalance = (e) => {
    setBalanse(e.currentTarget.value);
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
              {!balanse && <Comment />}
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
                    value={balanse}
                  />
                  <button className={css.btnAdd} type="submit">
                    Подтвердить{" "}
                  </button>
                </form>
              </div>
              <div className={css.flex}>
                <Calendar />
              </div>
              <div className={css.mobile}>
                <MobileList />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={css.descktop}>
        <AddForm />
        <div className={css.list}>
          <List />
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
    </section>
  );
}

export default Home;

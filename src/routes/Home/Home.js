import React, { useState } from "react";
import { NavLink, useRouteMatch, useHistory } from "react-router-dom";
import MediaQuery from "react-responsive";
import { ReactComponent as Diagramma } from "../../assets/images/summary.svg";
import Calendar from "../../components/Calendar/Calendar";
import Comment from "../../components/Modal/Comment/Comment";
import MobileList from "../../components/List/MobileList";
import AddForm from "../../components/AddForm/AddForm";
import List from "../../components/List/List";
import AddFormMobile from "../../components/AddForm/AddFormMobile";
import css from "./Home.module.css";

function Home() {
  const [balanse, setBalanse] = useState(5);
  const match = useRouteMatch();
  const history = useHistory();
  console.log(balanse);

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
          <MediaQuery maxWidth={767}>
            <AddFormMobile />
          </MediaQuery>
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

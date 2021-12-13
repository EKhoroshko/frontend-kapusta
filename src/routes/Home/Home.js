import React, { useState } from "react";
import {
  NavLink,
  Switch,
  Route,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
import { ReactComponent as Diagramma } from "../../assets/images/summary.svg";
import Calendar from "../../components/Calendar/Calendar";
import Comment from "../../components/Modal/Comment/Comment";
import Incomes from "../../components/Incomes/Incomes";
import Casts from "../../components/Casts/Casts";
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
    if (Number(e.currentTarget.value)) {
      setBalanse(e.currentTarget.value);
    }
  };

  const addBalance = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <section className={css.section}>
      <div className={css.imgBack}>
        <div className={css.container}>
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
          </div>
        </div>
      </div>

      <div className={css.boxLink}>
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

      <div className={css.boxLinkMin}>
        <NavLink className={css.link} to={"/casts"}>
          <button className={css.btn} type="button">
            Расходы
          </button>
        </NavLink>
        <NavLink className={css.link} to={"/incomes"}>
          <button className={css.btn} type="button">
            Доход
          </button>
        </NavLink>
      </div>

      <div className={css.route}>
        <Switch>
          <Route path={`${match.url}/casts`}>
            <Casts />
          </Route>
          <Route path={`${match.url}/incomes`}>
            <Incomes />
          </Route>
        </Switch>
      </div>
    </section>
  );
}

export default Home;

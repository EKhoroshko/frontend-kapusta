import React from "react";
import {
  Link,
  Switch,
  Route,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
import Incomes from "../../components/Incomes/Incomes";
import Casts from "../../components/Casts/Casts";


function Home() {
  const match = useRouteMatch();
  const history = useHistory();

  const goSummary = () => {
    history.push("/summary");
  };

  return (
    <div>
      <h1> Home page</h1>
      <div>
        <p>Баланс</p>
        <input type="text" placeholder="0.00 UAH" />
        <button type="button">Подтвердить </button>
        <button type="button" onClick={goSummary}>
          Перейти к отчетам
        </button>
      </div>
      <Link to={`${match.url}/casts`}>Расходы</Link>
      <Link to={`${match.url}/incomes`}>Доход</Link>
      <Switch>
        <Route path={`${match.url}/casts`}>
          <Casts />
        </Route>
        <Route path={`${match.url}/incomes`}>
          <Incomes />
        </Route>
      </Switch>
    </div>
  );
}

export default Home;

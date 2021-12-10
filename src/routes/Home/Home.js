import React from "react";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import AddForm from "../../components/AddForm/AddForm";
import Incomes from "../../components/Incomes/Incomes";
import Casts from "../../components/Casts/Casts";

function Home() {
  const match = useRouteMatch();

  return (
    <div>
      <h1> Home page</h1>
      <Link to={`${match.url}/casts`}>Расходы</Link>
      <Link to={`${match.url}/incomes`}>Доход</Link>
      <Switch>
        <AddForm />
        <Switch>
          <Route path={`${match.url}/casts`}>
            <Casts />
          </Route>
          <Route path={`${match.url}/incomes`} component={Incomes} />
        </Switch>
      </Switch>
    </div>
  );
}
// Нужно дописать отрисовку Incomes + Casts
// И роут под статистику
export default Home;

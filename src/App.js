import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import Login from "./routes/Login/Login";
import Home from "./routes/Home/Home";
import NotFound from "./routes/NotFound/NotFound";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
import "./App.css";

function App() {
  return (
    <section>
      <Header />
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
      <NotificationContainer />
    </section>
  );
}

export default App;

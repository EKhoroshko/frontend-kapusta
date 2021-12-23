import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Login from "./routes/Login/Login";
import Home from "./routes/Home/Home";
import NotFound from "./routes/NotFound/NotFound";
import Team from "./routes/Team/Team.jsx";
import Veryfy from "./routes/Veryfy/Veryfy";
import Skeleton from "./components/Loader/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Summary from "./routes/Summary/Summary";
import { useDispatch } from "react-redux";
import { updateUserToken } from "./redux/auth/operations";
import { useEffect } from "react";
import PrivateRoutes from "./components/PrivateRoutes/PrivateRoutes";
import "./App.css";
import { useRouteMatch } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const location = useLocation();
  console.log(match);
  console.log(location);

  useEffect(() => {
    dispatch(updateUserToken());
  }, [dispatch]);

  return (
    <section>
      <Header />
      <Switch fallback={<Skeleton />}>
        <Route path="/" exact component={Login} />
        <PrivateRoutes path="/home" exact component={Home} />
        <PrivateRoutes path="/summary" component={Summary} />
        <PrivateRoutes path="/team" component={Team} />
        <Route path="/:verificationToken" exact component={Veryfy} />
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </section>
  );
}

export default App;

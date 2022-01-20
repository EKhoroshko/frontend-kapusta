import React, { Suspense, lazy, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header/Header.jsx";
import Skeleton from "./components/Loader/Loader";
import PrivateRoutes from "./components/PrivateRoutes/PrivateRoutes";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary.jsx";
import { updateUserToken } from "./redux/auth/operations";
import { getLang } from "./redux/languag/selectors";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const Login = lazy(() => import("./routes/Login/Login"));
const Home = lazy(() => import("./routes/Home/Home"));
const Team = lazy(() => import("./routes/Team/Team.jsx"));
const Summary = lazy(() => import("./routes/Summary/Summary"));
const Veryfy = lazy(() => import("./routes/Veryfy/Veryfy"));
const NotFound = lazy(() => import("./routes/NotFound/NotFound"));
const UserPage = lazy(() => import("./routes/UserPage/UserPage"));

function App() {
  const lang = useSelector(getLang);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateUserToken());
  }, [dispatch]);

  return (
    <section>
      <ErrorBoundary lang={lang}>
        <Header />
        <Suspense fallback={<Skeleton />}>
          <Switch>
            <Route path="/" exact component={Login} />
            <PrivateRoutes path="/home" component={Home} />
            <PrivateRoutes path="/summary" component={Summary} />
            <PrivateRoutes path="/team" component={Team} />
            <PrivateRoutes path="/user" component={UserPage} />
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
        </Suspense>
      </ErrorBoundary>
    </section>
  );
}

export default App;

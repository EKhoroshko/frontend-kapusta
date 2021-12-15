import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Login from "./routes/Login/Login";
import Home from "./routes/Home/Home";
import Casts from "./components/Casts/Casts";
import Incomes from "./components/Incomes/Incomes";
import NotFound from "./routes/NotFound/NotFound";
import Loader from "./components/Loader/Loader"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Summary from "./routes/Summary/Summary";
import "./App.css";

function App() {
  return (
    <section>
      <Header />
      <Switch fallback={<Loader />}>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/casts" component={Casts} />
        <Route path="/incomes" component={Incomes} />
        <Route path="/summary" component={Summary} />
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

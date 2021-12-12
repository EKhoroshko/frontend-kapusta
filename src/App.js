import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Login from "./routes/Login/Login";
import Home from "./routes/Home/Home";
import NotFound from "./routes/NotFound/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Summary from "./routes/Summary/Summary";
import "./App.css";
import PrivateRoute from "./components/PrivateRoutes/PrivateRoutes";

function App() {
  return (
    <section>
      <Header />
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
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

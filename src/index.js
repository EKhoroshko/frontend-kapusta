import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import * as store from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import "./i18n";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <Provider store={store.store}>
        <PersistGate loading={null} persistor={store.persistor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

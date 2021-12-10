import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};
// const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    // auth: persistedReducer,
    // money: moneyReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);
export { store, persistor };

import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { register, logIn, logOut, currentUser } from "./operations";
const authState = {
  name: "",
  email: "",
  token: null,
  isLoggedIn: false,
  id: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: authState,
  extraReducers: {
    [register.fulfilled]() {
      toast.success(
        `Вы успешно зарегистрированы. Пожалуйста ,введите свои данные для входа.`,
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    },
    [logIn.fulfilled](state, { payload }) {
      state.name = payload.name;
      state.email = payload.email;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.id = payload.id;
      toast.success(`Добро пожаловать: ${state.name}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
    [logOut.fulfilled](state) {
      toast.info(`Всего доброго, ${state.name} `, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      state.name = "";
      state.email = "";
      state.token = null;
      state.id = null;
      state.isLoggedIn = false;
    },
    [currentUser.fulfilled](state, { payload }) {
      state.name = payload.name;
      state.email = payload.email;
      state.id = payload.id;
      state.isLoggedIn = true;
      toast.success(`Рады Вас видеть  ${state.name}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
  },
});

export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
//import { toast } from "react-toastify";
//import { register, logIn, logOut, currentUser } from "./operations";
const initialState = {
  isLoading: true,
  name: "",
  email: "",
  isLoggedIn: false,
  token: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userRegister: (state) => ({
      ...state,
      isLoading: true,
    }),
    userRegisterResolve: (state, actions) => ({
      ...state,
      isLoading: false,
      data: actions.payload,
    }),
    userRegisterReject: (state, actions) => ({
      ...state,
      isLoading: false,
      data: {},
      error: actions.payload,
    }),
    userClearError: (state) => ({
      ...state,
      error: null,
    }),
  },
});

export const {
  userRegister,
  userRegisterResolve,
  userRegisterReject,
  userClearError,
} = authSlice.actions;

export default authSlice.reducer;

/*extraReducers: {
    [register.fulfilled](_, { payload }) {
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
      return payload;
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
      state.token = payload.token;
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
  },*/

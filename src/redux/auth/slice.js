import { createSlice } from "@reduxjs/toolkit";
//import { toast } from "react-toastify";
//import { register, logIn, logOut, currentUser } from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: true,
    isLogin: false,
    token: null,
    error: null,
    data: {},
  },
  reducers: {
    userRegister: (state, _) => ({
      ...state,
      isLoading: true,
    }),
    userRegisterResolve: (state, { payload }) => ({
      ...state,
      data: payload,
      isLoading: false,
    }),
    userRegisterReject: (_, actions) => ({
      isLoading: false,
      error: actions.error,
    }),

    userLogin: (state) => ({
      ...state,
      isLoading: true,
    }),
    userLoginResolve: (state, { payload }) => ({
      ...state,
      isLoading: false,
      token: payload.token,
      data: payload,
      isLogin: true,
    }),
    userLoginReject: (state, action) => ({
      ...state,
      isLoading: false,
      data: {},
      error: action.payload,
    }),

    userClearError: (state) => ({
      ...state,
      error: null,
    }),
  },

  userLogOut: (state) => ({
    ...state,
    isLoading: true,
  }),
  userLogOutResolve: (state, { payload }) => ({
    ...state,
    isLoading: false,
    data: payload,
    isLogin: false,
  }),
  userLogOutReject: (state, { payload }) => ({
    ...state,
    isLoading: false,
    data: {},
    error: payload,
  }),
});

export const {
  userRegister,
  userRegisterResolve,
  userRegisterReject,
  userClearError,
  userLogin,
  userLoginResolve,
  userLoginReject,
  userLogOut,
  userLogOutResolve,
  userLogOutReject,
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

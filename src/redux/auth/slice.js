import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: true,
    isLogin: false,
    token: null,
    errors: null,
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
      errors: actions.payload,
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

    userLogOut: (state) => ({
      ...state,
      isLoading: true,
    }),
    userLogOutResolve: (state, { payload }) => ({
      ...state,
      isLoading: false,
      token: null,
      data: payload,
      isLogin: false,
    }),
    userLogOutReject: (state, { payload }) => ({
      ...state,
      isLoading: false,
      data: {},
      error: payload,
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

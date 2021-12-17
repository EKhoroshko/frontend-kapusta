import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    avatarURL: "",
    isLoading: true,
    isLogin: false,
    token: null,
    id: null,
    error: null,
    userName: "",
    balance: 0,
    email: "",
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
      error: actions.payload,
    }),

    userLogin: (state) => ({
      ...state,
      isLoading: true,
    }),
    userLoginResolve: (state, { payload }) => ({
      ...state,
      data: payload,
      userName: payload.userName,
      isLoading: false,
      token: payload.token,
      isLogin: true,
      balance: payload.balance,
      email: payload.email,
      id: payload.id,
      avatarURL: payload.avatarURL,
    }),
    userLoginReject: (state, action) => ({
      ...state,
      isLoading: false,
      data: action,
      error: action,
    }),

    userLogOut: (state) => ({
      ...state,
      isLoading: true,
    }),
    userLogOutResolve: (state, { payload }) => ({
      ...state,
      isLoading: false,
      token: null,
      data: {},
      isLogin: false,
      error: payload,
    }),
    userLogOutReject: (state, action) => ({
      ...state,
      isLoading: false,
      data: {},
      error: action,
    }),

    updateUser: (state) => ({
      ...state,
      isLoading: true,
    }),
    updateUserResolve: (state, { payload }) => ({
      ...state,
      avatarURL: payload.avatarURL,
      userName: payload.userName,
      isLoading: false,
      token: payload.token,
      email: payload.email,
      id: payload.id,
      balance: payload.balance,
      isLogin: true,
    }),
    updateUserReject: (state, action) => ({
      ...state,
      isLoading: false,
      data: {},
      error: action.payload,
    }),

    userBalance: (state, _) => ({
      ...state,
      isLoading: true,
    }),
    userBalanceResolve: (state, { payload }) => ({
      ...state,
      data: payload,
      balance: payload.balance,
      isLoading: false,
    }),
    userBalanceReject: (_, actions) => ({
      isLoading: false,
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
  userLogin,
  userLoginResolve,
  userLoginReject,
  userLogOut,
  userLogOutResolve,
  userLogOutReject,
  updateUser,
  updateUserResolve,
  updateUserReject,
  userBalance,
  userBalanceResolve,
  userBalanceReject,
} = authSlice.actions;

export default authSlice.reducer;

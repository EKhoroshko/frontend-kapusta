import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: true,
    isLogin: false,
    token: null,
    id: null,
    error: {},
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
      isLoading: false,
      token: payload.token,
      isLogin: true,
      balance: payload.balance,
      email: payload.email,
      id: payload.id,
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
      data: payload,
      isLogin: false,
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
      isLoading: false,
      token: payload.token,
      data: payload,
      isLogin: true,
    }),
    updateUserReject: (state, action) => ({
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
} = authSlice.actions;

export default authSlice.reducer;

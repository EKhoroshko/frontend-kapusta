import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    avatarURL: "",
    isLoading: false,
    isLogin: false,
    token: null,
    id: null,
    error: null,
    userName: "",
    balance: 0,
    email: "",
    data: {},
    verifyToken: "",
    verify: true,
  },
  reducers: {
    userRegisterLoading: (state, _) => ({
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

    userLoginLoading: (state) => ({
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
      avatarURL: payload.avatarURL,
      userName: payload.userName,
    }),
    userLoginReject: (_, { payload }) => ({
      isLoading: false,
      error: payload,
    }),

    userLogOutLoading: (state) => ({
      ...state,
      isLoading: true,
    }),
    userLogOutResolve: (state, { payload }) => ({
      ...state,
      isLoading: false,
      token: null,
      isLogin: false,
      error: payload,
    }),
    userLogOutReject: (state, action) => ({
      ...state,
      isLoading: false,
      data: {},
      error: action,
    }),

    updateUserLoading: (state) => ({
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

    getVerifyToken: (state) => ({
      ...state,
      isLoading: true,
    }),
    sliceToken: (state, { payload }) => ({
      ...state,
      verifyToken: payload,
    }),
    getVerifyTokenResolve: (state, { payload }) => ({
      ...state,
      verifyToken: payload,
      verify: true,
    }),
    getVerifyTokenReject: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload,
    }),

    userBalanceLoading: (state, _) => ({
      ...state,
      isLoading: true,
    }),
    userBalanceResolve: (state, { payload }) => ({
      ...state,
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
  userRegisterLoading,
  userRegisterResolve,
  userRegisterReject,
  userClearError,
  userLoginLoading,
  userLoginResolve,
  userLoginReject,
  userLogOutLoading,
  userLogOutResolve,
  userLogOutReject,
  updateUserLoading,
  updateUserResolve,
  updateUserReject,
  userBalanceLoading,
  userBalanceResolve,
  userBalanceReject,
  getVerifyToken,
  sliceToken,
  getVerifyTokenResolve,
  getVerifyTokenReject,
} = authSlice.actions;

export default authSlice.reducer;

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
    verifyToken: "",
    verify: false,
    pas: "",
  },
  reducers: {
    userRegisterLoading: (state, _) => ({
      ...state,
      isLoading: true,
    }),
    userRegisterResolve: (state, { payload }) => ({
      ...state,
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
      verify: payload.verify,
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
      verify: payload.verify,
      isLogin: true,
    }),
    updateUserReject: (state, action) => ({
      ...state,
      isLoading: false,
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
    userBalanceReject: (state, actions) => ({
      ...state,
      isLoading: false,
      error: actions.payload,
    }),

    userClearError: (state) => ({
      ...state,
      error: null,
    }),

    updateAvatarLoading: (state, _) => ({
      ...state,
      isLoading: true,
    }),
    updateAvatarResolve: (state, { payload }) => ({
      ...state,
      avatarURL: payload,
      isLoading: false,
    }),
    updateAvatarReject: (state, actions) => ({
      ...state,
      isLoading: false,
      error: actions.payload,
    }),
    updatePassLoading: (state, _) => ({
      ...state,
      isLoading: true,
    }),
    updatePassResolve: (state, { payload }) => ({
      ...state,
      pas: payload,
      isLoading: false,
    }),
    updatePassReject: (state, actions) => ({
      ...state,
      isLoading: false,
      error: actions.payload,
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
  updateAvatarLoading,
  updateAvatarResolve,
  updateAvatarReject,
  updatePassLoading,
  updatePassResolve,
  updatePassReject,
} = authSlice.actions;

export default authSlice.reducer;

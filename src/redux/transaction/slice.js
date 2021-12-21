import { createSlice } from "@reduxjs/toolkit";

const transactionSlice = createSlice({
  name: "transactions",
  initialState: {
    isLoading: true,
    allTransactions: [],
    error: null,
    idTransaction: null,
    currentPeriod: {},
  },
  reducers: {
    allTransactionLoading: (state, _) => ({
      ...state,
      isLoading: true,
    }),
    allTransactionResolve: (state, { payload }) => ({
      ...state,
      allTransactions: payload,
      isLoading: false,
    }),
    allTransactionReject: (_, { payload }) => ({
      isLoading: false,
      error: payload,
    }),

    addTransactionLoading: (state, _) => ({
      ...state,
      isLoading: true,
    }),
    addTransactionResolve: (state, { payload }) => ({
      ...state,
      allTransactions: [payload, ...state.allTransactions],
      isLoading: false,
    }),
    addTransactionReject: (_, { payload }) => ({
      isLoading: false,
      error: payload,
    }),

    removeTransactionLoading: (state, _) => ({
      ...state,
      isLoading: true,
    }),
    removeTransactionResolve: (state, { payload }) => ({
      ...state,
      allTransactions: state.allTransactions.filter(
        (transaction) => transaction._id !== payload
      ),
      isLoading: false,
    }),
    removeTransactionReject: (_, { payload }) => ({
      isLoading: false,
      error: payload,
    }),

    getIdResolve: (state, { payload }) => ({
      ...state,
      isLoading: false,
      idTransaction: payload,
    }),
    clearId: (state, _) => ({
      ...state,
      isLoading: false,
      idTransaction: null,
    }),
    changeDate: (state, { payload }) => ({
      ...state,
      isLoading: false,
      currentPeriod: payload,
    }),

    transactionClearError: (state) => ({
      ...state,
      error: null,
    }),
  },
});

export const {
  allTransactionLoading,
  allTransactionResolve,
  allTransactionReject,

  addTransactionLoading,
  addTransactionResolve,
  addTransactionReject,
  removeTransactionLoading,
  removeTransactionResolve,
  removeTransactionReject,
  transactionClearError,
  getIdResolve,
  clearId,
  changeDate,
} = transactionSlice.actions;

export default transactionSlice.reducer;

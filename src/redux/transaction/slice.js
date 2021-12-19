import { createSlice } from "@reduxjs/toolkit";
import { deleteTransaction } from "./operations";

const transactionSlice = createSlice({
  name: "transactions",
  initialState: {
    isLoading: true,
    allTransactions: [],
    error: null,
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

    transactionClearError: (state) => ({
      ...state,
      error: null,
    }),
  },
  extraReducers: {
    [deleteTransaction.fulfilled](state, { payload }) {
      state.allTransaction = [
        ...state.allTransactions.filter(
          (transaction) => transaction.id !== payload
        ),
      ];
    },
  },
});

export const {
  allTransactionLoading,
  allTransactionResolve,
  allTransactionReject,
  addTransactionLoading,
  addTransactionResolve,
  addTransactionReject,
  transactionClearError,
} = transactionSlice.actions;

export default transactionSlice.reducer;

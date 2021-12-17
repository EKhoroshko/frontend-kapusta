import { createSlice } from "@reduxjs/toolkit";
/*import {
  addTransaction,
  deleteTransaction,
  getAllTransactions,
} from "./operations";*/
/*const initialState = {
  isLoading: true,
  allTransactions: [],
  newTransaction: {},
  error: null,
};*/

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
      allTransactions: [payload],
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
  /* extraReducers: {
     [addTransaction.fulfilled](state, { payload }) {
       state.allTransactions.push(payload.newTransaction);
     },
     [deleteTransaction.fulfilled](state, { payload }) {
       state.allTransaction = [
         ...state.allTransactions.filter(
           (transaction) => transaction.id !== payload
         ),
       ];
     },
     [getAllTransactions.fulfilled](state, { payload }) {
       state.allTransactions = [payload];
     },
   },*/
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

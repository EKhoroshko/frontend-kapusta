import { createSlice } from "@reduxjs/toolkit";
import {
  addTransactionCost,
  deleteTransaction,
  getAllTransactions,
  addTransactionIncomes,
} from "./operations";
const initialState = {
  balance: 0,
  allTransactions: [],
};

const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  extraReducers: {
    [addTransactionCost.fulfilled](state, { payload }) {
      state.allTransactions.push(payload);
      return state;
    },
    [addTransactionIncomes.fulfilled](state, { payload }) {
      state.allTransactions.push(payload);
      return state;
    },
    [deleteTransaction.fulfilled](state, { payload }) {
      state.allTransaction = [
        ...state.allTransactions.filter(
          (transaction) => transaction.id !== payload
        ),
      ];
    },
    [getAllTransactions.fulfilled](state, { payload }) {
      state.allTransaction = payload;
    },
  },
});
export default transactionSlice.reducer;

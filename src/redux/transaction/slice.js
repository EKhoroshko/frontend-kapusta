import { createSlice } from "@reduxjs/toolkit";
import {
  addTransaction,
  deleteTransaction,
  getAllTransactions,
} from "./operations";
const initialState = {
  allTransactions: [],
};

const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  extraReducers: {
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
  },
});
export default transactionSlice.reducer;

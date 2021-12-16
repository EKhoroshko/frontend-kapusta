import { createSlice } from "@reduxjs/toolkit";
import { addTransaction, deleteTransaction } from "./operations";
const initialState = {
  balance: 0,
  allTransactions: [],
};

const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  extraReducers: {
    [addTransaction.fulfilled](state, { payload }) {
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
  },
});
export default transactionSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  balance: 0,
  income: [],
  cost: [],
};

const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  extraReducers: {},
});
export default transactionSlice.reducer;

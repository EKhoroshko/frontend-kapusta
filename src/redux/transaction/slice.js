import { createSlice } from "@reduxjs/toolkit";
const transactionState = {
  category: "",
  description: "",
  date: "",
  month: null,
  year: null,
  sum: 0,
  transactionType: "",
};

const transactionSlice = createSlice({
  name: "transaction",
  transactionState,
  extraReducers: {},
});
export default transactionSlice.reducer;

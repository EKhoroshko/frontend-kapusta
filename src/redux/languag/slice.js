import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "language",
  initialState: {
    lang: "",
  },
  reducers: {
    checkLang: (state, { payload }) => ({
      ...state,
      lang: payload,
    }),
  },
});

export const { checkLang } = languageSlice.actions;

export default languageSlice.reducer;

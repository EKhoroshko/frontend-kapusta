import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { register, logIn, logOut, currentUser } from "./auth-operations";
const initialState = {
  user: { name: "", email: "" },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      toast.success(`Welcome, dear: ${state.user.name}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      toast.success(`Welcome, dear: ${state.user.name}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
    [logOut.fulfilled](state) {
      toast.info(`Good luck, ${state.user.name} `, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      state.user = { name: "", email: "" };
      state.token = null;
      state.isLoggedIn = false;
    },
    [currentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      toast.success(`Nice to see you  ${state.user.name}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
  },
});

export default authSlice.reducer;

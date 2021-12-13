import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

axios.defaults.baseURL = "https://back-kapusta.herokuapp.com/api/";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};
const register = createAsyncThunk("auth/register", async (regInfo) => {
  try {
    const { data } = await axios.post("auth/users/register", regInfo);
    return data;
  } catch (error) {
    return toast.error("This user already exists", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
});

const logIn = createAsyncThunk("auth/login", async (loginInfo) => {
  try {
    const { data } = await axios.post("auth/users/login", loginInfo);
    token.set(data.token);
    return data;
  } catch (error) {
    return toast.error("Incorrect data entered", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
});
const logOut = createAsyncThunk("auth/logout", async () => {
  try {
    const data = await axios.post("users/logout");
    token.unset();
    return data;
  } catch (error) {
    return toast.warning("Something went wrong", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
});

const currentUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistToken = state.auth.token;
  if (persistToken === null) {
    return thunkAPI.rejectWithValue();
  }
  token.set(persistToken);
  try {
    const { data } = await axios.get("auth/users/current");
    return data;
  } catch (error) {
    return toast.error("User is not defined", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
});

export { register, logIn, logOut, currentUser };

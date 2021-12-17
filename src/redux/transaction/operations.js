import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://back-kapusta.herokuapp.com/api";
const token = localStorage.getItem("token");
axios.defaults.headers.common.Authorization = `Bearer ${token}`;

const addTransaction = createAsyncThunk(
  "/addTransaction",
  async (description) => {
    try {
      const { data } = await axios.post(`/transactions/costs`, description);
      return data;
    } catch (error) {
      toast.warning("Something went wrong", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }
);

const deleteTransaction = createAsyncThunk("/deleteTransaction", async (id) => {
  try {
    await axios.delete(`/transactions/${id}`);
    return id;
  } catch (error) {
    toast.warning("Something went wrong", {
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

/*const getAllTransactions = createAsyncThunk("/getAllTransactions", async () => {
  try {
    const { transaction } = await axios.get(`/transactions/all`);
    return transaction;
  } catch (error) {}
});*/
export { addTransaction, deleteTransaction /* getAllTransactions*/ };

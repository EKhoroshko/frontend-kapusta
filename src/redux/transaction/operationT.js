import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  allTransactionLoading,
  allTransactionResolve,
  allTransactionReject,
  addTransactionLoading,
  addTransactionResolve,
  addTransactionReject,
  transactionClearError,
} from "../transaction/slice";

export const getAllTransactions = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  dispatch(allTransactionLoading());
  try {
    const response = await fetch(
      "https://back-kapusta.herokuapp.com/api/transactions/all",
      options
    )
      .then((response) => response.json())
      .then(({ transaction }) => dispatch(allTransactionResolve(transaction)));
    console.log(response);
  } catch (error) {
    dispatch(allTransactionReject(error));
    dispatch(transactionClearError());
  }
};

export const addTransaction =
  ({ type, sum, description, category }) =>
  async (dispatch) => {
    const token = localStorage.getItem("token");
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        transactionType: type,
        sum: sum,
        description: description,
        category: category,
      }),
    };

    dispatch(addTransactionLoading());
    try {
      const response = await fetch(
        "https://back-kapusta.herokuapp.com/api/transactions",
        options
      )
        .then((response) => response.json())
        .then(({ newTransaction }) =>
          dispatch(addTransactionResolve(newTransaction))
        );
      console.log(response);
    } catch (error) {
      dispatch(addTransactionReject(error));
      dispatch(transactionClearError());
    }
  };

export const deleteTransaction = createAsyncThunk(
  "/deleteTransaction",
  async (id) => {
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
  }
);

//import { toast } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";

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
      .then(({ transaction }) => ({ transaction }));
    dispatch(allTransactionResolve(response));
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
        .then(({ newTransaction }) => newTransaction);
      dispatch(addTransactionResolve(response));
    } catch (error) {
      dispatch(addTransactionReject(error));
      dispatch(transactionClearError());
    }
  };

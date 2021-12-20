import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  allTransactionLoading,
  allTransactionResolve,
  allTransactionReject,
  addTransactionLoading,
  addTransactionResolve,
  addTransactionReject,
  removeTransactionLoading,
  removeTransactionResolve,
  removeTransactionReject,
  transactionClearError,
} from "./slice";

const toastAction = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

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
    return await fetch(
      "https://back-kapusta.herokuapp.com/api/transactions/all",
      options
    )
      .then((response) => response.json())
      .then(({ transaction }) => dispatch(allTransactionResolve(transaction)));
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
      ).then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          dispatch(addTransactionReject(response.statusText));
          return toast.error(
            "Вы не заполнили все поля, или не выбрали тип транзакции",
            toastAction
          );
        }
      });
      /*.then(({ newTransaction }) =>
          dispatch(addTransactionResolve(newTransaction))
        );*/
    } catch (error) {
      dispatch(addTransactionReject(error));
      dispatch(transactionClearError());
    }
  };

export const deleteTransaction = (id) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  dispatch(removeTransactionLoading());
  try {
    await fetch(
      `https://back-kapusta.herokuapp.com/api/transactions/${id}`,
      options
    ).then((response) => response.json());
    dispatch(removeTransactionResolve(id));
  } catch (error) {
    dispatch(removeTransactionReject(error));
  }
};

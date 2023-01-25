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
      `https://back-kapusta.onrender.com/api/transactions/all`,
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
  ({ date, type, sum, description, category, label }) =>
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
        date: date,
        label: label,
      }),
    };

    dispatch(addTransactionLoading());
    try {
      return await fetch(
        `https://back-kapusta.onrender.com/api/transactions`,
        options
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error(response.statusText);
          }
        })
        .then(({ newTransaction }) =>
          dispatch(addTransactionResolve(newTransaction))
        );
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
      `https://back-kapusta.onrender.com/api/transactions/${id}`,
      options
    ).then((response) => response.json());
    dispatch(removeTransactionResolve(id));
  } catch (error) {
    dispatch(removeTransactionReject(error));
  }
};

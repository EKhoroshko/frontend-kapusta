import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  userRegisterLoading,
  userRegisterResolve,
  userRegisterReject,
  userClearError,
  userLoginLoading,
  userLoginResolve,
  userLoginReject,
  userLogOutLoading,
  userLogOutResolve,
  userLogOutReject,
  updateUserLoading,
  updateUserResolve,
  updateUserReject,
  userBalanceLoading,
  userBalanceResolve,
  userBalanceReject,
} from "../auth/slice";
import { getToken, getUserId } from "./selectors";

const toastAction = {
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const registration =
  ({ name, email, password }) =>
  async (dispatch) => {
    const options = await {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: name,
        email: email,
        password: password,
      }),
    };
    try {
      dispatch(userRegisterLoading());
      const response = await fetch(
        "https://back-kapusta.herokuapp.com/api/auth/users/register",
        options
      ).then((response) => response.json());
      if (response.hasOwnProperty("errors")) {
        return toast.error(
          `Пользователь с адресом электронной почты: ${email} уже существует`,
          toastAction
        );
      } else {
        toast.success(
          `${name}, вы успешно зарегистрировались, для подтверждения мы отправили вам на почту письмо`,
          toastAction
        );
        dispatch(userRegisterResolve(response));
      }
    } catch (error) {
      dispatch(userRegisterReject(error));
      dispatch(userClearError());
    }
  };

export const loginUser =
  ({ email, password }) =>
  async (dispatch) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    };

    dispatch(userLoginLoading());
    try {
      return await fetch(
        "https://back-kapusta.herokuapp.com/api/auth/users/login",
        options
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error(response.statusText);
          }
        })
        .then(({ data }) => {
          dispatch(userLoginResolve(data));
          localStorage.setItem("token", data.token);
          toast.success(
            `Добро пожаловать, ${data.userName}! Мы рады Вас приветствовать`,
            toastAction
          );
        });
    } catch (error) {
      dispatch(userLoginReject(error.statusText));
      dispatch(userClearError());
      return toast.error("Электронная почта или пароль неверный", toastAction);
    }
  };

export const logOut = () => async (dispatch, getState) => {
  const token = getToken(getState());
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  dispatch(userLogOutLoading());
  try {
    const response = await fetch(
      "https://back-kapusta.herokuapp.com/api/auth/users/logout",
      options
    ).then((response) => {
      if (response.ok) {
        return response.statusText;
      } else {
        throw new Error(response.statusText);
      }
    });
    localStorage.removeItem("token");
    dispatch(userLogOutResolve(response));
    toast.success("Спасибо за визит, заходите еще!", toastAction);
  } catch (error) {
    dispatch(userLogOutReject(error.statusText));
    dispatch(userClearError());
  }
};

export const updateUserToken = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    dispatch(updateUserLoading());
    try {
      const user = await fetch(
        "https://back-kapusta.herokuapp.com/api/auth/users/current",
        options
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error(response.statusText);
          }
        })
        .then(({ data }) => ({ ...data, token }));
      dispatch(updateUserResolve(user));
    } catch (error) {
      dispatch(updateUserReject(error.statusText));
      dispatch(userClearError());
    }
  }
};

export const changeBalance = (value) => async (dispatch, getState) => {
  const token = localStorage.getItem("token");
  const id = getUserId(getState());
  const balance = Number(value);
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ balance: balance }),
  };
  dispatch(userBalanceLoading());
  try {
    const newBalance = await fetch(
      `https://back-kapusta.herokuapp.com/api/transactions/${id}`,
      options
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then(({ data }) => ({ ...data }))
      .then(({ result }) => ({ ...result }));
    dispatch(userBalanceResolve(newBalance));
    toast.success(`Ваш баланс: ${balance} грн.`);
  } catch (error) {
    dispatch(userBalanceReject(error.statusText));
    dispatch(userClearError());
  }
};

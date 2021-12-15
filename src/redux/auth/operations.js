import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  userRegister,
  userRegisterResolve,
  userRegisterReject,
  userClearError,
  userLogin,
  userLoginResolve,
  userLoginReject,
  userLogOut,
  userLogOutResolve,
  userLogOutReject,
  updateUser,
  updateUserResolve,
  updateUserReject,
} from "../auth/slice";
import { getToken } from "./selectors";

export const registration =
  ({ email, password }) =>
  async (dispatch) => {
    const options = await {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    };
    try {
      dispatch(userRegister());
      const response = await fetch(
        "https://back-kapusta.herokuapp.com/api/auth/users/register",
        options
      ).then((response) => response.json());
      await console.log(response);
      if (response.hasOwnProperty("error")) {
        return toast.error(response.errors, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.success(
          "Вы успешно зарегистрировались, для подтверждения мы отправили вам письмо",
          {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
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

    dispatch(userLogin());
    try {
      return await fetch(
        "https://back-kapusta.herokuapp.com/api/auth/users/login",
        options
      )
        .then((response) => {
          if (response.ok) {
            console.log(response);
            return response.json();
          } else {
            localStorage.removeItem("token");
            toast.error("error", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        })
        .then(({ data }) => {
          dispatch(userLoginResolve(data));
          localStorage.setItem("token", data.token);
          toast.success("Добро пожаловать!!! Мы вас ждали.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    } catch (error) {
      dispatch(userLoginReject(error));
      dispatch(userClearError());
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
  dispatch(userLogOut());
  try {
    const response = await fetch(
      "https://back-kapusta.herokuapp.com/api/auth/users/logout",
      options
    ).then((response) => response.json());
    localStorage.removeItem("token");
    dispatch(userLogOutResolve(response));
  } catch (error) {
    dispatch(userLogOutReject(error));
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
    dispatch(updateUser());
    try {
      const user = await fetch(
        "https://back-kapusta.herokuapp.com/api/auth/users/current",
        options
      ).then((response) => response.json());
      dispatch(updateUserResolve(user, token));
      console.log(user);
    } catch (error) {
      dispatch(updateUserReject(error));
      dispatch(userClearError());
    }
  }
};

import { toast } from "react-toastify";
import { uploadImg } from "../../firebase/firebase";
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
  getVerifyToken,
  getVerifyTokenReject,
  getVerifyTokenResolve,
  updateAvatarLoading,
  updateAvatarReject,
  updatePassLoading,
  updatePassResolve,
  updatePassReject,
} from "../auth/slice";
import { getToken, getUserId, getVerifyTokenRedax } from "./selectors";
import { getLang } from "../languag/selectors";

const BASE_URL = "https://back-kapusta.onrender.com";

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
  async (dispatch, getState) => {
    const lang = getLang(getState());
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
    dispatch(userRegisterLoading());
    try {
      const response = await fetch(
        `${BASE_URL}/api/auth/users/register`,
        options
      ).then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          if (lang === "ru") {
            switch (response.status) {
              case 409:
                throw new Error(
                  toast.error(
                    `Пользователь с адресом электронной почты: ${email} уже существует`,
                    toastAction
                  )
                );
              default:
                throw new Error(
                  toast.error(
                    "Необходимо правильно заполнить поля регистрации",
                    toastAction
                  )
                );
            }
          } else {
            switch (response.status) {
              case 409:
                throw new Error(
                  toast.error(
                    `User with email address: ${email} already exists`,
                    toastAction
                  )
                );
              default:
                throw new Error(
                  toast.error(
                    "It is necessary to fill in the registration fields correctly",
                    toastAction
                  )
                );
            }
          }
        }
      });
      dispatch(userRegisterResolve(response));
      if (lang === "ru") {
        return toast.success(
          `${name}, вы успешно зарегистрировались, для подтверждения мы отправили вам на почту письмо`,
          toastAction
        );
      } else {
        toast.success(
          `${name}, you have successfully registered, we have sent you a confirmation email`,
          toastAction
        );
      }
    } catch (error) {
      dispatch(userRegisterReject(error.statusText));
      dispatch(userClearError());
    }
  };

export const loginUser =
  ({ email, password }) =>
  async (dispatch, getState) => {
    const lang = getLang(getState());
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    };

    dispatch(userLoginLoading());
    try {
      return await fetch(`${BASE_URL}/api/auth/users/login`, options)
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
          if (lang === "ru") {
            return toast.success(
              `Добро пожаловать, ${data.userName}! Мы рады Вас приветствовать`,
              toastAction
            );
          } else {
            return toast.success(
              `Welcome ${data.userName}! We are happy to greet you`,
              toastAction
            );
          }
        });
    } catch (error) {
      dispatch(userLoginReject(error.statusText));
      if (lang === "ru") {
        return toast.error(
          "Электронная почта или пароль неверный",
          toastAction
        );
      } else {
        toast.error("Email or password is incorrect", toastAction);
      }
      dispatch(userClearError());
    }
  };

export const logOut = () => async (dispatch, getState) => {
  const token = getToken(getState());
  const lang = getLang(getState());
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  dispatch(userLogOutLoading());
  try {
    const response = await fetch(
      `${BASE_URL}/api/auth/users/logout`,
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
    if (lang === "ru") {
      return toast.success("Спасибо за визит, заходите еще!", toastAction);
    } else {
      return toast.success("Thanks for stopping by, come back!", toastAction);
    }
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
      const user = await fetch(`${BASE_URL}/api/auth/users/current`, options)
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
  const lang = getLang(getState());
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
      `${BASE_URL}/api/transactions/${id}`,
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
    if (lang === "ru") {
      return toast.success(`Ваш баланс: ${balance} грн.`);
    } else {
      return toast.success(`Your balance: ${balance} UAH.`);
    }
  } catch (error) {
    dispatch(userBalanceReject(error.statusText));
    dispatch(userClearError());
  }
};

export const veryfication = () => async (dispatch, getState) => {
  const verifyToken = getVerifyTokenRedax(getState());
  const lang = getLang(getState());
  const options = { method: "GET" };
  dispatch(getVerifyToken());
  try {
    const verify = await fetch(
      `${BASE_URL}/api/auth/users/verify/${verifyToken}`,
      options
    ).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response.statusText);
      }
    });
    dispatch(getVerifyTokenResolve(verify));
  } catch (error) {
    dispatch(getVerifyTokenReject(error.message));
    if (lang === "ru") {
      return toast.warning("Вы уже прошли верификацию");
    } else {
      toast.warning("You have already been verified");
    }
    dispatch(userClearError());
  }
};

export const userGoogle = (token) => async (dispatch) => {
  if (token && token.length > 1) {
    localStorage.setItem("token", token);
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    dispatch(updateUserLoading());
    try {
      const user = await fetch(`${BASE_URL}/api/auth/users/current`, options)
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

export const UpdateAvatar = (file, name) => async (dispatch) => {
  dispatch(updateAvatarLoading());
  try {
    await uploadImg(file, name, dispatch);
  } catch (error) {
    dispatch(updateAvatarReject(error.statusText));
    dispatch(userClearError());
  }
};

export const UpdatePass = (value) => async (dispatch, getState) => {
  const token = localStorage.getItem("token");
  const lang = getLang(getState());
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ password: value }),
  };
  dispatch(updatePassLoading());
  try {
    const result = await fetch(
      `${BASE_URL}/api/auth/users/password`,
      options
    ).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response.statusText);
      }
    });
    dispatch(updatePassResolve(result));
    if (lang === "ru") {
      return toast.success(`Ваш пароль изменен`);
    } else {
      return toast.success(`Your password has been changed`);
    }
  } catch (error) {
    dispatch(updatePassReject(error.statusText));
    dispatch(userClearError());
  }
};

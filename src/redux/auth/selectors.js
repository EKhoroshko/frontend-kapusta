export const getUserName = (store) => store.auth.userName;

export const getUserEmail = (store) => store.auth.email;

export const getIsLoggedIn = (store) => store.auth.isLogin;

export const getIsLoading = (store) => store.auth.isLoading;

export const getUserId = (store) => store.auth.id;

export const selectUser = (store) => store.auth.data;

export const getToken = (store) => store.auth.token;

export const getBalance = (store) => store.auth.balance;

export const getAvatar = (store) => store.auth.avatarURL;

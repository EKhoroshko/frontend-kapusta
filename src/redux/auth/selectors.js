export const getUserName = (store) => store.auth.data?.name;

export const getUserEmail = (store) => store.auth.data?.email;

export const getIsLoggedIn = (store) => store.auth.isLogin;

export const getUserId = (store) => store.auth.data?.id;

export const selectUser = (store) => store.auth.data;

export const getToken = (store) => store.auth.token;

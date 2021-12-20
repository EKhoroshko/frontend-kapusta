export const getTransactions = (store) => store.transaction.allTransactions;

export const getNewTransactions = (store) => store.transaction.newTransaction;

export const getLoading = (store) => store.transaction.isLoading;

export const getIdTransaction = (store) => store.transaction.idTransaction;

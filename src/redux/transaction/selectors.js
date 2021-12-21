export const getTransactions = (store) => store.transaction.allTransactions;

export const getNewTransactions = (store) => store.transaction.newTransaction;

export const getLoading = (store) => store.transaction.isLoading;

export const getCurrentPeriod = (store) => store.transaction.currentPeriod;

export const getIdTransaction = (store) => store.transaction.idTransaction;

export const getIDiagramInfo = (store) => store.transaction.diagramma;

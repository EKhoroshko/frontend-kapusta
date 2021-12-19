export const getCosts = (store) =>
  store.transaction.allTransaction
    ? store.transaction.allTransaction.filter(
        (tr) => tr.transactionType === "costs"
      )
    : [];

export const getIncomes = (store) =>
  store.transaction.allTransaction
    ? store.transaction.allTransaction.filter(
        (tr) => tr.transactionType === "incomes"
      )
    : [];

export const getTransactions = (store) => store.transaction.allTransactions;

export const getNewTransactions = (store) => store.transaction.newTransaction;

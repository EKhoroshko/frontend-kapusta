export const getCosts = (store) =>
  store.transaction.allTransaction?.transaction
    ? store.transaction.allTransaction?.transaction.filter(
        (tr) => tr.transactionType === "costs"
      )
    : [];
export const getIncomes = (store) => {
  let cost;
  if (store.transaction.allTransaction?.transaction) {
    cost = store.transaction.allTransaction?.transaction.filter(
      (tr) => tr.transactionType === "incomes"
    );
  }
  return cost;
};
export const getTransactions = (store) =>
  store.transaction.allTransactions?.transaction;

export const getNewTransactions = (store) => store.transaction.newTransaction;

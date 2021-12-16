export const getCosts = (store) =>
  store.transaction.allTransaction
    ? store.transaction.allTransaction.filter(
        (tr) => tr.transactionType === "costs"
      )
    : [];
export const getIncomes = (store) => {
  let cost;
  if (store.transaction.allTransaction) {
    cost = store.transaction.allTransaction.filter(
      (tr) => tr.transactionType === "incomes"
    );
  }
  return cost;
};
export const getBalance = (store) => store.transaction.balance;

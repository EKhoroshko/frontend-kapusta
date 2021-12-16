export const getCosts = (store) =>
  store.transaction.allTransaction.filter(
    (tr) => tr.transactionType === "costs"
  );

export const getIncomes = (store) =>
  store.transaction.allTransaction.filter(
    (tr) => tr.transactionType === "incomes"
  );

export const getBalance = (store) => store.transaction.balance;

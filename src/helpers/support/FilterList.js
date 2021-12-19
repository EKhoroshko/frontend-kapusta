export const filterAll = (arr, type) => {
  switch (type) {
    case "incomes":
      return arr.filter((tr) => tr.transactionType === type);
    case "costs":
      return arr.filter((tr) => tr.transactionType === type);
    default:
      return arr;
  }
};

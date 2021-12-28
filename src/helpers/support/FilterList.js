export const filterAll = (arr, type) => {
  switch (type) {
    case "incomes":
      return arr.filter((tr) => tr.transactionType === type).reverse();
    case "costs":
      return arr.filter((tr) => tr.transactionType === type).reverse();
    default:
      return arr;
  }
};

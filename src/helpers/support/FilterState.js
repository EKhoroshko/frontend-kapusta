const filterAll = (arr, type, id, year) => {
  return arr
    .filter((tr) => tr.transactionType === type)
    .filter((tr) => tr.year === year)
    .filter((tr) => tr.monthString === id)
    .reduce((allprice, tr) => {
      let sum = Number(Object.values(allprice)) + tr.sum;
      const { monthString } = tr;

      return { [monthString]: sum };
    }, 0);
};

const sortMounth = (arr, type, data, currentYear) => {
  const newArr = data.map(({ name }) =>
    filterAll(arr, type, name, currentYear)
  );
  const filterArray = newArr.filter((tr) => Object.keys(tr).length !== 0);
  return filterArray;
};
const filterForSummary = (array, type, date) => {
  const newArray = array
    .filter((tr) => tr.transactionType === type)
    .filter((tr) => tr.year === date.year)
    .filter((tr) => tr.monthString === date.month)
    .reduce((acc, value) => {
      console.log(acc);
      console.log(value);
      let sum = Number(Object.values(acc)) + value.sum;
      const { category } = value;

      return { [category]: sum };
    }, 0);
  return newArray;
  // [{Транспорт : 200UA}]
};

export { sortMounth, filterForSummary };

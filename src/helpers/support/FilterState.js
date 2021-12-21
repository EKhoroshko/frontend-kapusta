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

const findTotalSumForChart = (data, type, date) => {
  return data
    .filter((transaction) => transaction.transactionType === type)
    .filter((tr) => tr.year === date.year)
    .filter((tr) => tr.monthString === date.name)
    .reduce((result, subcategorys) => {
      const subCategory = result.find(
        (item) => item.subCategory === subcategorys.category
      );

      if (!subCategory) {
        result.push({
          subCategory: subcategorys.category,
          sum: subcategorys.sum,
        });
      } else {
        subCategory.sum += subcategorys.sum;
      }
      return result;
    }, []);
};

const filterDescr = (data, type, date, category) => {
  return data
    .filter((transaction) => transaction.transactionType === type)
    .filter((tr) => tr.year === date.year)
    .filter((tr) => tr.monthString === date.name)
    .filter((tr) => tr.category === category)
    .reduce(
      (acc, tr) => (
        // eslint-disable-next-line no-sequences
        (acc[tr.description] = (acc[tr.description] || 0) + tr.sum), acc
      ),
      {}
    );
};

export { sortMounth, findTotalSumForChart, filterDescr };

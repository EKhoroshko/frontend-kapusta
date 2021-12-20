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

  // const result = [];
  // data.map((transaction) => {
  //   const category = result.find(
  //     (item) => item.category === transaction.category,
  //   );
  //   if (!category) {
  //     return result.push({
  //       category: transaction.category,
  //       sum: transaction.sum,
  //     });
  //   } else {
  //     return (category.sum += transaction.sum);
  //   }
  // });
  // return result;
};

export { sortMounth, findTotalSumForChart };

import React from "react";
import { useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";
// eslint-disable-next-line no-unused-vars
import Chart from "chart.js/auto";
import {
  getTransactions,
  getCurrentPeriod,
} from "../../redux/transaction/selectors";
import { selectList } from "../../helpers/Select/SelectList";

import s from "../Chart/Chart.module.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function ChartCategory({ category, type }) {
  const transactions = useSelector(getTransactions);
  const date = useSelector(getCurrentPeriod);

  const findTotalSumForChart = (data) => {
    if (!!category) {
      return data
        .filter((transaction) => transaction.category === category)
        .reduce((result, currentSub) => {
          const subCategory = result.find(
            (item) => item.subCategory === currentSub.subCategory
          );
          if (!subCategory) {
            result.push({
              subCategory: currentSub.subCategory,
              sum: currentSub.sum,
            });
          } else {
            subCategory.sum += currentSub.sum;
          }
          return result;
        }, []);

      // if (type) {
      //   return data
      //     .filter((transaction) => transaction.transactionType === type)
      //     .filter((tr) => tr.year === date.year)
      //     .filter((tr) => tr.monthString === date.name)
      //     .filter((tr) => tr.category === category)
      //     .reduce((result, subcategorys) => {
      //       const subCategory = result.find(
      //         (item) => item.subCategory === subcategorys.description
      //       );
      //       if (!subCategory) {
      //         result.push({
      //           subCategory: subcategorys.category,
      //           sum: subcategorys.sum,
      //         });
      //       } else {
      //         subCategory.sum += subcategorys.sum;
      //       }
      //       return result;
      //     }, []);
    }

    const result = [];
    data.map((transaction) => {
      const category = result.find(
        (item) => item.category === transaction.category
      );
      if (!category) {
        return result.push({
          category: transaction.category,
          sum: transaction.sum,
        });
      } else {
        return (category.sum += transaction.sum);
      }
    });
    return result;
  };

  let map = new Map();

  // const arrMap = (arr, list) => {
  //   return arrMap.forEach(item => {
  //     map.get(list)
  //   });
  // }
  // console.log(arrMap);

  //console.log(findTotalSumForChart(transactions, "incomes"));

  const filteredByType = transactions.filter(
    (transaction) => transaction.type === type
  );
  console.log(filteredByType); // не фільтрує на cost

  const filteredByDate = filteredByType
    .filter((tr) => tr.year === date.year)
    .filter((tr) => tr.monthString === date.name);
  //console.log(filteredByDate)

  const getTransactionByType = (type) => {
    const filteredByType = transactions.filter(
      (transaction) => transaction.type === type
    );
    return filteredByType;
  };
  const findTotalSumByCategory = (type, category) => {
    let totalExpense = 0;
    getTransactionByType(type)
      .filter((tr) => tr.category === category)
      .map((el) => (totalExpense += el.sum));
    return totalExpense;
  };
  console.log(findTotalSumByCategory());

  const sortedSubCategoryTransactions = [
    ...findTotalSumForChart(filteredByDate),
  ].sort((a, b) => b.sum - a.sum);

  const sortedLables = [...sortedSubCategoryTransactions].map((tr) => {
    return tr.subCategory ? tr.subCategory : tr.category;
  });

  //console.log(sortedLables)

  const sortedSum = [...sortedSubCategoryTransactions].map((data) => data.sum);

  const labelName = type === "expense" ? "Расход" : "Доход";

  const getNextColor = (color) => {
    const palitraEl = ["#FF751D", "#FFDAC0", "#fcd7bd"];

    if (!color) {
      return palitraEl[0];
    }

    const colors = palitraEl.findIndex((el) => color === el);

    return palitraEl[colors + 1] ? colors[colors + 1] : palitraEl[0];
  };

  const colorsColumn = (array) => {
    let prev = null;

    return sortedSum.map((item) => {
      const currentColor = getNextColor(prev);

      prev = currentColor;

      return currentColor;
    });
  };

  const data = {
    labels: sortedLables,
    datasets: [
      {
        label: labelName,
        data: sortedSum,
        backgroundColor: colorsColumn(sortedSum),
        borderColor: colorsColumn(sortedSum),
        borderWidth: 1,
        borderRadius: 10,
        barThickness: 400,
        barMargin: 20,
      },
    ],
  };

  const optionsVertical = {
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  //   const optionsHorizontal = {
  //     maintainAspectRatio: false,
  //     indexAxis: "y",
  //     elements: {
  //       bar: {
  //         borderWidth: 1,
  //       },
  //     },
  //     responsive: true,
  //     plugins: {
  //       legend: {
  //         position: "top",
  //       },
  //     },
  //   };

  // const options = {
  //     responsive: true,
  //     plugins: {
  //         legend: {
  //             position: "top",
  //         },
  //     },
  // };

  return (
    <div className={s.chartContainer}>
      <Bar data={data} width={320} height={450} options={optionsVertical} />
    </div>
  );
}

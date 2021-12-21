import React from "react";
import { useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";
import WindowDementions from "../../helpers/WindowDementions";
// eslint-disable-next-line no-unused-vars
import Chart from "chart.js/auto";
import {
  getTransactions,
  getCurrentPeriod,
} from "../../redux/transaction/selectors";
import selectList from "../../helpers/Select/SelectList";

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

export default function ChartCategory({ type, category }) {
  const { width } = WindowDementions();
  const transactions = useSelector(getTransactions);
  const date = useSelector(getCurrentPeriod);

  const filteredByType = transactions.filter(
    (category) => category.type === type
  );
  // console.log(filteredByType); // всі категорії

  const filteredByDate = filteredByType
    .filter((tr) => tr.year === date.year)
    .filter((tr) => tr.monthString === date.name);
  // console.log(filteredByDate)//по місяцю

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

  //console.log(findTotalSumForChart(category, 'income'));

  //let map = new Map();

  // const arrMap = (arr, list) => {
  //   return arrMap.forEach(item => {
  //     map.get(list)
  //   });
  // }
  // console.log(arrMap);

  //console.log(findTotalSumForChart(transactions, "incomes"));

  // const findTotalSumByCategory = (type, category) => {
  //   let totalExpense = 0;
  //   getTransactionByType(type)
  //     .filter((tr) => tr.category === category)
  //     .map((el) => (totalExpense += el.sum));
  //   return totalExpense;
  // };
  //console.log(findTotalSumByCategory());

  const sortedSubCategoryTransactions = [
    ...findTotalSumForChart(filteredByDate),
  ].sort((a, b) => b.sum - a.sum);

  const sortedLables = [...sortedSubCategoryTransactions].map((tr) => {
    return tr.subCategory ? tr.subCategory : tr.category;
  });

  //console.log(sortedLables)

  const sortedSum = [...sortedSubCategoryTransactions].map((data) => data.sum);
  const labelName = type === "costs" ? "Расход" : "Доход";
  console.log(labelName);

  const getNextColor = (color) => {
    const barBackgroundColor = ["#FF751D", "#FFDAC0", "#fcd7bd"];
    if (!color) {
      return barBackgroundColor[0];
    } else {
      return barBackgroundColor[1];
    }
  };
  const colorsColumn = (array) => {
    let prev = null;
    return sortedSum.map((item) => {
      const currentColor = getNextColor(prev);
      prev = currentColor;
      return currentColor;
    });
  };
  console.log(colorsColumn(sortedSum));

  const barThickness = width < 768 ? 15 : 38;

  const dataSets = {
    labels: sortedLables,
    datasets: [
      {
        label: labelName,
        data: sortedSum,
        backgroundColor: colorsColumn(sortedSum),
        borderColor: colorsColumn(sortedSum),
        barThickness: barThickness,
        borderRadius: 10,
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

  const optionsHorizontal = {
    maintainAspectRatio: false,
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 1,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  // const options = {
  //     responsive: true,
  //     plugins: {
  //         legend: {
  //             position: "top",
  //         },
  //     },
  // };
  const height = width < 425 ? 422 : 200;
  const options = width < 425 ? optionsHorizontal : optionsVertical;

  return (
    <div className={s.chartContainer}>
      <Bar data={dataSets} height={height} width={320} options={options} />
    </div>
  );
}

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
//import { Bar } from "react-chartjs-2";
// eslint-disable-next-line no-unused-vars
import Chart from "chart.js/auto";
import {
  getTransactions,
  getCurrentPeriod,
} from "../../redux/transaction/selectors";
import { options } from "../../helpers/Select/SelectList";

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
  const period = useSelector(getCurrentPeriod);

  let arr = [];

  const findTotalSumForChart = (data, type, period, list) => {
    return data
      .filter((transaction) => transaction.transactionType === type)
      .filter((tr) => tr.year === period.year)
      .filter((tr) => tr.monthString === period.name)
      .reduce((setCategory, tr) => {
        const categoryList = data.filter(
          (item) => item.category === tr.category
        );
        arr.push({ ...categoryList });
        return (setCategory = arr);
      }, 0);
  };

  useEffect(() => {
    console.log(findTotalSumForChart(transactions, "costs", period, options));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [period, transactions]);
  /*.reduce((result, subcategorys) => {
    const subCategory = result.find(
      (item) => item.subCategory === subcategorys.subCategory
    );
    if (!subCategory) {
      result.push({
        subCategory: subcategorys.subCategory,
        sum: subcategorys.sum,
      });
    } else {
      subCategory.sum += subcategorys.sum;
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
  return result;*/

  /*const filteredByType = transactions.filter(
    (transaction) => transaction.type === type
  );
   
  const filteredByDate = filteredByType.filter(
    (transaction) =>
      transaction.month === String(month) && transaction.year === String(year)
  );
   
  const sortedSubCategoryTransactions = [
    ...findTotalSumForChart(filteredByDate),
  ].sort((a, b) => b.sum - a.sum);
   
  const sortedLables = [...sortedSubCategoryTransactions].map((tr) => {
    return tr.subCategory ? tr.subCategory : tr.category;
  });
   
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
  };*/

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
      {/* <Bar data={data} width={320} height={450} options={optionsVertical} />*/}
    </div>
  );
}

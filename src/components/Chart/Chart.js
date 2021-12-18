import React from "react";
import { useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";

//import { Chart as ChartJS } from "chart.js/auto";
//import { Chart } from "react-chartjs-2";
//import { getTransactions } from '../../redux/chart-selectors'
import { getTransactions } from "../../redux/transaction/selectors";
import style from "./Chart.module.css";

function Chart({ month, year, category, type }) {
  const transactions = useSelector(getTransactions);

  const filteredByType = transactions.filter(
    (transaction) => transaction.type === type
  );

  const filteredByDate = filteredByType.filter(
    (transaction) =>
      transaction.month === String(month) && transaction.year === String(year)
  );

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

  const sortedSubCategoryTransactions = [
    ...findTotalSumForChart(filteredByDate),
  ].sort((a, b) => b.sum - a.sum);

  const sortedLables = [...sortedSubCategoryTransactions].map((tr) => {
    return tr.subCategory ? tr.subCategory : tr.category;
  });

  const sortedByValue = [...sortedSubCategoryTransactions].map(
    (data) => data.sum
  );

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

    return sortedByValue.map((item) => {
      const currentColor = getNextColor(prev);

      prev = currentColor;

      return currentColor;
    });
  };

  const chartData = {
    labels: sortedLables,

    datasets: [
      {
        label: labelName,
        data: sortedByValue,
        // data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: colorsColumn(sortedByValue),
        //backgroundColor: "rgba(255,99,132,0.2)",
        borderWidth: 1,
        borderRadius: 10,
        barMargin: 20,

        hoverBackgroundColor: "FF751D",
        hoverBorderColor: "rgba(255,99,132,1)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div>
      <Bar
        options={options}
        data={chartData}
        //width={666}
        //height={422}
        margin={{ top: 40, right: 15, bottom: 20, left: 15 }}
        className={style.chartText}
      />
    </div>
  );
}
export default Chart;

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as VectorLeft } from "../../../assets/images/vector-left.svg";
import { ReactComponent as VectorRight } from "../../../assets/images/vector-right.svg";
import periodStyles from "./Period.module.css";
import { useSelector } from "react-redux";
import { getCurrentPeriod } from "../../../redux/transaction/selectors";
import SvodkaMonth from "../../../helpers/SvodkaMonth";
import { changeDate, diagramDataClear } from "../../../redux/transaction/slice";

export default function Period() {
  const dispatch = useDispatch();

  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();
  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);
  const date = useSelector(getCurrentPeriod);

  useEffect(() => {
    const data = SvodkaMonth.find((tr) => tr.id === month);
    const name = data.name;
    dispatch(changeDate({ name, year }));
  }, [month, year, dispatch]);

  const handleNextMonthButtonClick = () => {
    if (month <= 11) {
      setMonth((prev) => (prev += 1));
    } else {
      setMonth(1);
      setYear((prev) => (prev += 1));
    }
  };

  const handlePrevMonthButtonClick = () => {
    if (month <= 1) {
      setMonth(12);
      setYear((prev) => (prev -= 1));
    } else {
      setMonth((prev) => (prev -= 1));
    }
  };

  const clearPrev = () => {
    dispatch(diagramDataClear());
    handlePrevMonthButtonClick();
  };
  const clearnNext = () => {
    dispatch(diagramDataClear());
    handleNextMonthButtonClick();
  };
  return (
    <div className={periodStyles.container}>
      <p className={periodStyles.text}>Текущий период:</p>
      <div className={periodStyles.period}>
        <button
          type="button"
          className={periodStyles.NavButton}
          aria-label="previous"
          onClick={() => clearPrev()}
        >
          <VectorLeft width="7" height="12" />
        </button>
        <p className={periodStyles.CurrentPeriod}>
          {date.name}
          <span>{date.year}</span>
        </p>
        <button
          type="button"
          className={periodStyles.NavButton}
          aria-label="next"
          onClick={() => clearnNext()}
        >
          <VectorRight width="7" height="12" />
        </button>
      </div>
    </div>
  );
}

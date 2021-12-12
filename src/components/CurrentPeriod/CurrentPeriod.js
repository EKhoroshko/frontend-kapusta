import React from "react";
import periodStyles from "./Period.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getMonth, getYear } from "../../redux/current-period/selectors";
// я ще над цим працюю
export default function Period() {
  const dispatch = useDispatch();
  const month = useSelector(getMonth);
  const year = useSelector(getYear);

  const handlePrevMonthButtonClick = () => {
    const date = new Date(year, month - 1);

    this.setState({ date });
  };

  const handleNextMonthButtonClick = () => {
    const date = new Date(year, month + 1);

    this.setState({ date });
  };

  return (
    <div className={periodStyles.container}>
      <p className={periodStyles.text}>Текущий период:</p>
      <button
        type="button"
        className={periodStyles.NavButton}
        aria-label="previous"
        onClick={() => dispatch(handlePrevMonthButtonClick)}
      ></button>

      <p className={periodStyles.CurrentPeriod}>{`${month} ${year}`}</p>

      <button
        type="button"
        className={periodStyles.NavButton}
        aria-label="next"
        onClick={() => dispatch(handleNextMonthButtonClick)}
      ></button>
    </div>
  );
}

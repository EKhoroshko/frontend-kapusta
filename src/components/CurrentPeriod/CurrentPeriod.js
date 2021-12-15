import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getMonth, getYear } from "../../redux/current-period/selectors";
import { ReactComponent as VectorLeft } from "../../assets/images/vector-left.svg";
import { ReactComponent as VectorRight } from "../../assets/images/vector-right.svg";
import monthName from "../../helpers/Current-period/months.json";
import periodStyles from "./Period.module.css";

// я ще над цим працюю
export default function Period() {
  const dispatch = useDispatch();
  const month = useSelector(getMonth);
  const year = useSelector(getYear);

  const [date, setDate] = useState(new Date());

  const getCurrentMonth = new Date().getMonth() + 1;
  const getCurrentYear = new Date().getFullYear();

  const getMonthName = monthName.filter(
    (el) => el.id === String(getCurrentMonth)
  );

  //  const getMonthName = (data) => {
  //    return MONTHS[date.getMonth()];
  //  };

  const handlePrevMonthButtonClick = () => {
    const newDate = new Date(year, month - 1);

    setDate({ newDate });
  };

  const handleNextMonthButtonClick = () => {
    const newDate = new Date(year, month + 1);

    setDate({ newDate });
  };

  return (
    <div className={periodStyles.container}>
      <p className={periodStyles.text}>Текущий период:</p>
      <button
        type="button"
        className={periodStyles.NavButton}
        aria-label="previous"
        onClick={() => dispatch(handlePrevMonthButtonClick)}
      >
        <VectorLeft width="7" height="12" />
      </button>

      <p
        className={periodStyles.CurrentPeriod}
      >{`${getMonthName[0].name}${getCurrentYear}`}</p>

      <button
        type="button"
        className={periodStyles.NavButton}
        aria-label="next"
        onClick={() => dispatch(handleNextMonthButtonClick)}
      >
        <VectorRight width="7" height="12" />
      </button>
    </div>
  );
}

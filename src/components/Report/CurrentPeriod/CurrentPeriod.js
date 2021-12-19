import React, { useState } from "react";
import { useDispatch } from "react-redux";
//import { getMonth, getYear } from "../../../redux/currentPeriod/selectors";
import { ReactComponent as VectorLeft } from "../../../assets/images/vector-left.svg";
import { ReactComponent as VectorRight } from "../../../assets/images/vector-right.svg";
import monthName from "../../../helpers/Current-period/months.json";
import periodStyles from "./Period.module.css";

// я ще над цим працюю
export default function Period() {
  const dispatch = useDispatch();

  //const [date, setDate] = useState("");
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();
  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);
  // const month = useSelector(getMonth);
  // const year = useSelector(getYear);

  const getMonthName = monthName.filter((el) => el.id === String(currentMonth));

  const handleNextMonthButtonClick = () => {
    if (month <= 12) {
      setMonth((prev) => (prev += 1));
    } else {
      setMonth(1);
      setYear((prev) => (prev += 1));
    }
  };

  const handlePrevMonthButtonClick = () => {
    // const newDate = (month - 1, year);
    // setDate({ newDate });
    if (month <= 1) {
      setMonth(12);
      setYear((prev) => (prev -= 1));
    } else {
      setMonth((prev) => (prev -= 1));
    }
  };

  return (
    <div className={periodStyles.container}>
      <p className={periodStyles.text}>Текущий период:</p>
      <div className={periodStyles.period}>
        <button
          type="button"
          className={periodStyles.NavButton}
          aria-label="previous"
          onClick={() => dispatch(handlePrevMonthButtonClick)}
        >
          <VectorLeft width="7" height="12" />
        </button>
        <p className={periodStyles.CurrentPeriod}>
          {`${getMonthName[0].name} ${currentYear}`}
        </p>
        <button
          type="button"
          className={periodStyles.NavButton}
          aria-label="next"
          onClick={() => dispatch(handleNextMonthButtonClick)}
        >
          <VectorRight width="7" height="12" />
        </button>
      </div>
    </div>
  );
}

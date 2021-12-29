import React, { useEffect, useState } from "react";
import { ReactComponent as CalendarIcon } from "../../assets/images/calendar.svg";
import DatePicker from "react-datepicker";
import { dateTransaction } from "../../redux/transaction/slice";
import "react-datepicker/dist/react-datepicker.css";
import css from "./Calendar.module.css";
import { useDispatch } from "react-redux";

function Calendar() {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());
  const currentDate = startDate.toLocaleDateString();

  useEffect(() => {
    dispatch(dateTransaction(currentDate));
  }, [currentDate, dispatch]);

  return (
    <div className={css.flex}>
      <CalendarIcon className={css.date} />
      <DatePicker
        dateFormat="dd/MM/yyyy"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        className={css.red}
      />
    </div>
  );
}

export default Calendar;

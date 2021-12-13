import React, { useState } from "react";
import { ReactComponent as CalendarIcon } from "../../assets/images/calendar.svg";
import css from "./Calendar.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Calendar() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className={css.flex}>
      <CalendarIcon className={css.date} />
      <DatePicker
        dateFormat="dd.MM.yyyy"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        className={css.red}
      />
    </div>
  );
}

export default Calendar;

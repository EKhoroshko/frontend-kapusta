import React, { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import css from "./AddForm.module.css";

function AddForm() {
  const [calendar, setCalendar] = useState(new Date());

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const clearForm = () => {
    console.log("я должна чистить формы");
  };

  return (
    <div>
      <form>
        <div className={css.flex}>
          <p className={css.box}>
            <DatePicker
              dateFormat="dd/MM/yyyy"
              shouldCloseOnSelect={false}
              selected={calendar}
              onChange={(date) => setCalendar(date)}
              //стилизуется только с этим классом !! ВАЖНО !!! Тут все что можно с ним сделать
              // https://reactdatepicker.com/#example-custom-calendar-class-name
              className={css.red}
            />
          </p>
          <input type="text" />
          <Select options={options} className={css.select} />
          <input type="text" />
        </div>
        <ul>
          <li>
            <button type="submit"> ввод</button>
          </li>
          <li>
            <button type="button" onClick={clearForm}>
              {" "}
              очистить
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default AddForm;

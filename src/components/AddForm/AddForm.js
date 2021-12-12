import React, { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ReactComponent as Arrow } from "../../assets/images/arrowLeft.svg";
import List from "../List/List";
import css from "./AddForm.module.css";
import { useHistory } from "react-router-dom";

function AddForm() {
  const history = useHistory();
  const [calendar, setCalendar] = useState(new Date());
  const [select, setSelect] = useState(null);
  const [descriptoin, setDescriptoin] = useState("");
  console.log(select); /// это временно для деплоя при работе можно удалить

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "yellow" : "black",
      backgroundColor: state.isSelected ? "green" : "white",
    }),
    control: (provided) => ({
      ...provided,
      borderRadius: "0px",
      borderBottomRightRadius: "16px",
      border: "2px solid #ffffff",
      backgroundColor: "transparent",
    }),
  };

  const CheckDescription = (e) => {
    setDescriptoin(e.currentTarget.value);
  };

  const clearForm = () => {
    console.log("я должна чистить формы");
  };

  const goBack = () => {
    history.push("/home");
  };

  return (
    <div className={css.wraper}>
      <div className={css.imgBack}>
        <div className={css.conteiner}>
          <button className={css.back} type="button" onClick={goBack}>
            <Arrow className={css.arrow} />
          </button>
          <form className={css.form}>
            <div className={css.flex}>
              <div className={css.box}>
                <DatePicker
                  dateFormat="dd/MM/yyyy"
                  selected={calendar}
                  onChange={(date) => setCalendar(date)}
                  className={css.red}
                />
              </div>
              <input
                type="text"
                className={css.descr}
                placeholder="Описание товара"
                value={descriptoin}
                onChange={CheckDescription}
              />
              <Select
                styles={customStyles}
                options={options}
                className={css.select}
                onChange={(options) => setSelect(options.label)}
              />
              <input type="text" />
            </div>
            <ul>
              <li>
                <button type="submit"> ввод</button>
              </li>
              <li>
                <button type="button" onClick={clearForm}>
                  очистить
                </button>
              </li>
            </ul>
          </form>
        </div>
      </div>
      <List />
    </div>
  );
}

export default AddForm;

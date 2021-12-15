import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Select from "react-select";
import Calendar from "../Calendar/Calendar";
import customStyles from "../../helpers/Select/SelectOption.js";
import options from "../../helpers/Select/SelectList.js";
import { ReactComponent as Calculator } from "../../assets/images/calculator.svg";
import { ReactComponent as Arrow } from "../../assets/images/arrowLeft.svg";
import Button from "../Button/Button";
// import List from "../List/List";
import Svodka from "../Svodka/Svodka";

import css from "./AddForm.module.css";

function AddForm({ getInfo }) {
  const history = useHistory();
  const [select, setSelect] = useState(null);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const writePrice = (e) => {
    e.preventDefault();
    getInfo({ price, description, select });
  };

  const checkPrise = (e) => {
    setPrice(e.currentTarget.value);
  };

  const checkDescription = (e) => {
    setDescription(e.currentTarget.value);
  };

  const clearForm = () => {
    console.log("я должна чистить формы");
    console.log("a раз должна - тогда чисти, будь добра");
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
          <form className={css.form} onSubmit={writePrice}>
            <div className={css.flex}>
              <div className={css.box}>
                <Calendar />
              </div>
              <input
                type="text"
                className={css.descr}
                placeholder="Описание товара"
                value={description}
                onChange={checkDescription}
              />
              <Select
                styles={customStyles}
                options={options}
                className={css.select}
                onChange={(options) => setSelect(options.label)}
              />
              <div className={css.formPrice}>
                <input
                  className={css.inputPrice}
                  type="text"
                  autoComplete="off"
                  placeholder="00.00 UAH"
                  value={price}
                  onChange={checkPrise}
                />
                <button className={css.btnPrice}>
                  <Calculator className={css.calculator} />
                </button>
              </div>
            </div>
            <ul className={css.list}>
              <li className={css.item}>
                <Button type="submit" text="ввод" onSubmit={writePrice} />
              </li>
              <li>
                <Button type="button" text="очистить" onClick={clearForm} />
              </li>
            </ul>
          </form>
        </div>
      </div>
      <div className={css.listTranzaktion}></div>
      <div className={css.position}>
        <Svodka />
      </div>
    </div>
  );
}

export default AddForm;

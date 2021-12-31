import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Select from "react-select";
import Calendar from "../Calendar/Calendar";
import customStyles from "../../helpers/Select/SelectOption.js";
import { options, optionsIncoms } from "../../helpers/Select/SelectList.js";
import { ReactComponent as Calculator } from "../../assets/images/calculator.svg";
import { ReactComponent as Arrow } from "../../assets/images/arrowLeft.svg";
import Button from "../Button/Button";
import Svodka from "../Svodka/Svodka";
import { useTranslation } from "react-i18next";
import css from "./AddForm.module.css";

function AddForm({ onSubmit, type }) {
  const history = useHistory();
  const [select, setSelect] = useState(null);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const { t } = useTranslation();

  const writePrice = (e) => {
    e.preventDefault();
    onSubmit({ price, description, select });
    clearForm();
  };

  const checkPrise = (e) => {
    setPrice(e.currentTarget.value);
  };

  const checkDescription = (e) => {
    setDescription(e.currentTarget.value);
  };

  const clearForm = () => {
    setSelect(null);
    setDescription("");
    setPrice("");
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
              {type && type === "costs" ? (
                <Select
                  styles={customStyles}
                  options={options}
                  className={css.select}
                  placeholder={"Категория товара"}
                  onChange={(options) => setSelect(options.label)}
                />
              ) : (
                <Select
                  styles={customStyles}
                  options={optionsIncoms}
                  className={css.select}
                  placeholder={"Категория товара"}
                  onChange={(optionsIncoms) => setSelect(optionsIncoms.label)}
                />
              )}
              <div className={css.formPrice}>
                <input
                  className={css.inputPrice}
                  type="number"
                  min="1"
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
                <Button
                  type="submit"
                  text={t("btnEnt")}
                  onSubmit={writePrice}
                  active={{ backgroundColor: "#ff751d", color: "white" }}
                />
              </li>
              <li>
                <Button
                  type="button"
                  text={t("btnClear")}
                  onClick={clearForm}
                />
              </li>
            </ul>
          </form>
        </div>
      </div>
      <div className={css.position}>
        <Svodka type={type} />
      </div>
    </div>
  );
}

export default AddForm;

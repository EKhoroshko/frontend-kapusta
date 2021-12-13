import React from "react";
import AddForm from "../AddForm/AddForm";
import List from "../List/List";
import Svodka from "../Svodka/Svodka";
import css from "./Incomes.module.css";

function Incomes() {
  return (
    <div>
      <AddForm />
      <div className={css.list}>
        <List />
        <Svodka/>
      </div>
    </div>
  );
}

export default Incomes;

import React from "react";
import AddForm from "../AddForm/AddForm";
import List from "../List/List";
import css from "./Incomes.module.css";

function Incomes() {
  return (
    <div>
      <AddForm />
      <div className={css.list}>
        <List />
      </div>
    </div>
  );
}

export default Incomes;

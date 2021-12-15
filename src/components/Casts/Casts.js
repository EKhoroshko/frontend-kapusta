import React from "react";
import AddForm from "../AddForm/AddForm";
import List from "../List/List";
import css from "./Casts.module.css";

function Casts() {
  return (
    <div>
      <AddForm />
      <div className={css.list}>
        <List />
      </div>
      Casts
      <AddForm />
      <List />
    </div>
  );
}

export default Casts;

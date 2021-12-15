import React from "react";
import AddForm from "../AddForm/AddForm";
import List from "../List/List";
import css from "./Casts.module.css";
import { useDispatch } from "react-redux";
import { addTransactionCost } from "../../redux/transaction/operations";

function Casts() {
  const dispatch = useDispatch();
  const getInformationFromForm = ({ price, description, select }) => {
    const transaction = {
      sum: price,
      category: select,
      description,
    };
    dispatch(addTransactionCost(transaction, `costs`));
  };
  return (
    <div>
      <AddForm getInfo={getInformationFromForm} />
      <div className={css.list}>
        <List />
      </div>
      {/* Casts */}
      {/* <AddForm />
      <List /> */}
    </div>
  );
}

export default Casts;

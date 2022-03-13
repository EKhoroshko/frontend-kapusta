import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { UpdateAvatar } from "../../redux/auth/operations";
import css from "./AvatarUpload.module.css";

export default function AvatarUpload() {
  const dispatch = useDispatch();
  const [file, setFile] = useState("");
  const date = new Date().getTime();

  const onChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let name = `${date + file.name}`;
    dispatch(UpdateAvatar(file, name));
  };

  return (
    <Fragment>
      <h3 className={css.title}>Сменить аватар</h3>
      <form
        className={css.form}
        encType="multipart/form-data"
        onSubmit={onSubmit}
      >
        <input
          className={css.input}
          type="file"
          name="file"
          id="input"
          onChange={onChange}
        />
        <input className={css.inputUpload} type="submit" value="Загрузить" />
      </form>
    </Fragment>
  );
}

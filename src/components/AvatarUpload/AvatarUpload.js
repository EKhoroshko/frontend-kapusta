import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { UpdateAvatar } from "../../redux/auth/operations";

export default function AvatarUpload() {
  const dispatch = useDispatch();
  const [file, setFile] = useState("");

  const onChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    console.log(formData);

    dispatch(UpdateAvatar(formData));
  };

  return (
    <Fragment>
      <form enctype="multipart/form-data" method="post" onSubmit={onSubmit}>
        <input type="file" name="file" id="input" onChange={onChange} />
        <button type="submit" value="Загрузить" />
      </form>
    </Fragment>
  );
}

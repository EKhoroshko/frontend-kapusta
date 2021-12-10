import React from "react";

function AddForm() {
  return (
    <div>
      <input type="date" />
      <input type="text" />
      <select name="select">
        <option value="value1">Значение 1</option>
        <option value="value2" selected>
          Значение 2
        </option>
        <option value="value3">Значение 3</option>
      </select>
    </div>
  );
}

export default AddForm;

import React from "react";

function AddForm() {
  const clearForm = () => {
    console.log("я должна чистить формы");
  };

  return (
    <div>
      <form>
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
          <input type="text" />
        </div>
        <ul>
          <li>
            <button type="submit"> ввод</button>
          </li>
          <li>
            <button type="button" onClick={clearForm}>
              {" "}
              очистить
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default AddForm;

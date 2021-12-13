import React from "react";
import { useHistory } from "react-router-dom";

import ArrowGoBack from '../../components/ArrowGoBack/ArrowGoBack';

function Summary() {
  const history = useHistory();

  const goHome = () => {
    history.push("/home");
  };

  return (
    <div>
      <div>
      <ArrowGoBack />
        {/* <button type="button" onClick={goHome}>
          <span></span>Вернуться на главную
        </button> */}
        <p> Баланс:</p>
        <p> ТУТ БАЛАНС</p>
        <ul>
          <li>Текущий период:</li>
          <li> arrow + period</li>
        </ul>
      </div>
      <ul>
        <li> Расходы: сумма</li>
        <li> Доходы: сумма </li>
      </ul>
      <h3>Расходы</h3>
      <ul>
        <li>
          <p>сумма с бека</p>
          <span>картинка</span>
          <p>Категория</p>
        </li>
      </ul>
    </div>
  );
}

export default Summary;

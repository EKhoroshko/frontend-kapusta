import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as VectorLeft } from "../../../assets/images/vector-left.svg";
import { ReactComponent as VectorRight } from "../../../assets/images/vector-right.svg";
import { getCurrentPeriod } from "../../../redux/transaction/selectors";
import SvodkaMonth from "../../../helpers/SvodkaMonth";
import { changeDate, diagramDataClear } from "../../../redux/transaction/slice";
import { useTranslation } from "react-i18next";
import { getLang } from "../../../redux/languag/selectors";
import periodStyles from "./Period.module.css";

export default function Period() {
  const dispatch = useDispatch();
  const lang = useSelector(getLang);
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();
  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);
  const date = useSelector(getCurrentPeriod);
  const { t } = useTranslation();

  useEffect(() => {
    const data = SvodkaMonth.find((tr) => tr.id === month);
    const name = data.name;
    const nameEn = data.nameEn;
    dispatch(changeDate({ name, year, nameEn }));
  }, [month, year, dispatch]);

  const handleNextMonthButtonClick = () => {
    if (month <= 11) {
      setMonth((prev) => (prev += 1));
    } else {
      setMonth(1);
      setYear((prev) => (prev += 1));
    }
  };

  const handlePrevMonthButtonClick = () => {
    if (month <= 1) {
      setMonth(12);
      setYear((prev) => (prev -= 1));
    } else {
      setMonth((prev) => (prev -= 1));
    }
  };

  const clearPrev = () => {
    dispatch(diagramDataClear());
    handlePrevMonthButtonClick();
  };
  const clearnNext = () => {
    dispatch(diagramDataClear());
    handleNextMonthButtonClick();
  };
  return (
    <div className={periodStyles.container}>
      <p className={periodStyles.text}>{t("period")}</p>
      <div className={periodStyles.period}>
        <button
          type="button"
          className={periodStyles.NavButton}
          aria-label="previous"
          onClick={() => clearPrev()}
        >
          <VectorLeft width="7" height="12" />
        </button>
        {lang === "ru" ? (
          <p className={periodStyles.CurrentPeriod}>
            {date.name} {date.year}
          </p>
        ) : (
          <p className={periodStyles.CurrentPeriod}>
            {date.nameEn} {date.year}
          </p>
        )}
        <button
          type="button"
          className={periodStyles.NavButton}
          aria-label="next"
          onClick={() => clearnNext()}
        >
          <VectorRight width="7" height="12" />
        </button>
      </div>
    </div>
  );
}

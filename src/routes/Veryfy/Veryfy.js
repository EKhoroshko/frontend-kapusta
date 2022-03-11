import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { sliceToken } from "../../redux/auth/slice";
import { useLocation } from "react-router-dom";
import { veryfication } from "../../redux/auth/operations";
import { getVerify } from "../../redux/auth/selectors";
import { useTranslation } from "react-i18next";
import styled, { keyframes } from "styled-components";
import { bounce, tada } from "react-animations";
import s from "./Veryfy.module.css";

const Bounce = styled.div`
  animation: 2s ${keyframes`${bounce}`} infinite;
`;
const Tada = styled.div`
  animation: 2s ${keyframes`${tada}`};
`;

function Veryfy() {
  const { t } = useTranslation();
  const varify = useSelector(getVerify);
  const dispatch = useDispatch();
  const location = useLocation();
  const str = location.pathname.slice(8);

  useEffect(() => {
    dispatch(sliceToken(str));
  }, [dispatch, str]);

  useEffect(() => {
    dispatch(veryfication());
  }, [dispatch]);

  return (
    <Tada>
      <div className={s.Veryfy}>
        <Bounce>
          {varify ? (
            <h3 className={s.text}>{t("verify.title1")}</h3>
          ) : (
            <h3 className={s.text}>{t("verify.title2")}</h3>
          )}
        </Bounce>
        <Link to="/" className={s.link}>
          {t("verify.link")}
        </Link>
      </div>
    </Tada>
  );
}

export default Veryfy;

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { sliceToken } from "../../redux/auth/slice";
import { useLocation } from "react-router-dom";
import { veryfication } from "../../redux/auth/operations";
// import styled, { keyframes } from 'styled-components';
import { bounce } from "react-animations";
import s from "./Veryfy.module.css";

function Veryfy() {
  const dispatch = useDispatch();
  const location = useLocation();
  const str = location.pathname.slice(1);

  useEffect(() => {
    dispatch(sliceToken(str));
  }, [dispatch, str]);

  useEffect(() => {
    dispatch(veryfication());
  }, [dispatch]);

  // const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;
  return (
    <div className={s.Veryfy}>
      {/* <Bounce> */}
      <h3>Вы успешно прошли верификацию</h3>
      {/* </Bounce> */}
      <Link to={"/"}>Перейти к логинизации</Link>
    </div>
  );
}

export default Veryfy;

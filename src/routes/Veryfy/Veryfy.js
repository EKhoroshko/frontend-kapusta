import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { sliceToken } from "../../redux/auth/slice";
import { useLocation } from "react-router-dom";
import { veryfication } from "../../redux/auth/operations";
import { getVerify } from "../../redux/auth/selectors";

function Veryfy() {
  const varify = useSelector(getVerify);
  const dispatch = useDispatch();
  const location = useLocation();
  const str = location.pathname.slice(1);

  console.log(varify);

  useEffect(() => {
    dispatch(sliceToken(str));
  }, [dispatch, str]);

  useEffect(() => {
    dispatch(veryfication());
  }, [dispatch]);

  return (
    <div>
      {varify ? (
        <h3>Вы успешно прошли верификацию</h3>
      ) : (
        <h3>Мы проверяем ваш email подождите...</h3>
      )}
      <Link to={"/"}>Перейти к логинизации</Link>
    </div>
  );
}

export default Veryfy;

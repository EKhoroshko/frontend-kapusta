import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { sliceToken } from "../../redux/auth/slice";
import { useLocation } from "react-router-dom";
import { veryfication } from "../../redux/auth/operations";

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

  return (
    <div>
      <h3>Вы успешно прошли верификацию</h3>
      <Link to={"/"}>Перейти к логинизации</Link>
    </div>
  );
}

export default Veryfy;

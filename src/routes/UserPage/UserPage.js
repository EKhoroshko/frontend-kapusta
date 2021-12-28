import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button/Button";

const UserPage = () => {
  const history = useHistory();

  const goHome = () => {
    history.push("/home");
  };

  return (
    <div>
      <h3>Hi!! I page User</h3>
      <Button text="Go HOME" onClick={goHome} />
    </div>
  );
};

export default UserPage;

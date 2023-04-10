import React from "react";
import { Container } from "../../styles/midPagesStyle";
import { useNavigate } from "react-router-dom";

function UsernameReset() {
  const navigate = useNavigate();

  const login = () => {
    return navigate("/signin");
  };

  return (
    <Container>
      <img src="/images/Trone logo.svg" alt="" className="logo" />
      <img src="/images/key.svg" alt="" className="display-logo" />
      <h1>Username Reset</h1>
      <p>
        Your username has been successfully reset, click the button below to log
        in.
      </p>
      <form action="">
        <button className="siginbtn" onClick={login}>
          Log In
        </button>
      </form>
    </Container>
  );
}

export default UsernameReset;

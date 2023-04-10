import React, { useState } from "react";
import { Container } from "../../styles/midPagesStyle";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  function confirmed(e) {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:5000/reset-password", {
        email: email,
      })
      .then((response) => {
        console.log(response.data);
        Redirect();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function Redirect() {
    return navigate("/check-email");
  }

  return (
    <Container>
      <img src="/images/Trone logo.svg" alt="" className="logo" />
      <img src="/images/key.svg" alt="" className="display-logo" />
      <h1>Forgot Password?</h1>
      <p>No worries, we’ll send you reset instructions.</p>
      <form action="">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name=""
          id="email"
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="siginbtn" onClick={confirmed}>
          Reset
        </button>
      </form>
    </Container>
  );
}

export default ForgotPassword;

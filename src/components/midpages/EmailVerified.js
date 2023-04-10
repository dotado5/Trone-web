import React, { useEffect, useState } from "react";
import { Container } from "../../styles/midPagesStyle";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";

function EmailVerified() {
  const params = useParams();
  let id = params.id;
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const redirect = () => {
    dispatch(
      login({
        token: id,
      })
    );
    return navigate("/createacc");
  };

  return (
    <Container>
      <img src="/images/Trone logo.svg" alt="" className="logo" />
      <img src="/images/mail.svg" alt="" className="display-logo" />
      <h1>Email Verified</h1>
      <p>Your email address has been successfully verified.</p>
      <div>
        Click <span onClick={redirect}>Here</span> to continue registration.
      </div>
    </Container>
  );
}

export default EmailVerified;

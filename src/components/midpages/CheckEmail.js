import React from "react";
import { Container } from "../../styles/midPagesStyle";

function CheckEmail() {
  return (
    <Container>
      <img src="/images/Trone logo.svg" alt="" className="logo" />
      <img src="/images/mail.svg" alt="" className="display-logo" />
      <h1>Check Your Email</h1>
      <p>We sent a password reset link to Johndoe21@example.com.</p>
      <div>
        Didn’t receive any email ?<span>Resend mail</span>
      </div>
    </Container>
  );
}

export default CheckEmail;

import React from "react";
import { Container } from "../../styles/midPagesStyle";

function EmailCon() {
  return (
    <Container>
      <img src="/images/Trone logo.svg" alt="" className="logo" />
      <img src="/images/mail.svg" alt="" className="display-logo" />
      <h1>Email Confirmation</h1>
      <p>
        An email confirmation link has been sent to Johndoe21@example.com, click
        link to verify email.
      </p>
      <p style={{ marginTop: "-1em" }}>
        The link will expire in<span> 30:00 </span>minutes
      </p>
      <div>
        Didn’t receive any email ?
        <span style={{ cursor: "pointer" }}>Resend mail</span>
      </div>
    </Container>
  );
}

export default EmailCon;

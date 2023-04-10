import React, { useState } from "react";
import { Container, LeftSection, RightSection } from "../../styles/signupStyle";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [userDetails, setUserDetails] = useState({ email: "", password: "" });
  const [visible, setVisible] = useState(false);

  const navigate = useNavigate();

  function SignUp(e) {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:5000/send-verification-email", {
        email: userDetails.email,
        password: userDetails.password,
      })
      .then((response) => {
        console.log(response.data);
        Redirect();
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 424) {
          alert("email already in use");
        }
      });
  }

  function Redirect() {
    return navigate("/confirm-email");
  }

  return (
    <Container>
      <img src="/images/Trone logo.svg" alt="" className="logo" />
      <LeftSection>
        <h1>Create a secure Account </h1>
        <p className="cred">Uncover the secrets of savings and investment</p>
        <form action="">
          <label htmlFor="email"> Email Address</label>
          <input
            type="email"
            name=""
            id="email"
            placeholder="Johndoe21@example.com"
            style={{ marginBottom: "10px" }}
            value={userDetails.email}
            onChange={(e) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name=""
            id="password"
            placeholder="Input Your Unique Password"
            value={userDetails.password}
            onChange={(e) =>
              setUserDetails({ ...userDetails, password: e.target.value })
            }
          />
          <p className="donthaveacc">
            Already have an account ? <span>SignIn</span>
          </p>
          <p className="forgot">
            By clicking <b> SignUp</b> , you already agreed to our
            <span> Terms of Services</span> and <span> Privacy Policy </span>
          </p>
          <button className="siginbtn" onClick={SignUp}>
            Sign Up
          </button>
          <div>
            <div className="circle"></div>
            <p>Minimum of 8 characters</p>
          </div>
          <div>
            <div className="circle"></div>
            <p>One Unique character (!@#$%*+)</p>
          </div>
          <div>
            <div className="circle"></div>
            <p>At least one UPPERCASE character </p>
          </div>
        </form>
      </LeftSection>
      <RightSection>
        <img src="/images/Safe-amico.svg" alt="" />
      </RightSection>
    </Container>
  );
}

export default Signup;

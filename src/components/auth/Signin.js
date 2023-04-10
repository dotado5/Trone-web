import React, { useState } from "react";
import { Container, LeftSection, RightSection } from "../../styles/signinStyle";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [userDetails, setUserDetails] = useState({ email: "", password: "" });
  const [visible, setVisible] = useState(false);

  const navigate = useNavigate();

  const SignIn = (e) => {
    e.preventDefault();

    axios
      .post("http://127.0.0.1:5000/signin", {
        email: userDetails.email,
        password: userDetails.password,
      })
      .then((response) => {
        console.log(response.data);
        window.localStorage.setItem(
          "accesstoken",
          JSON.stringify(response.data.token)
        );

        Redirect();
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 480) {
          alert("incorrect password");
        }
        if (error.response.status === 420) {
          alert("incorrect email or username");
        }
        if (error.response.status === 500) {
          alert("sorry internal error, please try again later");
        }
      });
  };

  const signup = () => {
    return navigate("/signup");
  };

  const Redirect = () => {
    return navigate("/dashboard/home");
  };

  const forgot = () => {
    return navigate("/forgot-password");
  };

  return (
    <Container>
      <img src="/images/Trone logo.svg" alt="" className="logo" />
      <LeftSection>
        <h1>Welcome Back</h1>
        <p className="cred">Enter your credentials to access your account</p>
        <button className="google">
          <img src="/images/google.svg" alt="" />
          <span>Sign in with Google</span>
        </button>
        <div className="or">
          <span className="left-line"></span>
          <p>or</p>
          <span className="right-line"></span>
        </div>
        <form action="">
          <img
            src={`/images/${visible ? "notvisible" : `visible`}.svg`}
            alt=""
            style={{ left: "90%", top: "46%" }}
            onClick={() => setVisible(!visible)}
          />
          <label htmlFor="userid">Email or Username</label>
          <input
            type="text"
            name=""
            id="userid"
            placeholder="Input email address or Username"
            style={{ marginBottom: "10px" }}
            value={userDetails.email}
            onChange={(e) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
          />
          <label htmlFor="password">Password</label>
          <div className="password">
            <input
              type={visible ? "text" : "password"}
              name=""
              id="password"
              placeholder="input password"
              value={userDetails.password}
              onChange={(e) =>
                setUserDetails({ ...userDetails, password: e.target.value })
              }
            />
          </div>
          <p className="forgot" onClick={forgot} style={{ cursor: "pointer" }}>
            Forgot password?
          </p>
          <button className="siginbtn" onClick={SignIn}>
            Sign In
          </button>
          <p className="donthaveacc">
            Don’t have an account ?
            <span onClick={signup} style={{ cursor: "pointer" }}>
              SignUp
            </span>
          </p>
        </form>
      </LeftSection>
      <RightSection>
        <img src="/images/Login-amico.svg" alt="" />
      </RightSection>
    </Container>
  );
}

export default Signin;

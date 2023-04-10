import React, { useState } from "react";
import { Container, LeftSection, RightSection } from "../../styles/signinStyle";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminSignin() {
  const [userDetails, setUserDetails] = useState({ email: "", password: "" });
  const [visible, setVisible] = useState(false);

  const navigate = useNavigate();

  const SignIn = (e) => {
    e.preventDefault();
    console.log(userDetails.password);

    axios
      .post("http://127.0.0.1:5000/admin/login", {
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

  const Redirect = () => {
    return navigate("/admin/home");
  };

  const forgot = () => {
    return navigate("/forgot-password");
  };

  return (
    <Container>
      <LeftSection>
        <img
          src="/images/Trone logo.svg"
          alt=""
          style={{ width: "200px", marginBottom: "1em" }}
        />
        <h1>Welcome Admin</h1>
        <p className="cred">Enter your credentials to access dashboard</p>
        <form action="">
          <img
            src={`/images/${visible ? "notvisible" : `visible`}.svg`}
            alt=""
            style={{ left: "90%", top: "55%" }}
            onClick={() => setVisible(!visible)}
          />

          <label htmlFor="userid">Email</label>
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
            Log In
          </button>
        </form>
      </LeftSection>
      <RightSection>
        <img src="/images/Login-amico.svg" alt="" />
      </RightSection>
    </Container>
  );
}

export default AdminSignin;

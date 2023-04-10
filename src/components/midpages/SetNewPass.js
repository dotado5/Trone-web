import React, { useState } from "react";
import { Container } from "../../styles/midPagesStyle";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function SetNewPass() {
  const params = useParams();
  const id = params.id;
  const [password, setPassword] = useState("");
  const [pass, setPass] = useState("");
  const [capital, setCapital] = useState(false);
  const [special, setSpecial] = useState(false);
  const [length, setLength] = useState(false);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  function passwordChecker(e) {
    setPass(e.target.value);
    let text = e.target.value;

    let uppercase = /[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/;
    const uppercase_true = uppercase.test(text);
    let specialChar = /[!@#$%*+]/;
    const special_true = specialChar.test(text);

    if (uppercase_true) {
      setCapital(true);
    } else {
      setCapital(false);
    }
    if (text.length >= 8) {
      setLength(true);
    } else {
      setLength(false);
    }
    if (special_true) {
      setSpecial(true);
    } else {
      setSpecial(false);
    }
  }

  function upload(e) {
    e.preventDefault();

    if (pass === password) {
      console.log("cool");
    } else {
      alert("passwords do not match");
    }

    if (capital && special && length) {
      axios
        .post("http://127.0.0.1:5000/set-new-password", {
          token: id,
          password: password,
        })
        .then((response) => {
          console.log(response.data);
          Redirect();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  function Redirect() {
    return navigate("/pass-reset");
  }
  return (
    <Container>
      <img src="/images/Trone logo.svg" alt="" className="logo" />
      <img src="/images/key.svg" alt="" className="display-logo" />
      <h1>Set New Password</h1>
      <p>
        Your new password must be different from the previously used password.
      </p>
      <form action="">
        <img
          src={`/images/${visible ? "notvisible" : `visible`}.svg`}
          alt=""
          style={{ left: "90%", top: "73%" }}
          onClick={() => setVisible(!visible)}
        />
        <img
          src={`/images/${visible ? "notvisible" : `visible`}.svg`}
          alt=""
          style={{ left: "90%", top: "18%" }}
          onClick={() => setVisible(!visible)}
        />
        <label htmlFor="pass">Password</label>
        <input
          type={visible ? "text" : "password"}
          name=""
          id="pass"
          placeholder="Input Your Unique Password"
          onChange={passwordChecker}
        />
        <div className="cons">
          <div className={length ? "greencircle" : "circle"}></div>
          <p>Minimum of 8 characters</p>
        </div>
        <div className="cons">
          <div className={special ? "greencircle" : "circle"}></div>
          <p>One Unique character (!@#$%*+)</p>
        </div>
        <div className="cons">
          <div className={capital ? "greencircle" : "circle"}></div>
          <p>At least one UPPERCASE character </p>
        </div>
        <label htmlFor="npass" style={{ paddingTop: "20px" }}>
          Confirm Password
        </label>
        <input
          type={visible ? "text" : "password"}
          name=""
          id="npass"
          placeholder="Confirm Your Unique Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="siginbtn" onClick={upload}>
          Reset Password
        </button>
      </form>
    </Container>
  );
}

export default SetNewPass;

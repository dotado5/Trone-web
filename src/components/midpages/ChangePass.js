import React, { useState } from "react";
import { Container } from "../../styles/midPagesStyle";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ChangePass() {
  const [password, setPassword] = useState("");
  const [capital, setCapital] = useState(false);
  const [special, setSpecial] = useState(false);
  const [length, setLength] = useState(false);
  const [visible, setVisible] = useState(false);
  const [old, setOld] = useState("");
  const [newpass, setNewpass] = useState("");
  const navigate = useNavigate();
  const accesstoken = window.localStorage.getItem("accesstoken");

  function upload(e) {
    e.preventDefault();

    if (newpass === password) {
      console.log("cool");
    } else {
      alert("passwords do not match");
    }

    if (capital && special && length) {
      axios
        .post(
          "http://127.0.0.1:5000/change-password",
          { old_password: old, new_password: password },
          {
            headers: {
              Authorization: `Bearer ${JSON.parse(accesstoken)}`,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          Redirect();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  function passwordChecker(e) {
    setNewpass(e.target.value);
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

  function Redirect() {
    return navigate("/pass-reset");
  }

  return (
    <Container>
      <img src="/images/Trone logo.svg" alt="" className="logo" />
      <img src="/images/key.svg" alt="" className="display-logo" />
      <h1>Change Password?</h1>
      <p>
        Your new password must be different from the previously used password.
      </p>
      <form action="">
        <img
          src={`/images/${visible ? "notvisible" : `visible`}.svg`}
          alt=""
          style={{ left: "90%", top: "78%" }}
          onClick={() => setVisible(!visible)}
        />
        <img
          src={`/images/${visible ? "notvisible" : `visible`}.svg`}
          alt=""
          style={{ left: "90%", top: "35%" }}
          onClick={() => setVisible(!visible)}
        />
        <label htmlFor="oldpass">Old Password</label>
        <input
          type={visible ? "text" : "password"}
          name=""
          id="oldpass"
          placeholder="Input old Password"
          onClick={(e) => setOld(e.target.value)}
        />
        <label htmlFor="npass">New Password</label>
        <input
          type={visible ? "text" : "password"}
          name=""
          id="npass"
          placeholder="Input new Password"
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
        <label htmlFor="pass" style={{ paddingTop: "20px" }}>
          Confirm New Password
        </label>
        <input
          type={visible ? "text" : "password"}
          name=""
          id="pass"
          placeholder="Confirm Your New Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="siginbtn" onClick={upload}>
          Reset Password
        </button>
      </form>
    </Container>
  );
}

export default ChangePass;

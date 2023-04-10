import React, { useState } from "react";
import { Container } from "../../styles/midPagesStyle";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ChangeUsername() {
  const accesstoken = window.localStorage.getItem("accesstoken");
  const [olduser, setOlduser] = useState("");
  const [newuser, setNewuser] = useState("");
  const navigate = useNavigate();

  function upload(e) {
    e.preventDefault();

    if (olduser != newuser) {
      axios
        .post(
          "http://127.0.0.1:5000/change-username",
          { old_username: olduser, new_username: newuser },
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
          if (error.response.status === 470) {
            alert("incorrect username");
          }
        });
    } else {
      alert("old username and new username can not be the same");
    }
  }

  function Redirect() {
    return navigate("/username-reset");
  }

  return (
    <Container>
      <img src="/images/Trone logo.svg" alt="" className="logo" />
      <img src="/images/key.svg" alt="" className="display-logo" />
      <h1>Change Username</h1>
      <p>
        Your new Username must be different from the previously used Username.
      </p>
      <form action="">
        <label htmlFor="olduser">Old username</label>
        <input
          type="text"
          name=""
          id="olduser"
          placeholder="Input old username"
          onChange={(e) => setOlduser(e.target.value)}
        />
        <label htmlFor="newuser" style={{ paddingTop: "20px" }}>
          New username
        </label>
        <input
          type="text"
          name=""
          id="newuser"
          placeholder="Input new username"
          onChange={(e) => setNewuser(e.target.value)}
        />
        <button className="siginbtn" onClick={upload}>
          Confirm Change
        </button>
      </form>
    </Container>
  );
}

export default ChangeUsername;

import React, { useEffect, useState } from "react";
import { Container, Wrap } from "../../styles/createAccFormStyle";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";

function CreateAccForm() {
  const [maxDate, setMaxDate] = useState(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  });
  const [token, setToken] = useState("");
  const [details, setDetails] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    username: "",
    address: "",
    dob: "",
    phonenumber: "",
  });
  const user = useSelector(selectUser);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post("http://127.0.0.1:5000/verify-email/", {
        token: user.token,
      })
      .then((response) => {
        console.log(response.data);
        setToken(JSON.stringify(response.data.token));
        window.localStorage.setItem("accesstoken", token);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function Register(e) {
    e.preventDefault();
    axios
      .post(
        "http://127.0.0.1:5000/register",
        {
          first_name: details.firstname,
          middle_name: details.middlename,
          last_name: details.lastname,
          username: details.username,
          address: details.address,
          dob: details.dob,
          phone_number: details.phonenumber,
        },
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
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

    // console.log(maxDate);
  }

  const Redirect = () => {
    return navigate("/dashboard/home");
  };

  const signin = () => {
    return navigate("/signin");
  };

  return (
    <Container>
      <img src="/images/Trone logo.svg" alt="" className="logo" />
      <Wrap>
        <h1>Create a secure Account </h1>
        <p className="cred">Uncover the secrets of savings and investment</p>
        <form action="">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            placeholder="John"
            value={details.firstname}
            onChange={(e) =>
              setDetails({ ...details, firstname: e.target.value })
            }
          />
          <label htmlFor="mname">Middle Name (optional)</label>
          <input
            type="text"
            id="mname"
            placeholder="Christian"
            value={details.middlename}
            onChange={(e) =>
              setDetails({ ...details, middlename: e.target.value })
            }
          />
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            name=""
            id="lname"
            placeholder="Doe"
            value={details.lastname}
            onChange={(e) =>
              setDetails({ ...details, lastname: e.target.value })
            }
          />
          <label htmlFor="uname">User Name</label>
          <input
            type="text"
            name=""
            id="uname"
            placeholder="JohnDoe5"
            value={details.username}
            onChange={(e) =>
              setDetails({ ...details, username: e.target.value })
            }
          />
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name=""
            id="address"
            placeholder="Input Your Home Address"
            value={details.address}
            onChange={(e) =>
              setDetails({ ...details, address: e.target.value })
            }
          />
          <label htmlFor="dob">Date Of Birth</label>
          <input
            type="date"
            name=""
            id="dob"
            max={maxDate}
            value={details.dob}
            onChange={(e) => setDetails({ ...details, dob: e.target.value })}
          />
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            name=""
            id="phone"
            value={details.phonenumber}
            onChange={(e) =>
              setDetails({ ...details, phonenumber: e.target.value })
            }
          />
          <p className="donthaveacc">
            Already have an account ?{" "}
            <span onClick={signin} style={{ cursor: "pointer" }}>
              Sign In
            </span>
          </p>
          <button className="siginbtn" onClick={Register}>
            Sign Up
          </button>
        </form>
      </Wrap>
    </Container>
  );
}

export default CreateAccForm;

import React, { useState, useEffect } from "react";
import { Container, Details, Wrap } from "../../styles/admin dashboard/ppStyle";
import Sidebar from "./Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PendingPay() {
  const [nextpage, setNextpage] = useState(false);
  const [approved, setApproved] = useState(false);
  const [clients, setClients] = useState([]);
  const [image, setImage] = useState("");
  const [userdetails, setUserdetails] = useState([]);
  const [full, setFull] = useState(false);
  const [username, setUsername] = useState("");
  const [uploads, setUploads] = useState({
    type: "",
    plan: "",
    duration: "",
    amount: 0,
  });
  const accesstoken = window.localStorage.getItem("accesstoken");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/admin/pending-payments", {
        headers: {
          Authorization: `Bearer ${JSON.parse(accesstoken)}`,
        },
      })
      .then((response) => {
        console.log(response);
        setClients(response.data.Pending_Payments);
        if (response.status === 201) {
          alert("no pending payments");
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 401) {
          alert("logged out");
          Redirect();
        }
        if (error.response.status === 422) {
          alert("logged out");
          Redirect();
        }
      });
  }, []);

  const details = (user) => {
    setUsername(user);
    axios
      .post(
        "http://127.0.0.1:5000/admin/pending-payments-details",
        { user: user },
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(accesstoken)}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setUserdetails(response.data.payment_details);
        setImage(response.data.image_encoded);
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 401) {
          window.localStorage.clear();
        }
      });

    setNextpage(true);
  };

  const encodedImage = image;

  function decodeImage(encodedImage) {
    const decodedImage = atob(encodedImage);
    const binaryArray = new Uint8Array(decodedImage.length);

    for (let i = 0; i < decodedImage.length; i++) {
      binaryArray[i] = decodedImage.charCodeAt(i);
    }

    return new Blob([binaryArray], { type: "image/jpeg" });
  }

  function DisplayImage({ encodedImage }) {
    const imageBlob = decodeImage(encodedImage);
    const imageUrl = URL.createObjectURL(imageBlob);

    return (
      <img
        src={imageUrl}
        style={
          full
            ? { position: "absolute", width: "700px", height: "500px" }
            : {
                position: "absolute",
                width: "200px",
                height: "200px",
              }
        }
      />
    );
  }

  function confirm_payment(e) {
    e.preventDefault();
    axios
      .post(
        "http://127.0.0.1:5000/admin/confirm-payment",
        {
          username: username,
          investment_type: uploads.type,
          plan: uploads.plan,
          duration: uploads.duration,
          amount: uploads.amount,
        },
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(accesstoken)}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setApproved(!approved);
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 401) {
          window.localStorage.clear();
        }
      });
  }

  const Redirect = () => {
    return navigate("/admin/signin");
  };

  return (
    <Container>
      <Sidebar />
      <Wrap>
        {full && (
          <div className="full">
            <img
              src="/images/x.svg"
              alt=""
              onClick={() => setFull(false)}
              style={{ cursor: "pointer" }}
            />
            <DisplayImage
              encodedImage={encodedImage}
              style={{ position: "absolute", width: "500px", height: "500px" }}
            />
          </div>
        )}
        {nextpage ? (
          <Details>
            <img
              src="/images/left.svg"
              alt=""
              onClick={() => setNextpage(!nextpage)}
              className="back"
            />
            <h2>{userdetails[0]}</h2>
            <div className="userdetails">
              <div className="user">
                <div className="imagebox" onClick={() => setFull(true)}>
                  {full ? null : <DisplayImage encodedImage={encodedImage} />}
                  <p>Receipt</p>
                </div>
                <div>
                  <p>Investment Type : {userdetails[1]}</p>
                  <p>Plan : {userdetails[2]}</p>
                  <p>Duration : {userdetails[3]} months</p>
                </div>
              </div>
              {approved ? (
                <div className="approved">
                  <img src="/images/tick.svg" alt="" />
                  <p>Payment Approved</p>
                </div>
              ) : (
                <form action="">
                  <select
                    name=""
                    id=""
                    onChange={(e) =>
                      setUploads({ ...uploads, type: e.target.value })
                    }
                  >
                    <option value="" selected disabled>
                      Investment Type
                    </option>
                    <option value="Savings">Savings</option>
                    <option value="Investment">Investment</option>
                  </select>
                  <select
                    name=""
                    id=""
                    onChange={(e) =>
                      setUploads({ ...uploads, plan: e.target.value })
                    }
                  >
                    <option value="" selected disabled>
                      Plan
                    </option>
                    <option value="Basic">Basic</option>
                    <option value="Advanced">Advanced</option>
                    <option value="Premium">Premium</option>
                  </select>
                  <select
                    name=""
                    id=""
                    onChange={(e) =>
                      setUploads({ ...uploads, duration: e.target.value })
                    }
                  >
                    <option value="" selected disabled>
                      Duration
                    </option>
                    <option value="12 Months">12 months</option>
                    <option value="24 Months">24 months</option>
                    <option value="32 Months">36 months</option>
                  </select>
                  <input
                    type="number"
                    placeholder="Amount"
                    onChange={(e) =>
                      setUploads({ ...uploads, amount: e.target.value })
                    }
                  />
                  <button onClick={confirm_payment}>Approve Payment</button>
                </form>
              )}
            </div>
          </Details>
        ) : (
          <div className="home">
            <h1>Pending Payments</h1>
            {clients &&
              clients.map((client, index) => (
                <div key={index}>
                  <p>{client}</p>
                  <img
                    src="/images/message.svg"
                    alt=""
                    onClick={() => details(client)}
                  />
                </div>
              ))}
          </div>
        )}
      </Wrap>
    </Container>
  );
}

export default PendingPay;

import React, { useState } from "react";
import {
  Box,
  Container,
  Wrap,
  ResCont,
} from "../../styles/dashboardStyles/paymentStyle";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

function Payment() {
  const accesstoken = window.localStorage.getItem("accesstoken");
  const [index, setIndex] = useState({
    first: 1,
    second: 0,
    third: 0,
    fourth: 0,
  });
  const [pageNumber, setPageNumber] = useState(1);
  const [file, setFile] = useState(null);
  const [form, setForm] = useState({
    amount: 0,
    type: "",
    plan: "",
    duration: "",
  });
  const [display, setDisplay] = useState(false);

  const navigate = useNavigate();

  const DetailsPage = () => {
    setPageNumber(pageNumber + 1);
    setIndex({ ...index, second: 1 });
  };

  const ReceiptPage = () => {
    setPageNumber(pageNumber + 1);
    setIndex({ ...index, third: 1 });
  };

  // const textBlob = new Blob([text], { type: 'text/plain' });
  // formData.append('text', textBlob);

  const upload = () => {
    setIndex({ ...index, fourth: 1 });

    const formData = new FormData();
    formData.append("screenshot", file);
    formData.append("amount", form.amount);
    formData.append("type", form.type);
    formData.append("plan", form.plan);
    formData.append("duration", form.duration);

    axios
      .post("http://127.0.0.1:5000/deposit", formData, {
        headers: {
          Authorization: `Bearer ${JSON.parse(accesstoken)}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setPageNumber(pageNumber + 1);
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 500) {
          alert("sorry internal server error please try again later");
        }
        if (error.response.status === 401) {
          alert("session timed out, please login again");
          redirect();
        }
      });
  };

  let page = "Payment";
  let img = "card";

  const handleFileInputChange = (event) => {
    setFile(event.target.files[0]);
    setDisplay(true);
  };

  const redirect = () => {
    return navigate("/signin");
  };

  return (
    <>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Trone Web</title>
          <link rel="canonical" href="http://mysite.com/example" />
          <link rel="icon" href="/trone logo.png" />
        </Helmet>
        <Sidebar />
        <Wrap>
          <Box>
            {pageNumber !== 1 ? (
              <img
                src="/images/back.png"
                alt=""
                className="back"
                onClick={() => setPageNumber(pageNumber - 1)}
              />
            ) : null}
            <div className="progress">
              <div className={index.first === 1 ? "green" : "circle"}></div>
              <div className={index.second === 1 ? "green" : "circle"}></div>
              <div className={index.third === 1 ? "green" : "circle"}></div>
              <div className={index.fourth === 1 ? "green" : "circle"}></div>
            </div>

            {pageNumber === 1 ? (
              <form action="">
                <label htmlFor="amount">
                  Enter Amount to Deposit in to wallet
                </label>
                <input
                  type="number"
                  value={form.amount}
                  onChange={(e) => setForm({ ...form, amount: e.target.value })}
                />
                <label htmlFor="">Confirm Type</label>
                <select
                  name=""
                  id=""
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                >
                  Confirm Type
                  <option selected disabled></option>
                  <option value="Savings">Savings</option>
                  <option value="Investment">Investment</option>
                </select>
                <label htmlFor="">Confirm Plan</label>
                <select
                  name=""
                  id=""
                  value={form.plan}
                  onChange={(e) => setForm({ ...form, plan: e.target.value })}
                >
                  <option selected disabled></option>
                  <option value="Basic">Basic</option>
                  <option value="Advanced">Advanced</option>
                  <option value="Premium">Premium</option>
                </select>
                <label htmlFor="">Confirm Duration</label>
                <select
                  name=""
                  id=""
                  value={form.duration}
                  onChange={(e) =>
                    setForm({ ...form, duration: e.target.value })
                  }
                >
                  <option selected disabled></option>
                  <option value="12">12 months</option>
                  <option value="24">24 months</option>
                  <option value="36">36 months</option>
                </select>
                <button onClick={DetailsPage}>CONFIRM</button>
              </form>
            ) : null}

            {pageNumber === 2 ? (
              <div className="deposit">
                <p className="dep">
                  Deposit #{form.amount} to Trone Capital & Investment{" "}
                </p>
                <div className="details">
                  <span>Kuda Bank</span>
                  <h2>2002453352</h2>
                </div>
                <div className="trans">
                  <p>
                    Please wait to confirm your transaction after sending the
                    depositing
                  </p>
                  <button onClick={ReceiptPage}>
                    I already sent the money
                  </button>
                </div>
              </div>
            ) : null}

            {pageNumber === 3 ? (
              <div className="receipt">
                <p>
                  Please upload the receipt of your transfer. Click the box
                  below to upload receipt
                </p>
                <div>
                  <input
                    type="file"
                    name=""
                    id=""
                    onChange={handleFileInputChange}
                    className={display ? "inputClear" : ""}
                  />
                  {display ? null : <img src="/images/cloud.svg" alt="" />}
                </div>
                <button onClick={upload}>UPLOAD</button>
              </div>
            ) : null}

            {pageNumber === 4 ? (
              <div className="success">
                <div>
                  <img src="/images/mark.svg" alt="" />
                </div>
                <p>
                  We will have your deposit confirmed and your wallet will be
                  credited shortly.
                </p>
              </div>
            ) : null}
          </Box>
        </Wrap>
      </Container>

      {/* responsive */}

      <ResCont>
        <NavBar page={page} img={img} />
        <Box>
          {pageNumber !== 1 ? (
            <img
              src="/images/back.png"
              alt=""
              className="back"
              onClick={() => setPageNumber(pageNumber - 1)}
            />
          ) : null}
          <div className="progress">
            <div className={index.first === 1 ? "green" : "circle"}></div>
            <div className={index.second === 1 ? "green" : "circle"}></div>
            <div className={index.third === 1 ? "green" : "circle"}></div>
            <div className={index.fourth === 1 ? "green" : "circle"}></div>
          </div>

          {pageNumber === 1 ? (
            <form action="">
              <label htmlFor="amount">
                Enter Amount to Deposit in to wallet
              </label>
              <input
                type="number"
                value={form.amount}
                onChange={(e) => setForm({ ...form, amount: e.target.value })}
              />
              <label htmlFor="">Confirm Type</label>
              <select
                name=""
                id=""
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
              >
                Confirm Type
                <option selected disabled></option>
                <option value="Savings">Savings</option>
                <option value="Investment">Investment</option>
              </select>
              <label htmlFor="">Confirm Plan</label>
              <select
                name=""
                id=""
                value={form.plan}
                onChange={(e) => setForm({ ...form, plan: e.target.value })}
              >
                <option selected disabled></option>
                <option value="Basic">Basic</option>
                <option value="Advanced">Advanced</option>
                <option value="Premium">Premium</option>
              </select>
              <label
                htmlFor=""
                value={form.duration}
                onChange={(e) => setForm({ ...form, duration: e.target.value })}
              >
                Confirm Duration
              </label>
              <select name="" id="">
                <option selected disabled></option>
                <option value="12">12 months</option>
                <option value="24">24 months</option>
                <option value="36">36 months</option>
              </select>
              <button onClick={DetailsPage}>CONFIRM</button>
            </form>
          ) : null}

          {pageNumber === 2 ? (
            <div className="deposit">
              <p className="dep">
                Deposit #{form.amount} to Trone Capital & Investment
              </p>
              <div className="details">
                <span>Kuda Bank</span>
                <h2>2002453352</h2>
              </div>
              <div className="trans">
                <p>
                  Please wait to confirm your transaction after sending the
                  depositing
                </p>
                <button onClick={ReceiptPage}>I already sent the money</button>
              </div>
            </div>
          ) : null}

          {pageNumber === 3 ? (
            <div className="receipt">
              <p>Please upload the receipt of your transfer.</p>
              <div>
                <input
                  type="file"
                  name=""
                  id=""
                  onChange={handleFileInputChange}
                />
                <img src="/images/cloud.svg" alt="" />
              </div>
              <button onClick={upload}>UPLOAD</button>
            </div>
          ) : null}

          {pageNumber === 4 ? (
            <div className="success">
              <div>
                <img src="/images/mark.svg" alt="" />
              </div>
              <p>
                We will have your deposit confirmed and your wallet will be
                credited shortly.
              </p>
            </div>
          ) : null}
        </Box>
      </ResCont>
    </>
  );
}

export default Payment;

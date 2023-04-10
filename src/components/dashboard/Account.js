import React, { useEffect, useState } from "react";
import {
  Container,
  Wrap,
  ResCont,
} from "../../styles/dashboardStyles/accountStyle";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { Helmet } from "react-helmet";

function Account() {
  const [kyc, setKyc] = useState(false);
  const [file, setFile] = useState(null);
  const [nin, setNin] = useState("");
  const [display, setDisplay] = useState(false);

  const accesstoken = window.localStorage.getItem("accesstoken");

  let page = "Account";
  let img = "account";

  let name = useSelector(selectUser);

  const handleFileInputChange = (event) => {
    setFile(event.target.files[0]);
    setDisplay(true);
  };

  const upload = () => {
    const formData = new FormData();
    formData.append("nin_slip", file);
    formData.append("nin", nin);

    axios
      .post("http://127.0.0.1:5000/kyc-registration", formData, {
        headers: {
          Authorization: `Bearer ${JSON.parse(accesstoken)}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        alert("upload successful");
      })
      .catch((error) => {
        console.log(error);
      });
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
          {kyc ? (
            <div className="kyc">
              <img
                src="/images/close.svg"
                alt=""
                style={{
                  height: "60px",
                  position: "absolute",
                  right: "0",
                  marginRight: "2em",
                  cursor: "pointer",
                }}
                onClick={() => setKyc(false)}
              />
              <div className="form">
                <p>NIN NUMBER</p>
                <input
                  type="text"
                  value={nin}
                  onChange={(e) => setNin(e.target.value)}
                  className="input"
                />
                <p>NIN PICTURE</p>
                <div className="cloud">
                  <input
                    type="file"
                    name=""
                    id=""
                    onChange={handleFileInputChange}
                    className={display ? "inputClear" : ""}
                  />
                  {display ? null : <img src="/images/cloud.svg" alt="" />}
                </div>
                <button onClick={upload}>CONFIRM</button>
              </div>
            </div>
          ) : null}

          <div className="account">
            <h2>My Account</h2>
            <p>{name.username}</p>
          </div>
          <div>
            <h3>ACCOUNT</h3>
            <button className="settings">
              <span>Account Statement</span>
              <img src="/images/next.svg" alt="" />
            </button>
            <button className="settings" onClick={() => setKyc(true)}>
              <span>KYC Registration</span>
              <img src="/images/next.svg" alt="" />
            </button>
          </div>
          <div>
            <h3>SECURITY</h3>
            <Link to={"/change-pass"}>
              <button className="settings">
                <span>Change Password</span>
                <img src="/images/next.svg" alt="" />
              </button>
            </Link>
            <Link to={"/change-username"}>
              <button className="settings">
                <span>Change Username</span>
                <img src="/images/next.svg" alt="" />
              </button>
            </Link>
          </div>
          <div>
            <h3>ABOUT TRONE INVESTMENT</h3>
            <Link>
              <button className="settings">
                <span>Terms & Conditions</span>
                <img src="/images/next.svg" alt="" />
              </button>
            </Link>
            <Link to={"/faq"}>
              <button className="settings">
                <span>FAQs</span>
                <img src="/images/next.svg" alt="" />
              </button>
            </Link>
            <Link>
              <button className="settings">
                <span>Privacy Policy</span>
                <img src="/images/next.svg" alt="" />
              </button>
            </Link>
            <Link>
              <button className="settings">
                <span>Contact Us</span>
                <img src="/images/next.svg" alt="" />
              </button>
            </Link>
          </div>
        </Wrap>
      </Container>

      {/* responsive */}

      <ResCont>
        <NavBar page={page} img={img} />
        {kyc ? (
          <div className="kyc">
            <img
              src="/images/close.svg"
              alt=""
              style={{
                height: "40px",
                position: "absolute",
                right: "0",
                marginRight: "2em",
                cursor: "pointer",
              }}
              onClick={() => setKyc(false)}
            />
            <div className="form">
              <p>NIN NUMBER</p>
              <input
                type="text"
                onChange={(e) => setNin(e.target.value)}
                className="input"
              />
              <p>NIN PICTURE</p>
              <div className="cloud">
                <input
                  type="file"
                  name=""
                  id=""
                  onChange={handleFileInputChange}
                  className={display ? "inputClear" : ""}
                />
                {display ? null : <img src="/images/cloud.svg" alt="" />}
              </div>
              <button onClick={upload}>CONFIRM</button>
            </div>
          </div>
        ) : null}

        <div className="account">
          <h2>My Account</h2>
          <p>Johndoe1</p>
        </div>
        <div>
          <h3>ACCOUNT</h3>
          <button className="settings">
            <span>Account Statement</span>
            <img src="/images/next.svg" alt="" />
          </button>
          <button className="settings" onClick={() => setKyc(true)}>
            <span>KYC Registration</span>
            <img src="/images/next.svg" alt="" />
          </button>
        </div>
        <div>
          <h3>SECURITY</h3>
          <Link to={"/change-pass"}>
            <button className="settings">
              <span>Change Password</span>
              <img src="/images/next.svg" alt="" />
            </button>
          </Link>
          <Link to={"/change-username"}>
            <button className="settings">
              <span>Change Username</span>
              <img src="/images/next.svg" alt="" />
            </button>
          </Link>
        </div>
        <div>
          <h3>ABOUT TRONE INVESTMENT</h3>
          <button className="settings">
            <span>Terms & Conditions</span>
            <img src="/images/next.svg" alt="" />
          </button>
          <button className="settings">
            <span>FAQs</span>
            <img src="/images/next.svg" alt="" />
          </button>
          <button className="settings">
            <span>Privacy Policy</span>
            <img src="/images/next.svg" alt="" />
          </button>
          <button className="settings">
            <span>Contact Us</span>
            <img src="/images/next.svg" alt="" />
          </button>
        </div>
      </ResCont>
    </>
  );
}

export default Account;

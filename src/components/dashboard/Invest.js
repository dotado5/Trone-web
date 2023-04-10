import React, { useState } from "react";
import {
  Container,
  Investment,
  ResCont,
  Savings,
  Wrap,
} from "../../styles/dashboardStyles/investStyle";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Invest() {
  const [next, setNext] = useState(true);

  const navigate = useNavigate();

  let page = "Invest";
  let img = "Wallet";

  const addmoney = () => {
    return navigate("/dashboard/payment");
  };

  return (
    <>
      <Container>
        <Sidebar />
        <Wrap>
          {next ? (
            <Savings>
              <img
                src="/images/right.svg"
                alt=""
                onClick={() => setNext(!next)}
              />
              <h1>SAVINGS</h1>
              <div className="plans">
                <div className="plansgreen">
                  <p>BASIC PLAN</p>
                  <span className="price">NGN10,000 - 20,000</span>
                  <span>ROI: 15% Annually</span>
                  <span style={{ marginTop: "2.7em" }}>
                    Deposit is FLEXIBLE. Deposit can be Monthly, every 3 Month,
                    every 6 Months or once every Year.
                  </span>
                  <button onClick={addmoney}>DEPOSIT</button>
                </div>
                <div className="plansblue">
                  <p>ADVANCE PLAN</p>
                  <span className="price">NGN21,000 - 50,000</span>
                  <span>ROI: 20% Annually</span>
                  <span style={{ marginTop: "2.7em" }}>
                    Deposit is FLEXIBLE. Deposit can be Monthly, every 3 Month,
                    every 6 Months or once every Year.
                  </span>
                  <button onClick={addmoney}>DEPOSIT</button>
                </div>
                <div className="plansgreen">
                  <p>PREMIUM PLAN</p>
                  <span>NGN51,000 Upward</span>
                  <span>ROI: 25% Annually</span>
                  <span style={{ marginTop: "2.7em" }}>
                    Deposit is FLEXIBLE. Deposit can be Monthly, every 3 Month,
                    every 6 Months or once every Year.
                  </span>
                  <button onClick={addmoney}>DEPOSIT</button>
                </div>
              </div>
              <div className="progress">
                <div
                  className={next ? "green" : "white"}
                  onClick={() => setNext(!next)}
                ></div>
                <div
                  className={next ? "white" : "green"}
                  onClick={() => setNext(!next)}
                ></div>
              </div>
            </Savings>
          ) : (
            <Investment>
              <img
                src="/images/left.svg"
                alt=""
                onClick={() => setNext(!next)}
              />
              <h1>INVEST</h1>
              <div className="plans">
                <div className="plansblue">
                  <p>BASIC PLAN</p>
                  <span className="price">NGN10,000 - 20,000</span>
                  <span>ROI: 15% Annually</span>
                  <span style={{ marginTop: "2.7em" }}>
                    Deposit is not FLEXIBLE. Deposit can only be made once every
                    twelve month
                  </span>
                  <button onClick={addmoney}>DEPOSIT</button>
                </div>
                <div className="plansgreen">
                  <p>ADVANCE PLAN</p>
                  <span>NGN21,000 - 50,000</span>
                  <span>ROI: 20% Annually</span>
                  <span style={{ marginTop: "2.7em" }}>
                    Deposit is not FLEXIBLE. Deposit can only be made once every
                    twelve month
                  </span>
                  <button onClick={addmoney}>DEPOSIT</button>
                </div>
                <div className="plansblue">
                  <p>PREMIUM PLAN</p>
                  <span className="price">NGN51,000 Upward</span>
                  <span>ROI: 25% Annually</span>
                  <span style={{ marginTop: "2.7em" }}>
                    Deposit is not FLEXIBLE. Deposit can only be made once every
                    twelve month
                  </span>
                  <button onClick={addmoney}>DEPOSIT</button>
                </div>
              </div>
              <div className="progress">
                <div
                  className={next ? "green" : "white"}
                  onClick={() => setNext(!next)}
                ></div>
                <div
                  className={next ? "white" : "green"}
                  onClick={() => setNext(!next)}
                ></div>
              </div>
            </Investment>
          )}
        </Wrap>
      </Container>

      {/* responsive */}

      <ResCont>
        <NavBar page={page} img={img} />
        {next ? (
          <Savings>
            <img
              src="/images/right.svg"
              alt=""
              onClick={() => setNext(!next)}
              className="next"
            />
            <h1>SAVINGS</h1>
            <div className="plans">
              <div className="plansgreen">
                <p>BASIC PLAN</p>
                <span className="price">NGN10,000 - 20,000</span>
                <span>ROI: 15% Annually</span>
                <span style={{ marginTop: "1.5em" }}>
                  Deposit is FLEXIBLE. Deposit can be Monthly, every 3 Month,
                  every 6 Months or once every Year.
                </span>
                <button onClick={addmoney}>DEPOSIT</button>
              </div>
              <div className="plansblue">
                <p>ADVANCE PLAN</p>
                <span className="price">NGN21,000 - 50,000</span>
                <span>ROI: 20% Annually</span>
                <span style={{ marginTop: "2.7em" }}>
                  Deposit is FLEXIBLE. Deposit can be Monthly, every 3 Month,
                  every 6 Months or once every Year.
                </span>
                <button onClick={addmoney}>DEPOSIT</button>
              </div>
              <div className="plansgreen">
                <p>PREMIUM PLAN</p>
                <span>NGN51,000 Upward</span>
                <span>ROI: 25% Annually</span>
                <span style={{ marginTop: "2.7em" }}>
                  Deposit is FLEXIBLE. Deposit can be Monthly, every 3 Month,
                  every 6 Months or once every Year.
                </span>
                <button onClick={addmoney}>DEPOSIT</button>
              </div>
            </div>
            <div className="progress">
              <div
                className={next ? "green" : "white"}
                onClick={() => setNext(!next)}
              ></div>
              <div
                className={next ? "white" : "green"}
                onClick={() => setNext(!next)}
              ></div>
            </div>
          </Savings>
        ) : (
          <Investment>
            <img
              src="/images/left.svg"
              alt=""
              onClick={() => setNext(!next)}
              className="prev"
            />
            <h1>INVEST</h1>
            <div className="plans">
              <div className="plansblue">
                <p>BASIC PLAN</p>
                <span className="price">NGN10,000 - 20,000</span>
                <span>ROI: 15% Annually</span>
                <span style={{ marginTop: "2.7em" }}>
                  Deposit is not FLEXIBLE. Deposit can only be made once every
                  twelve month
                </span>
                <button onClick={addmoney}>DEPOSIT</button>
              </div>
              <div className="plansgreen">
                <p>ADVANCE PLAN</p>
                <span>NGN21,000 - 50,000</span>
                <span>ROI: 20% Annually</span>
                <span style={{ marginTop: "2.7em" }}>
                  Deposit is not FLEXIBLE. Deposit can only be made once every
                  twelve month
                </span>
                <button onClick={addmoney}>DEPOSIT</button>
              </div>
              <div className="plansblue">
                <p>PREMIUM PLAN</p>
                <span className="price">NGN51,000 Upward</span>
                <span>ROI: 25% Annually</span>
                <span style={{ marginTop: "2.7em" }}>
                  Deposit is not FLEXIBLE. Deposit can only be made once every
                  twelve month
                </span>
                <button onClick={addmoney}>DEPOSIT</button>
              </div>
            </div>
            <div className="progress">
              <div
                className={next ? "green" : "white"}
                onClick={() => setNext(!next)}
              ></div>
              <div
                className={next ? "white" : "green"}
                onClick={() => setNext(!next)}
              ></div>
            </div>
          </Investment>
        )}
      </ResCont>
    </>
  );
}

export default Invest;

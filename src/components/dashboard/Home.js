import React, { useEffect, useState } from "react";
import {
  Container,
  ResCont,
  Wrap,
} from "../../styles/dashboardStyles/homeStyle";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import { Helmet } from "react-helmet";

function Home() {
  let page = "Home";
  let img = "home";
  const [next, setNext] = useState(true);
  const [balances, setBalances] = useState({ savings: 0.0, investment: 0.0 });
  const [percentages, setPercentages] = useState({
    savings: 0.0,
    investment: 0.0,
  });
  const [name, setName] = useState("");
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();

  const accesstoken = window.localStorage.getItem("accesstoken");

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/dashboard", {
        headers: {
          Authorization: `Bearer ${JSON.parse(accesstoken)}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setBalances({
          ...balances,
          investment: response.data.investment_balance,
          savings: response.data.savings_balance,
        });

        setPercentages({
          ...percentages,
          investment: response.data.investment_percent,
          savings: response.data.savings_percent,
        });
        setHistory(response.data.Transaction_history);
        setName(response.data.first_name);
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 401) {
          alert("logged out");
          Redirect();
        }
      });
  }, []);

  const addmoney = () => {
    return navigate("/dashboard/invest");
  };

  const Redirect = () => {
    return navigate("/signin");
  };

  dispatch(
    login({
      username: name,
    })
  );

  return (
    <>
      <Container style={{ height: "calc(100vh + 5.5em)" }}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Trone Web</title>
          <link rel="canonical" href="http://mysite.com/example" />
          <link rel="icon" href="/trone logo.png" />
        </Helmet>
        <Sidebar />
        <Wrap>
          <h1>Good Day, {name}</h1>
          <div className="boxes">
            <div className="box">
              <span className="balancetype">Investment Balance</span>
              <p>{balances.investment}</p>
              <span className="percent">
                <img src="/images/Vector.svg" alt="" /> {percentages.investment}
                % Gained in 1 month
              </span>
              <button className="siginbtn" onClick={addmoney}>
                ADD MONEY
              </button>
            </div>
            <div className="box">
              <span className="balancetype">Savings Balance</span>
              <p>{balances.savings}</p>
              <span className="percent">
                <img src="/images/Vector.svg" alt="" /> {percentages.savings}%
                Gained in 1 month
              </span>
              <button className="siginbtn" onClick={addmoney}>
                ADD MONEY
              </button>
            </div>
          </div>
          <div className="recent">
            <h3>TRANSACTION HISTORY</h3>
            <div className="activities">
              {history.map((his, index) => (
                <>
                  <div>
                    <img src="/images/Group.svg" alt="" />
                    <p className="date">
                      {his[1]} <span>{his[0]} </span>
                    </p>
                  </div>
                  <p>#{his[2]} </p>
                </>
              ))}
            </div>
          </div>
        </Wrap>
      </Container>

      {/* responsive side */}

      <ResCont>
        <NavBar page={page} img={img} />
        <div className="top">
          <h1>Good Day, Dotado</h1>
          <div className="boxes">
            {next ? (
              <div className="box">
                <span className="balancetype">Investment Balance</span>
                <p>{balances.investment}</p>
                <span className="percent">
                  <img src="/images/Vector.svg" alt="" />
                  {percentages.investment}% Gained in 1 month
                </span>
                <button className="siginbtn" onClick={addmoney}>
                  ADD MONEY
                </button>
              </div>
            ) : (
              <div className="box">
                <span className="balancetype">Savings Balance</span>
                <p>{balances.savings}</p>
                <span className="percent">
                  <img src="/images/Vector.svg" alt="" /> {percentages.savings}%
                  Gained in 1 month
                </span>
                <button className="siginbtn" onClick={addmoney}>
                  ADD MONEY
                </button>
              </div>
            )}
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
        </div>
        <div className="recent">
          <h3>RECENT ACTIVITIES</h3>
          <div className="activities">
            {history.map((his, index) => (
              <>
                <div>
                  <img src="/images/Group.svg" alt="" />
                  <p className="date">
                    {his[1]} <span>{his[0]} </span>
                  </p>
                </div>
                <p>#{his[2]} </p>
              </>
            ))}
          </div>
        </div>
      </ResCont>
    </>
  );
}

export default Home;

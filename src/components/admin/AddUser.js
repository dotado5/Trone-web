import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Wrap } from "../../styles/admin dashboard/uaStyles";
import Sidebar from "./Sidebar";
import { IoIosArrowDown } from "react-icons/io";
import axios from "axios";

function AddUser() {
  const [type, setType] = useState(false);
  const [flip, setFlip] = useState(false);
  const [maturity, setMaturity] = useState(false);
  const [due, setDue] = useState(false);
  const [userDetails, setUserDetails] = useState({
    firstname: "",
    username: "",
    middlename: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    dob: "",
    password: "",
  });
  const [investment, setInvestment] = useState({
    plan: "0",
    amount: 0,
    balance: 0,
    duration: "0",
    maturity_date: "",
  });
  const [savings, setSavings] = useState({
    plan: "0",
    amount: 0,
    balance: 0,
    duration: "0",
    next_due_date: "",
    maturity_date: "",
    violation: 0,
    count: 0,
  });

  const accesstoken = window.localStorage.getItem("accesstoken");

  function Confirmed(e) {
    e.preventDefault();

    axios
      .post(
        "http://127.0.0.1:5000/admin/add-customer",
        {
          first_name: userDetails.firstname,
          middle_name: userDetails.middlename,
          last_name: userDetails.lastname,
          email: userDetails.email,
          username: userDetails.username,
          address: userDetails.address,
          dob: userDetails.dob,
          phone_number: userDetails.phone,
          password: userDetails.password,
          savings_plan: savings.plan,
          savings_amount: savings.amount,
          savings_balance: savings.amount,
          savings_duration: savings.duration,
          savings_next_due_date: savings.next_due_date,
          savings_maturity: savings.maturity_date,
          savings_violations: savings.violation,
          savings_count: savings.count,
          investment_plan: investment.plan,
          investment_balance: investment.balance,
          investment_duration: investment.duration,
          investment_maturity: investment.maturity_date,
        },
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(accesstoken)}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        alert("user successfully added");
        back();
      })
      .catch((error) => {
        console.log(error);
        // if (error.response.status === 401) {
        //   window.localStorage.clear();
        // }
      });
  }

  const navigate = useNavigate();
  let white = true;

  const back = () => {
    return navigate("/admin/account");
  };

  return (
    <Container style={flip ? { height: "185vh" } : {}}>
      <Sidebar white={white} />
      <Wrap style={flip ? { height: "171.2vh" } : { height: "86vh" }}>
        <div className="form">
          <img
            src="/images/left.svg"
            alt=""
            onClick={back}
            style={{ cursor: "pointer" }}
          />
          <h1>Add User</h1>
          <div className="topform">
            <form action="">
              <input
                type="text"
                placeholder="First Name"
                value={userDetails.firstname}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, firstname: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="User Name"
                value={userDetails.username}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, username: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Address"
                value={userDetails.address}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, address: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Phone Number"
                value={userDetails.phone}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, phone: e.target.value })
                }
              />
            </form>
            <form action="">
              <input
                type="text"
                placeholder="Middle Name"
                value={userDetails.middlename}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, middlename: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Last Name"
                value={userDetails.lastname}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, lastname: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Email"
                value={userDetails.email}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, email: e.target.value })
                }
              />
              <input
                type={type ? "date" : "text"}
                placeholder="Date Of Birth"
                onFocus={() => setType(true)}
                value={userDetails.dob}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, dob: e.target.value })
                }
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Password"
                value={userDetails.password}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, password: e.target.value })
                }
              />
            </form>
            <div
              className="type"
              onClick={() => setFlip(!flip)}
              style={{ left: "1em", top: "80%" }}
            >
              <p> Investment Type</p>
              <IoIosArrowDown
                className={flip ? "flip" : ""}
                style={{ transition: "0.3s ease" }}
              />
            </div>
          </div>
          {flip ? (
            <div className="bottomform" style={{ marginTop: "5em" }}>
              <div>
                <h2>Savings</h2>
                <form action="">
                  <select
                    name=""
                    id=""
                    value={savings.plan}
                    onChange={(e) =>
                      setSavings({ ...savings, plan: e.target.value })
                    }
                  >
                    <option value="0" selected>
                      Plan
                    </option>
                    <option value="Basic">Basic</option>
                    <option value="Advanced">Advanced</option>
                    <option value="Premium">Premium</option>
                  </select>
                  <input
                    type="number"
                    placeholder="Amount"
                    value={savings.amount}
                    onChange={(e) =>
                      setSavings({ ...savings, amount: e.target.value })
                    }
                  />
                  <input
                    type="number"
                    placeholder="Balance"
                    value={savings.balance}
                    onChange={(e) =>
                      setSavings({ ...savings, balance: e.target.value })
                    }
                  />
                  <select
                    name=""
                    id=""
                    value={savings.duration}
                    onChange={(e) =>
                      setSavings({ ...savings, duration: e.target.value })
                    }
                  >
                    <option value="0" selected>
                      Duration
                    </option>
                    <option value="12">12 Months</option>
                    <option value="24">24 Months</option>
                    <option value="36">36 Months</option>
                  </select>
                  <input
                    type={due ? "date" : "text"}
                    placeholder="Next Due Date"
                    onFocus={() => setDue(!due)}
                    value={savings.next_due_date}
                    onChange={(e) =>
                      setSavings({ ...savings, next_due_date: e.target.value })
                    }
                  />
                  <input
                    type={maturity ? "date" : "text"}
                    placeholder="Maturity Date"
                    onFocus={() => setMaturity(!maturity)}
                    value={savings.maturity_date}
                    onChange={(e) =>
                      setSavings({
                        ...savings,
                        maturity_date: e.target.value,
                      })
                    }
                  />
                  <input
                    type="number"
                    placeholder="Violations"
                    value={savings.violation}
                    onChange={(e) =>
                      setSavings({ ...savings, violation: e.target.value })
                    }
                  />
                  <input
                    type="number"
                    placeholder="count"
                    value={savings.count}
                    onChange={(e) =>
                      setSavings({ ...savings, count: e.target.value })
                    }
                  />
                </form>
              </div>
              <div>
                <h2>Investment</h2>
                <form action="">
                  <select
                    name=""
                    id=""
                    value={investment.plan}
                    onChange={(e) =>
                      setInvestment({ ...investment, plan: e.target.value })
                    }
                  >
                    <option value="" selected disabled>
                      Plan
                    </option>
                    <option value="Basic">Basic</option>
                    <option value="Advanced">Advanced</option>
                    <option value="Premium">Premium</option>
                  </select>
                  <input
                    type="number"
                    placeholder="Amount"
                    value={investment.amount}
                    onChange={(e) =>
                      setInvestment({ ...investment, amount: e.target.value })
                    }
                  />
                  <input
                    type="number"
                    placeholder="Balance"
                    value={investment.balance}
                    onChange={(e) =>
                      setInvestment({ ...investment, balance: e.target.value })
                    }
                  />
                  <select
                    name=""
                    id=""
                    value={investment.duration}
                    onChange={(e) =>
                      setInvestment({ ...investment, duration: e.target.value })
                    }
                  >
                    <option value="0" selected>
                      Duration
                    </option>
                    <option value="12">12 Months</option>
                    <option value="24">24 Months</option>
                    <option value="36">36 Months</option>
                  </select>
                  <input
                    type={maturity ? "date" : "text"}
                    placeholder="Maturity Date"
                    onFocus={() => setMaturity(!maturity)}
                    value={investment.maturity_date}
                    onChange={(e) =>
                      setInvestment({
                        ...investment,
                        maturity_date: e.target.value,
                      })
                    }
                  />
                </form>
              </div>
            </div>
          ) : null}
          <button style={flip ? {} : { marginTop: "5em" }} onClick={Confirmed}>
            Confirm Edit
          </button>
        </div>
      </Wrap>
    </Container>
  );
}

export default AddUser;

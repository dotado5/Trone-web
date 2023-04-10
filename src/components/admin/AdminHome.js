import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Container, Wrap } from "../../styles/admin dashboard/homeStyle";
import Sidebar from "./Sidebar";
import axios from "axios";

ChartJS.register(ArcElement, Tooltip, Legend);
function AdminHome() {
  const accesstoken = window.localStorage.getItem("accesstoken");
  const [newUsers, setNewUsers] = useState({
    savings: 0,
    investment: 0,
    all: 0,
  });
  const [allUser, setAllUser] = useState({ savings: 0, investment: 0, all: 0 });

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/admin/admin-home", {
        headers: {
          Authorization: `Bearer ${JSON.parse(accesstoken)}`,
        },
      })

      .then((response) => {
        console.log(response.data);
        setNewUsers({
          ...newUsers,
          savings: response.data.no_of_new_users_savings,
          investment: response.data.no_of_new_users_investment,
          all: response.data.new_users,
        });

        setAllUser({
          ...allUser,
          savings: response.data.no_of_savings,
          investment: response.data.no_of_investment,
          all: response.data.total_number,
        });
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 480) {
          alert("incorrect password");
        }
        if (error.response.status === 420) {
          alert("incorrect email or username");
        }
        // if (error.response.status === 500) {
        //   alert("sorry internal error, please try again later");
        // }
      });

    console.log(newUsers, allUser);
  }, []);

  let new_savings = newUsers.savings;
  let new_investment = newUsers.investment;
  let savings = allUser.savings;
  let investment = allUser.investment;

  const data = {
    datasets: [
      {
        data: [new_savings, new_investment],
        backgroundColor: ["#3C2FD1", "#EA6565"],
        hoverBackgroundColor: ["#3C2FD1", "#EA6565"],
      },
    ],
  };

  const data2 = {
    datasets: [
      {
        data: [savings, investment],
        backgroundColor: ["#3C2FD1", "#EA6565"],
        hoverBackgroundColor: ["#3C2FD1", "#EA6565"],
      },
    ],
  };

  return (
    <Container>
      <Sidebar />
      <Wrap>
        <div className="home">
          <h1>Good Day, Admin</h1>
          <div className="charts">
            <div>
              <p>
                New users for the month : <span>{newUsers.all}</span>
              </p>
              <div className="pie">
                <Pie data={data} />
              </div>
            </div>
            <div>
              <p>
                Total Number of Clients : <span>{allUser.all}</span>
              </p>
              <div className="pie">
                <Pie data={data2} />
              </div>
            </div>
          </div>
          <div className="des">
            <div>
              <div className="blue"></div>
              <img src="/images/black_arrow.svg" alt="" />
              <p>Savings</p>
            </div>
            <div>
              <div className="red"></div>
              <img src="/images/black_arrow.svg" alt="" />
              <p>Investment</p>
            </div>
          </div>
        </div>
      </Wrap>
    </Container>
  );
}

export default AdminHome;

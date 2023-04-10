import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Wrap } from "../../styles/admin dashboard/accountStyle";
import Sidebar from "./Sidebar";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";

function AdminAccount() {
  const [nextpage, setNextpage] = useState(false);
  const [next, setNext] = useState(true);
  const [users, setUsers] = useState([]);
  const [userdetails, setUserdetails] = useState([]);
  const [username, setUsername] = useState("");
  const accesstoken = window.localStorage.getItem("accesstoken");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/admin/customers", {
        headers: {
          Authorization: `Bearer ${JSON.parse(accesstoken)}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setUsers(response.data.list_of_users);
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

  function userDetail(user) {
    console.log(user);
    setUsername(user);
    axios
      .post(
        "http://127.0.0.1:5000/admin/customer",
        { username: user },
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(accesstoken)}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setUserdetails(response.data.user_details);
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 401) {
          window.localStorage.clear();
        }
      });

    setNextpage(!nextpage);
  }

  const editUser = (user) => {
    dispatch(
      login({
        username: user,
        firstname: userdetails[0],
        lastname: userdetails[1],
        email: userdetails[2],
        savings_balance: userdetails[8],
        violation: userdetails[11],
        count: userdetails[12],
        investment_balance: userdetails[15],
        investment_duration: userdetails[13],
        phone: userdetails[16],
      })
    );

    return navigate("/admin/edituser");
  };

  const addUser = () => {
    return navigate("/admin/adduser");
  };

  const Redirect = () => {
    return navigate("/admin/signin");
  };

  return (
    <Container>
      <Sidebar />
      <Wrap>
        {nextpage ? (
          <div className="details">
            {next ? (
              <div className="savings">
                <img
                  src="/images/right.svg"
                  alt=""
                  onClick={() => setNext(!next)}
                  style={{ cursor: "pointer" }}
                />
                <button onClick={() => editUser(username)}>Edit User</button>
                <div>
                  <h1>SAVINGS</h1>
                  <h3>
                    User : <b>{username}</b>
                  </h3>
                  <p>
                    Full Name : {userdetails[0]} {userdetails[1]}
                  </p>
                  <p>Email : {userdetails[2]} </p>
                  <p>Plans : {userdetails[3]}</p>
                  <p>Duration : {userdetails[4]} months</p>
                  <p>Violations : {userdetails[11]} months</p>
                  <p>Count : {userdetails[12]} months</p>
                  <p>Start Date : {userdetails[5]}</p>
                  <p>End Date : {userdetails[6]}</p>
                  <p>Verification Status : {userdetails[7]}</p>
                  <p>
                    Balance :
                    <span style={{ color: " #7A9F5A" }}>
                      ₦ {userdetails[8]}.00
                    </span>
                  </p>
                  <p></p>
                </div>
              </div>
            ) : (
              <div className="savings">
                <img
                  src="/images/left.svg"
                  alt=""
                  onClick={() => setNext(!next)}
                  style={{ cursor: "pointer" }}
                />
                <button onClick={editUser}>Edit User</button>
                <div>
                  <h1>INVESTMENT</h1>
                  <h3>
                    User : <b>{username}</b>
                  </h3>
                  <p>
                    Full Name : {userdetails[0]} {userdetails[1]}
                  </p>
                  <p>Email : {userdetails[2]} </p>
                  <p>Plans : {userdetails[3]}</p>
                  <p>Duration : {userdetails[4]} months</p>
                  <p>Duration : {userdetails[13]}</p>
                  <p>Maturity : {userdetails[14]}</p>
                  <p>Verification Status : {userdetails[7]}</p>
                  <p>
                    Balance :
                    <span style={{ color: " #7A9F5A" }}>
                      ₦ {userdetails[15]}.00
                    </span>
                  </p>
                  <p></p>
                </div>
              </div>
            )}

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
        ) : (
          <div className="main">
            <div className="top">
              <button onClick={addUser}>Add Users Manually</button>
              <div className="input">
                <input type="text" placeholder="Search" />
                <img src="/images/search.svg" alt="" />
              </div>
            </div>
            <div className="bottom">
              <table>
                <tr>
                  <th>Full Name</th>
                  <th>User Name</th>
                  <th>Email</th>
                  <th>Registration Date</th>
                  <th>Verification Status</th>
                </tr>
                {users &&
                  users.map((user, index) => (
                    <tr key={index}>
                      <td>{user[0]}</td>
                      <td
                        onClick={() => userDetail(user[1])}
                        style={{ cursor: "pointer" }}
                      >
                        {user[1]}
                      </td>
                      <td>{user[2]}</td>
                      <td>{user[3]}</td>
                      <td>{user[4]}</td>
                    </tr>
                  ))}
              </table>
            </div>
          </div>
        )}
      </Wrap>
    </Container>
  );
}

export default AdminAccount;

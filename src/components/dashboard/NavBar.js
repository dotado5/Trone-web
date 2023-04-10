import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ResCont } from "../../styles/dashboardStyles/sidebarStyle";

function NavBar(props) {
  const [burger, setBurger] = useState(false);

  return (
    <ResCont>
      {burger && (
        <div className="hamburger">
          <div className="top">
            <img
              src="/images/x.svg"
              alt=""
              onClick={() => setBurger(!burger)}
            />
          </div>
          <ul>
            <li>
              <Link to={"/dashboard/home"}>Home</Link>
            </li>
            <li>
              <Link to={"/dashboard/invest"}>Invest</Link>
            </li>
            <li>
              <Link to={"/dashboard/account"}>Account</Link>
            </li>
            <li>
              <Link to={"/dashboard/payment"}>Payment</Link>
            </li>
            <li>
              <Link>Logout</Link>
            </li>
          </ul>
        </div>
      )}

      <div className="nav">
        <div>
          <img src={`/images/${props.img}.svg`} alt="" />
          <p>{props.page}</p>
        </div>
        <img
          src="/images/hamburger.svg"
          alt=""
          className="burger"
          onClick={() => setBurger(!burger)}
        />
      </div>
    </ResCont>
  );
}

export default NavBar;

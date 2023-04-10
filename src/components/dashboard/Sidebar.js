import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "../../styles/dashboardStyles/sidebarStyle";
import { FiHome } from "react-icons/fi";
import { BiWallet, BiLogOut } from "react-icons/bi";
import { MdAccountCircle } from "react-icons/md";
import { BsCreditCard } from "react-icons/bs";

function Sidebar() {
  const logout = () => {
    window.localStorage.removeItem("accesstoken");
  };

  return (
    <Container>
      <img src="/images/Trone logo.svg" alt="" />
      <div>
        <NavLink activeClassName="active" to={"/dashboard/home"}>
          <FiHome style={{ fontSize: "35px" }} />
          <span>Home</span>
        </NavLink>
        <NavLink activeClassName="active" to={"/dashboard/invest"}>
          <BiWallet style={{ fontSize: "35px" }} />
          <span>Plans</span>
        </NavLink>
        <NavLink activeClassName="active" to={"/dashboard/account"}>
          <MdAccountCircle style={{ fontSize: "35px" }} />
          <span>Account</span>
        </NavLink>
        <NavLink activeClassName="active" to={"/dashboard/payment"}>
          <BsCreditCard style={{ fontSize: "35px" }} />
          <span>Payment</span>
        </NavLink>
      </div>
      <NavLink
        className="logout"
        activeClassName="active"
        to={"/"}
        onClick={logout}
      >
        <BiLogOut style={{ fontSize: "35px" }} />
        <span>Logout</span>
      </NavLink>
    </Container>
  );
}

export default Sidebar;

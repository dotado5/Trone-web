import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "../../styles/admin dashboard/sidebarStyle";
import { FiHome } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { CiWallet } from "react-icons/ci";
import { RiContactsLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

function Sidebar(props) {
  const logout = () => {
    window.localStorage.removeItem("accesstoken");
  };

  return (
    <Container>
      <img src="/images/Trone logo.svg" alt="" />
      <div>
        <NavLink activeClassName="active" to={"/admin/home"}>
          <FiHome style={{ fontSize: "35px" }} />
          <span>Home</span>
        </NavLink>
        <NavLink activeClassName="active" to={"/admin/pending-pay"}>
          <CiWallet style={{ fontSize: "35px" }} />
          <span>Pending Payment</span>
        </NavLink>
        <NavLink activeClassName="active" to={"/admin/pending-kyc"}>
          <RiContactsLine style={{ fontSize: "35px" }} />
          <span>Pending KYC</span>
        </NavLink>
        <NavLink
          activeClassName="active"
          className={props.white ? "active" : ""}
          to={"/admin/account"}
        >
          <CgProfile style={{ fontSize: "35px" }} />
          <span>Account</span>
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

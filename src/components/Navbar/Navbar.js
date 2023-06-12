import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../images/logo-home-share.png";
import { BiUserCircle } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.navbarContainer}>
        <img
          src={logo}
          alt="logo"
          className={styles.logo}
          onClick={() => navigate("/")}
        />
        <Link to={"/login"} style={{ textDecoration: "none" }}>
          <li>Sign in</li>
        </Link>
        <Link to={"/offers"} style={{ textDecoration: "none" }}>
          <li>Offers</li>
        </Link>
        <Link to={"/about"} style={{ textDecoration: "none" }}>
          <li>About us </li>
        </Link>
        <Link to={"/faq"} style={{ textDecoration: "none" }}>
          <li>FAQ</li>
        </Link>
        <div className={styles.userProfile}>
          <BiUserCircle color="white" size={30} className={styles.BiUserCircle} />
          <Link to={"/account"}>
            <li style={{ color: "white" }}>Profile</li>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;

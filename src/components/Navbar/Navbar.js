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
        <li>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            Sign in
          </Link>
        </li>
        <li>
          <Link to={"/offers"} style={{ textDecoration: "none" }}>
            Offers
          </Link>
        </li>
        <li>
          <Link to={"/about"} style={{ textDecoration: "none" }}>
            About us{" "}
          </Link>
        </li>
        <li>
          <Link to={"/faq"} style={{ textDecoration: "none" }}>
            FAQ
          </Link>
        </li>
        <div className={styles.userProfile}>
          <BiUserCircle color="white" size={30} style={{ paddingRight: 10 }} />
          <Link>Profile</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;

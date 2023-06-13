import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import logo from "../../images/logo-home-share.png";
import { BiUserCircle } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [firstName, setFirstName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const id = userId.replace(/"/g, "");

    // Fetch user details using the userId
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/user/${id}`);
        if (response.ok) {
          const user = await response.json();
          setFirstName(user.firstname);
        } else {
          console.log("Failed to fetch user details");
        }
      } catch (error) {
        console.error("Error occurred while fetching user details:", error);
      }
    };

    if (userId) {
      fetchUserDetails();
    }
  }, []);

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
          <li>About us</li>
        </Link>
        <Link to={"/faq"} style={{ textDecoration: "none" }}>
          <li>FAQ</li>
        </Link>
        <div className={styles.userProfile}>
          <BiUserCircle
            color="white"
            size={30}
            className={styles.BiUserCircle}
          />
          <Link to={"/account"}>
            <li style={{ color: "white" }}>{firstName}</li>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;

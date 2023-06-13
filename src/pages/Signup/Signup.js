// Signup.js

import React, { useState } from "react";
import "./Signup.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "./Signup.module.css";

function Signup() {
  const [formData, setFormData] = useState({
    lastname: "",
    firstname: "",
    email: "",
    address: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    console.log(formData);
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/user/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        // Handle successful signup
        setMessage("Account created successfully!");
      } else {
        // Handle signup error
        setMessage("Error occurred during signup");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <section>
        <Navbar />
      </section>
      <div className={styles.signupContainer}>
        <form className={styles.signupForm}>
          <h1>Create an Account</h1>
          <div className={styles.nameInputs}>
            <div id="fName">
              <label>
                First Name
                <input
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleInputChange}
                  required
                />
              </label>
            </div>
            <label>
              Last Name
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Address
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </label>
          <div className={styles.passwordInputs}>
            <div id="password">
              <label>
                Password
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </label>
            </div>
          </div>
          <button onClick={handleSubmit} type="submit">
            Create Account
          </button>
          <p style={{ textAlign: "center", color: "green", fontSize: "16px" }}>
            {message}
          </p>
        </form>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Signup;

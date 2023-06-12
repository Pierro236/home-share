// Signup.js

import React, { useState } from 'react';
import './Signup.module.css';
import Navbar from "../../components/Navbar/Navbar";
import Footer from '../../components/Footer/Footer';
import styles from "./Signup.module.css";



function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <section>
        <Navbar />
      </section>
    <div className={styles.signupContainer}>
      <form onSubmit={handleSubmit} className={styles.signupForm}>
        <h1>Create an Account</h1>
        <label>
          Username
          <input type="text" name="username" value={formData.username} onChange={handleInputChange} required />
        </label>
        <div className={styles.nameInputs}>
          <div id="fName">
            <label>
              First Name
              <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
            </label>
          </div>
          <label>
            Last Name
            <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
          </label>
        </div>
        <label>
          Email
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </label>
        <div className={styles.passwordInputs}>
          <div id="password">
            <label>
              Password
              <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />
            </label>
          </div>
          <label>
            Confirm Password
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} required />
          </label>
        </div>
        <button type="submit">Create Account</button>
      </form>
    </div>
      <div>
              <Footer />
      </div>
    </div>
  );
}

export default Signup;

// Login.js

import React, { useState } from 'react';
import './Login.module.css';
import Navbar from "../../components/Navbar/Navbar";
import Footer from '../../components/Footer/Footer';
import styles from "./Login.module.css";
import logo from '../../images/logo2.png';
import { Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <section>
        <Navbar />
      </section>
      <div className={styles.loginContainer}>
        <div className={styles.loginImage}>
          <img src={logo} alt="Logo" />
        </div>
        <div className={styles.loginFormContainer}>
          <div className={styles.container}>
            <h1>Sign in</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
            <label>
              Username:
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
              Password:
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button type="submit">Log in</button>
            </form>
            <div className={styles.createAccountLink}>
              <Link to={"/signup"}>
                <li className={styles.createAccountButton}>Create an account</li>
              </Link>
            </div>
          </div>
        </div>

      </div>
      <div>
          <Footer />
      </div>
    </div>
  );
}

export default Login;



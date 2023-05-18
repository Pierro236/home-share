// Login.js

import React, { useState } from 'react';
import './Login.module.css';
import Navbar from "../../components/Navbar/Navbar";
import Footer from '../../components/Footer/Footer';
import styles from "./Login.module.css";
import logo from '../../images/logo.jpg';
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
          <h1>Connexion</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Nom d'utilisateur:
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
              Mot de passe:
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button type="submit">Se connecter</button>
          </form>
          <div className={styles.createAccountLink}>
            <Link to={"/signup"}>
              <li>Créer un compte</li>
            </Link>
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



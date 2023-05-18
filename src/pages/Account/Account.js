import React, { useState } from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Footer from '../../components/Footer/Footer';
import styles from "./Account.module.css";

const Account = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setPseudo] = useState('Username');
  const [firstName, setNom] = useState('First Name');
  const [lastName, setPrenom] = useState('Last Name');
  const [email, setEmail] = useState('user@example.com');
  const [adress, setAdresse] = useState('');

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log('Modifications enregistrées');
  };

  return (
    <div className={styles.accountContainer}>
      <section>
        <Navbar />
      </section>
      <div className={styles.styleContainer}>
        <div className={styles.textContainer}>
          <h2>My profile</h2>
          {!isEditing && (
            <div>
              <p>Username: {username}</p>
              <p>First Name: {firstName}</p>
              <p>Last Name: {lastName}</p>
              <p>E-mail: {email}</p>
              <p>Adress: {adress}</p>
            </div>
          )}
          {isEditing && (
            <div className={styles.formContainer}>
              <label>
                Username:
                <input type="text" value={username} onChange={(event) => setPseudo(event.target.value)} />
              </label>
              <label>
                First Name:
                <input type="text" value={firstName} onChange={(event) => setNom(event.target.value)} />
              </label>
              <label>
                Last Name:
                <input type="text" value={lastName} onChange={(event) => setPrenom(event.target.value)} />
              </label>
              <label>
                E-mail:
                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
              </label>
              <label>
                Adress:
                <input type="text" value={adress} onChange={(event) => setAdresse(event.target.value)} />
              </label>
              <button className={styles.editButton} onClick={handleSave}>Save</button>
            </div>
          )}
          {!isEditing && (
            <button className={styles.editButton} onClick={handleEdit}>Modify</button>
          )}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Account;

import React, { useState } from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Footer from '../../components/Footer/Footer';
import styles from "./Account.module.css";

const Account = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [pseudo, setPseudo] = useState('Utilisateur');
  const [nom, setNom] = useState('Nom');
  const [prenom, setPrenom] = useState('Prénom');
  const [email, setEmail] = useState('utilisateur@example.com');
  const [adresse, setAdresse] = useState('');

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
          <h2>Mon profil</h2>
          {!isEditing && (
            <div>
              <p>Pseudo: {pseudo}</p>
              <p>Nom: {nom}</p>
              <p>Prénom: {prenom}</p>
              <p>E-mail: {email}</p>
              <p>Adresse: {adresse}</p>
            </div>
          )}
          {isEditing && (
            <div className={styles.formContainer}>
              <label>
                Pseudo:
                <input type="text" value={pseudo} onChange={(event) => setPseudo(event.target.value)} />
              </label>
              <label>
                Nom:
                <input type="text" value={nom} onChange={(event) => setNom(event.target.value)} />
              </label>
              <label>
                Prénom:
                <input type="text" value={prenom} onChange={(event) => setPrenom(event.target.value)} />
              </label>
              <label>
                E-mail:
                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
              </label>
              <label>
                Adresse:
                <input type="text" value={adresse} onChange={(event) => setAdresse(event.target.value)} />
              </label>
              <button className={styles.editButton} onClick={handleSave}>Enregistrer</button>
            </div>
          )}
          {!isEditing && (
            <button className={styles.editButton} onClick={handleEdit}>Modifier</button>
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

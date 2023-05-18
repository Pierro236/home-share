import React, { useState } from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Footer from '../../components/Footer/Footer';
import styles from "./Account.module.css";
import './Account.module.css';

const Account = () => {
  const [pseudo, setPseudo] = useState('Utilisateur');
  const [nom, setNom] = useState('Nom');
  const [prenom, setPrenom] = useState('Prénom');
  const [email, setEmail] = useState('utilisateur@example.com');
  const [adresse, setAdresse] = useState('');

  const handlePseudoChange = (event) => {
    setPseudo(event.target.value);
  };

  const handleNomChange = (event) => {
    setNom(event.target.value);
  };

  const handlePrenomChange = (event) => {
    setPrenom(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAdresseChange = (event) => {
    setAdresse(event.target.value);
  };

  const handleSave = () => {
    // Enregistrer les modifications dans la base de données ou effectuer d'autres actions nécessaires
    console.log('Modifications enregistrées');
  };

  return (
    <div className={styles.accountContainer}>
      <section>
        <Navbar />
      </section>
      <h2>Mon profil</h2>
      <div className={styles.formContainer}>
        <label>
          Pseudo:
          <input type="text" value={pseudo} onChange={handlePseudoChange} />
        </label>
        <label>
          Nom:
          <input type="text" value={nom} onChange={handleNomChange} />
        </label>
        <label>
          Prénom:
          <input type="text" value={prenom} onChange={handlePrenomChange} />
        </label>
        <label>
          E-mail:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <label>
          Adresse:
          <input type="text" value={adresse} onChange={handleAdresseChange} />
        </label>
        <button onClick={handleSave}>Enregistrer</button>
      </div>
      <div>
          <Footer />
      </div>
    </div>
    
  );
};

export default Account;

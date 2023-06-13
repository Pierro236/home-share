import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "./Account.module.css";
import { convertStringToUuid } from "../../utils/uuidconverter";

const Account = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setPseudo] = useState("");
  const [firstName, setNom] = useState("");
  const [lastName, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAdresse] = useState("");

  useEffect(() => {
    // Retrieve userId from localStorage
    const userId = localStorage.getItem("userId");
    const id = userId.replace(/"/g, "");

    // Fetch user details using the userId
    const fetchUserDetails = async () => {
      try {
        console.log(id);
        const response = await fetch(`http://localhost:8080/user/${id}`);
        if (response.ok) {
          const user = await response.json();
          setPseudo(user.email);
          setNom(user.firstname);
          setPrenom(user.lastname);
          setEmail(user.email);
          setAdresse(user.address);
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

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log("Modifications enregistrées");
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
              <p>Adress: {address}</p>
            </div>
          )}
          {isEditing && (
            <div className={styles.formContainer}>
              <label>
                Username:
                <input
                  type="text"
                  value={username}
                  onChange={(event) => setPseudo(event.target.value)}
                />
              </label>
              <label>
                First Name:
                <input
                  type="text"
                  value={firstName}
                  onChange={(event) => setNom(event.target.value)}
                />
              </label>
              <label>
                Last Name:
                <input
                  type="text"
                  value={lastName}
                  onChange={(event) => setPrenom(event.target.value)}
                />
              </label>
              <label>
                E-mail:
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </label>
              <label>
                Adress:
                <input
                  type="text"
                  value={address}
                  onChange={(event) => setAdresse(event.target.value)}
                />
              </label>
              <button className={styles.editButton} onClick={handleSave}>
                Save
              </button>
            </div>
          )}
          {!isEditing && (
            <button className={styles.editButton} onClick={handleEdit}>
              Modify
            </button>
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

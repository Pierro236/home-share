import React from "react";
import styles from "./Header.module.css";
import headerpicture from "../../images/header-picture.jpg";
import { BiSearch } from "react-icons/bi";

function Header() {
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.headerDescription}>
          <div className={styles.headerText}>
            <h1>Modern living for everyone</h1>
            <p>
              Échangez votre logement pour les vacances avec d'autres
              particuliers grâce à notre plateforme sécurisée et facile
              d'utilisation !
            </p>
          </div>
          <div className={styles.headerSearch}>
            <div className={styles.searchContainer}>
              <input
                className={styles.searchInput}
                placeholder="Search Location"
              ></input>
              <div className={styles.searchButton}>
                <BiSearch color="white" size={24} />
                <p>Search</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.headerImage}>
          <img src={headerpicture} alt="header" />
        </div>
      </div>
    </>
  );
}

export default Header;

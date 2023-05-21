import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./Administrator.module.css";

const Administrator = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.adminPage}>
        <Sidebar />
        <div className={styles.adminContent}>
          <p>Welcome to Administrator Page !</p>
        </div>
      </div>
    </div>
  );
};

export default Administrator;

import React from "react";
import styles from "./Administrator.module.css"
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./Administrator.module.css";

function Administrator() {
  return (
    <div className={styles.admin}>
        <Sidebar />
        <div className={styles.content}>
          <h1>Dashboard</h1>
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

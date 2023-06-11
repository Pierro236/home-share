import React from "react";
import styles from "./Administrator.module.css"
import Sidebar from "../../components/Sidebar/Sidebar";

function Administrator() {
  return (
    <div className={styles.admin}>
        <Sidebar />
        <div className={styles.content}>
          <h1>Dashboard</h1>
          <p>Welcome to Administrator Page !</p>
        </div>
    </div>
  );
};

export default Administrator;

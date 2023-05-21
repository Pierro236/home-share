import React from "react";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h4>Dashboard</h4>
      <ul>
        <li>
          <Link to="/admin/users" className={styles.sidebarLink}>
            Gestion des utilisteurs
          </Link>
        </li>
        <li>
          <Link to="/admin/mailbox" className={styles.sidebarLink}>
            Messagerie
          </Link>
        </li>
        <li>
          <Link to="/admin/advertisement" className={styles.sidebarLink}>
            Gestion des Annonces
          </Link>
        </li>
        <li>
          <Link to="/admin/faq" className={styles.sidebarLink}>
            Mise à jour de la FAQ
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

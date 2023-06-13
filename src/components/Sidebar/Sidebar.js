import React from "react";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { SidebarData } from "./SidebarData";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.sidebarList}>
        {SidebarData.map((val, key) => {
          return (
            <li
              className={styles.row}
              key={key}
              id={window.location.pathname === val.link ? "active" : ""}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <div id="icon">{val.icon}</div>
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;

import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./AdminAnnonces.module.css";

const AdminAnnonces = () => {
  const [homes, setHomes] = useState([]);

  const fetchHomes = async () => {
    try {
      const response = await fetch("http://localhost:8080/home/read");
      if (response.ok) {
        const data = await response.json();
        setHomes(data);
      } else {
        console.log("Failed to fetch homes");
      }
    } catch (error) {
      console.log("Error occurred while fetching homes:", error);
    }
  };

  useEffect(() => {
    fetchHomes();
  }, []);

  const handleDeleteHome = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/home/delete/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        console.log(`Home with ID ${id} deleted successfully`);
        // Fetch homes again to update the list after deletion
        fetchHomes();
      } else {
        console.log(`Failed to delete home with ID ${id}`);
      }
    } catch (error) {
      console.log(`Error occurred while deleting home with ID ${id}:`, error);
    }
  };

  return (
    <div className={styles.admin}>
      <Sidebar />
      <div className={styles.content}>
        <div className={styles.container}>
          <h1>Annonces management</h1>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Start Rent</th>
                <th>End Rent</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {homes.map((home) => (
                <tr key={home.id}>
                  <td>{home.title}</td>
                  <td>{home.description}</td>
                  <td>{home.startRent}</td>
                  <td>{home.endRent}</td>
                  <td>
                    <button className={styles.editButton}>Edit</button>
                    <button
                      className={styles.editButton}
                      onClick={() => handleDeleteHome(home.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminAnnonces;

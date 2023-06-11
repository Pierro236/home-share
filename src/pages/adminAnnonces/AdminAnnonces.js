import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import styles from './AdminAnnonces.module.css';
import OfferItems from '../../data/data';

const AdminAnnonces = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

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
                <th>Owner</th>
                <th>Date Published</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {OfferItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.owner}</td>
                  <td>{item.date}</td>
                  <td>
                    <button className={styles.editButton}>Edit</button>
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

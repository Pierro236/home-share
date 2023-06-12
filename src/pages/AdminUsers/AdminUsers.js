import React, { useState, useEffect } from 'react';
import styles from './AdminUsers.module.css';
import Sidebar from '../../components/Sidebar/Sidebar';

function AdminUsers() {
  const [users, setUsers] = useState([]);

  // Exemple de fonction pour récupérer les utilisateurs depuis une API ou une source de données
  const fetchUsers = async () => {
    try {
      // Effectuez une requête pour récupérer les utilisateurs depuis votre API
      const response = await fetch('https://example.com/api/users');
      const data = await response.json();
      setUsers(data); // Mettez à jour le state avec les utilisateurs récupérés
    } catch (error) {
      console.log('Erreur lors de la récupération des utilisateurs :', error);
    }
  };

  // Utilisez useEffect pour effectuer la récupération des utilisateurs lors du chargement de la page
  useEffect(() => {
    fetchUsers();
  }, []);

  // Utilisateurs fictifs
  const fictitiousUsers = [
    { id: 1, name: 'John Doe', email: 'johndoe@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', role: 'User' },
    { id: 3, name: 'Mike Johnson', email: 'mikejohnson@example.com', role: 'User' }
  ];

  // Ajouter les utilisateurs fictifs à la liste des utilisateurs
  useEffect(() => {
    setUsers(fictitiousUsers);
  }, []);

  return (
    <div className={styles.admin}>
      <Sidebar />
      <div className={styles.container}>
        <h1>User management</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button className={styles.editButton}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminUsers;

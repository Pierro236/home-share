import React, { useState, useEffect } from "react";
import styles from "./AdminUsers.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";

function AdminUsers() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:8080/user/read");
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      } else {
        console.log("Failed to fetch users");
      }
    } catch (error) {
      console.log("Error occurred while fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDeleteUser = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/user/delete/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        console.log(`User with ID ${id} deleted successfully`);
        // Fetch users again to update the list after deletion
        fetchUsers();
      } else {
        console.log(`Failed to delete user with ID ${id}`);
      }
    } catch (error) {
      console.log(`Error occurred while deleting user with ID ${id}:`, error);
    }
  };

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
              <tr key={user.userid}>
                <td>{user.userid}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
                <td>User</td>
                <td>
                  <button className={styles.editButton}>Edit</button>
                </td>
                <td>
                  <button
                    className={styles.editButton}
                    onClick={() => handleDeleteUser(user.userid)}
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
  );
}

export default AdminUsers;

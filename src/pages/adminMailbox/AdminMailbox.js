import React, { useState } from 'react';
import styles from './AdminMailbox.module.css';
import Sidebar from '../../components/Sidebar/Sidebar';

function AdminMailbox() {
  const [emails, setEmails] = useState([
    { id: 1, sender: 'John Doe', subject: 'Meeting Reminder', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec leo eget odio iaculis aliquet id et mauris. Sed ac commodo arcu.' },
    { id: 2, sender: 'Jane Smith', subject: 'New Feature Request', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet odio elit. Nulla facilisi. Nunc sed commodo urna, et accumsan arcu. Donec sagittis dui vel justo tincidunt, sit amet tristique elit malesuada.' },
    // Ajoutez plus d'emails ici
  ]);

  const [selectedEmailId, setSelectedEmailId] = useState(null);

  const handleDeleteEmail = (emailId) => {
    const updatedEmails = emails.filter((email) => email.id !== emailId);
    setEmails(updatedEmails);
    setSelectedEmailId(null);
  };

  const handleEmailClick = (emailId) => {
    setSelectedEmailId(emailId);
  };

  const handleNewEmail = () => {
    // Code pour ouvrir la fenêtre de rédaction d'un nouveau mail
    console.log('Compose a new email');
  };

  const handleSentEmails = () => {
    // Code pour afficher l'historique des mails envoyés
    console.log('View sent emails');
  };

  return (
    <div className={styles.admin}>
      <Sidebar />
      <div className={styles.container}>
        <h1>Mailbox</h1>
        <div className={styles.toolbar}>
          <button onClick={handleNewEmail}>New Email</button>
          <button onClick={handleSentEmails}>Sent Emails</button>
        </div>
        {emails.length === 0 ? (
          <p>No email in the mailbox.</p>
        ) : (
          <table className={styles.emailTable}>
            <thead>
              <tr>
                <th>From</th>
                <th>Subject</th>
                <th>Preview</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {emails.map((email) => (
                <tr key={email.id} onClick={() => handleEmailClick(email.id)}>
                  <td>{email.sender}</td>
                  <td>{email.subject}</td>
                  <td>{email.body.slice(0, 50)}...</td>
                  <td>
                    <button onClick={() => handleDeleteEmail(email.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {selectedEmailId && (
          <div className={styles.emailDetails}>
            <h3>Email Details</h3>
            <p>
              <strong>From:</strong> {emails.find((email) => email.id === selectedEmailId).sender}
            </p>
            <p>
              <strong>Subject:</strong> {emails.find((email) => email.id === selectedEmailId).subject}
            </p>
            <p>
              <strong>Body:</strong> {emails.find((email) => email.id === selectedEmailId).body}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminMailbox;

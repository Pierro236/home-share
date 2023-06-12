import React, { useState } from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Footer from '../../components/Footer/Footer';
import './Messaging.module.css';
import styles from "./Messaging.module.css";

const Messaging = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  const handleSendMessage = (message) => {
    // Logique d'envoi du message
  };

  const ConversationList = ({ onSelectUser }) => {
    const conversations = [
      { id: 1, user: { id: 1, name: 'User 1' }, unreadCount: 0 },
      { id: 2, user: { id: 2, name: 'User 2' }, unreadCount: 0 },
      { id: 3, user: { id: 3, name: 'User 3' }, unreadCount: 0 },
    ];

    return (
      <ul className={styles.conversationList}>
        {conversations.map((conversation) => (
          <li key={conversation.id} onClick={() => onSelectUser(conversation.user)}>
            <div className={styles.conversationItem}>
              <div className={styles.userAvatar}>Avatar</div>
              <div className={styles.userInfo}>
                <h4>{conversation.user.name}</h4>
                {conversation.unreadCount > 0 && (
                  <span className={styles.unreadCount}>{conversation.unreadCount}</span>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  const MessageList = ({ user }) => {
    const messages = [
      { id: 1, sender: { id: 1, name: 'User 1' }, content: 'Bonjour !' },
      { id: 2, sender: { id: 2, name: 'User 2' }, content: 'Salut ! Comment ça va ?' },
      { id: 3, sender: { id: 1, name: 'User 1' }, content: "Ça va bien, merci !" },
    ];

    return (
      <ul className={styles.messageList}>
        {messages.map((message) => (
          <li key={message.id} className={message.sender.id === user.id ? styles.sent : styles.received}>
            <div className={styles.messageItem}>
              <div className={styles.messageContent}>{message.content}</div>
              <div className={styles.messageSender}>{message.sender.name}</div>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className={styles.app}>
      <Navbar/>
      <div className={styles.messagingContainer}>
        <div className={styles.sidebar}>
          <h2>Messaging</h2>
          <ConversationList onSelectUser={handleUserSelect} />
        </div>
        <div className={styles.chat}>
          {selectedUser ? (
            <div>
              <h2>{selectedUser.name}</h2>
              <MessageList user={selectedUser} />
              <div className={styles.messageInput}>
                <input type="text" placeholder="Écrire un message..." />
                <button onClick={handleSendMessage}>Send</button>
              </div>
            </div>
          ) : (
            <div className={styles.noUserSelected}>
              <p>No user selected</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Messaging;

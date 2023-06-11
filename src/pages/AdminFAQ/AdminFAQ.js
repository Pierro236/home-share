import React, { useState } from 'react';
import styles from './AdminFAQ.module.css';
import Sidebar from '../../components/Sidebar/Sidebar';

function AdminFAQ() {
  const [faqs, setFaqs] = useState([
    { question: 'Question 1', answer: 'Answer 1' },
    { question: 'Question 2', answer: 'Answer 2' },
    // Ajoutez plus de questions-réponses ici
  ]);

  const handleQuestionChange = (index, e) => {
    const updatedFaqs = [...faqs];
    updatedFaqs[index].question = e.target.value;
    setFaqs(updatedFaqs);
  };

  const handleAnswerChange = (index, e) => {
    const updatedFaqs = [...faqs];
    updatedFaqs[index].answer = e.target.value;
    setFaqs(updatedFaqs);
  };

  const handleSaveFAQs = () => {
    // Envoyer les faqs mises à jour à votre backend ou effectuer toute autre action nécessaire
    console.log('FAQs sauvegardées :', faqs);
  };

  return (
    <div className={styles.admin}>
      <Sidebar/>
      <div className={styles.content}>
      <h1>Updated FAQ</h1>
      {faqs.map((faq, index) => (
        <div key={index}>
          <input
            type="text"
            value={faq.question}
            onChange={(e) => handleQuestionChange(index, e)}
          />
          <textarea
            value={faq.answer}
            onChange={(e) => handleAnswerChange(index, e)}
          />
        </div>
      ))}
      <button onClick={handleSaveFAQs}>Save changes</button>
      </div>
    </div>
  );
};

export default AdminFAQ;

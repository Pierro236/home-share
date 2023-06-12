import React from 'react';
import './Footer.module.css';
import styles from "./Footer.module.css";


const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerLinks}>
        <a href="/cgu">Terms of Service</a>
        <a href="/confidentialite">Privacy Policy</a>
        <a href="/contact">Contact us</a>
      </div>
      <div className={styles.footerSocial}>
        <a href="https://www.facebook.com/">Facebook</a>
        <a href="https://twitter.com/">Twitter</a>
        <a href="https://www.instagram.com/">Instagram</a>
      </div>
      <div className={styles.footerInfo}>
        © {new Date().getFullYear()} HomeShare. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

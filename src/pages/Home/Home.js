import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import OfferItem from "../../components/OfferItem/OfferItem";
import OfferItems from "../../data/data";
import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import aboutImage from "../../images/aboutimage.png";

const Home = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <div>
      <section>
        <Navbar />
        <Header />
      </section>
      <section className={styles.offerSection}>
        <h1>Test </h1>
        <div
          className={`${styles.offerListContainer} ${loaded && styles.loaded}`}
        >
          {OfferItems.map((item) => (
            <OfferItem key={item.id} title={item.title} image={item.image} />
          ))}
        </div>
      </section>
      <section className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          <img src={aboutImage} alt="about" className={styles.aboutImage} />
          <div className={styles.aboutText}>
            <h1>About us</h1>
            <p>
              We are a company that connects the world of real estate and
              finance. We provide a complete service for the sale, purchase or
              rental of real estate. Our advantage is more than 15 years of
              experience and soil in attractive locations in Slovakia with
              branches in Bratislava and Košice. We have a connection to all
              banks on the Slovak market, so we can solve everything under one
              roof. By constantly innovating our business activities, we move
              forward and we are able to offer truly above-standard services
              that set us apart from the competition.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

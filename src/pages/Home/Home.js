import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import OfferItem from "../../components/OfferItem/OfferItem";
import OfferItems from "../../data/data";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <section>
        <Navbar />
        <Header />
      </section>
      <section className={styles.offerSection}>
        <h1>Top Offers </h1>
        <div className={styles.offerListContainer}>
          {OfferItems.map((item) => (
            <OfferItem key={item.id} title={item.title} image={item.image} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

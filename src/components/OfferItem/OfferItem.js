import React from "react";
import styles from "./OfferItem.module.css";

const OfferItem = (props) => {
  return (
    <div className={styles.offerContainer}>
      <div className={styles.offerImage}>
        <img src={props.image} alt="offer" />
      </div>
      <div className={styles.offerDescription}>
        <h3>{props.title}</h3>
      </div>
    </div>
  );
};

export default OfferItem;

import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import styles from "./OfferItem.module.css";

const OfferItem = (props) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className={styles.offerContainer}>
      <div className={styles.like} onClick={handleLike}>
        <AiFillHeart color={liked ? "red" : "#252526cc"} size={20} />
      </div>
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

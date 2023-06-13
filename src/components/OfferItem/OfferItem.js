import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import styles from "./OfferItem.module.css";
import { useNavigate } from "react-router-dom";

const OfferItem = (props) => {
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();
  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className={styles.offerContainer}>
      <div className={styles.like} onClick={handleLike}>
        <AiFillHeart color={liked ? "red" : "#252526cc"} size={20} />
      </div>
      <div className={styles.offerImage} onClick={() => navigate("/offer/id")}>
        <img src={props.image} alt="offer" />
      </div>
      <div
        className={styles.offerDescription}
        onClick={() => navigate("/offer/id")}
      >
        <h3>{props.title}</h3>
        <p>{props.owner}</p>
        <p>{props.date}</p>
      </div>
    </div>
  );
};

export default OfferItem;

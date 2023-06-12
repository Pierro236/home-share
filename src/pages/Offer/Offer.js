import React, { useState } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Offer.module.css";
import bigpic1 from "../../images/bigpic1.png";
import image1 from "../../images/caroussel1.png";
import image2 from "../../images/caroussel2.png";
import image3 from "../../images/caroussel3.png";

const Offer = () => {
  const images = [image1, image2, image3];

  const [carouselImages, setCarouselImages] = useState(images);
  const nextImage = () => {
    const updatedImages = [...carouselImages.slice(1), carouselImages[0]];
    setCarouselImages(updatedImages);
  };

  const prevImage = () => {
    const updatedImages = [
      carouselImages[carouselImages.length - 1],
      ...carouselImages.slice(0, carouselImages.length - 1),
    ];
    setCarouselImages(updatedImages);
  };

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h1 style={{ color: "black", fontSize: "30px" }}>
          Premium penthouse in central Barcelona with panoramic views
        </h1>
        <div className={styles.offerContainer}>
          <div className={styles.leftContainer}>
            <div className={styles.offerDetails}>
              <div className={styles.offerImage}>
                <img
                  src={bigpic1}
                  style={{ width: "100%", height: "100%" }}
                  alt="offerimage"
                />
              </div>
              <div className={styles.carousselContainer}>
                <div className={styles.carousselButton} onClick={prevImage}>
                  {<MdNavigateBefore size={25} color="white" />}
                </div>
                <div className={styles.carousselImages}>
                  {carouselImages.map((image, index) => (
                    <img key={index} src={image} alt={`Carousel  ${index}`} />
                  ))}
                </div>
                <div className={styles.carousselButton} onClick={nextImage}>
                  {<MdNavigateNext size={25} color="white" />}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rightContainer}></div>
        </div>
      </div>
    </div>
  );
};

export default Offer;

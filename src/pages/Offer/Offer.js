import React, { useState } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { MdPets } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { RiPlantLine } from "react-icons/ri";
import { MdHome } from "react-icons/md";
import { RiWifiLine } from "react-icons/ri";
import { GiWashingMachine } from "react-icons/gi";
import { MdFreeBreakfast } from "react-icons/md";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { RxDimensions } from "react-icons/rx";
import { FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "./Offer.module.css";
import image1 from "../../images/caroussel1.png";
import image2 from "../../images/caroussel2.png";
import image3 from "../../images/caroussel3.png";

const Offer = () => {
  const images = [image1, image2, image3];
  const [offerImage, setOfferImage] = useState(images[1]);
  const [description, setDescription] = useState(
    "La résidence étudiante Colombes Arc Sportif vous accueille dans son établissement de 11 studios de 14 à 36m² tous équipés d'un espace couchage, un espace bureau, un espace cuisine ainsi que d'un espace salle d'eau."
  );
  const [rate, setRate] = useState(4);

  const [carouselImages, setCarouselImages] = useState(images);
  const nextImage = () => {
    const updatedImages = [...carouselImages.slice(1), carouselImages[0]];
    setCarouselImages(updatedImages);
    setOfferImage(updatedImages[1]);
  };

  const prevImage = () => {
    const updatedImages = [
      carouselImages[carouselImages.length - 1],
      ...carouselImages.slice(0, carouselImages.length - 1),
    ];
    setCarouselImages(updatedImages);
    setOfferImage(updatedImages[1]);
  };

  const constraints = [
    "Constraint 1",
    "Constraint 2",
    "Constraint 3",
    "Constraint 4",
  ];

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
                  src={offerImage}
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
                    <img key={index} src={image} alt={`Carousel ${index}`} />
                  ))}
                </div>
                <div className={styles.carousselButton} onClick={nextImage}>
                  {<MdNavigateNext size={25} color="white" />}
                </div>
              </div>
              <div className={styles.details}>
                <div>
                  <HiOutlineBuildingOffice2 size={35} color="black" />{" "}
                  <h3>Flat</h3>
                </div>
                <div>
                  <RxDimensions size={30} color="black" /> <h3>24 m2</h3>
                </div>
                <div>
                  <FaMapMarkerAlt size={30} color="black" /> <h3>Barcelona</h3>
                </div>
              </div>
              <div className={styles.offerCaracteristics}>
                <div className={styles.offerDescription}>
                  <h1 style={{ textAlign: "left" }}>Description</h1>
                  <p>{description}</p>
                </div>
                <div className={styles.offerEquipment}>
                  <h1 style={{ textAlign: "left" }}>Equipment</h1>
                  <div className={styles.equipment}>
                    <div className={styles.equipmentItem}>
                      <MdPets size={30} color="black" />
                      <p>Keep pets</p>
                    </div>
                    <div className={styles.equipmentItem}>
                      <RiPlantLine size={30} color="black" />
                      <p>Watering plants</p>
                    </div>
                    <div className={styles.equipmentItem}>
                      <MdHome size={30} color="black" />
                      <p>Clean the house</p>
                    </div>
                    <div className={styles.equipmentItem}>
                      <RiWifiLine size={30} color="black" />
                      <p>Wifi</p>
                    </div>
                    <div className={styles.equipmentItem}>
                      <GiWashingMachine size={30} color="black" />
                      <p>Washing machine</p>
                    </div>
                    <div className={styles.equipmentItem}>
                      <MdFreeBreakfast size={30} color="black" />
                      <p>Breakfast</p>
                    </div>
                  </div>
                </div>
                <div className={styles.offerConstraint}>
                  <h1 style={{ textAlign: "left" }}>Constraints</h1>
                  <ul className={styles.constraintList}>
                    {constraints.map((constraint, index) => (
                      <li key={index}>{constraint}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rightContainer}>
            <div className={styles.rate}>
              <p>
                Rating {rate} <AiFillStar color="yellow" size={22} />
              </p>
            </div>
            <div className={styles.owner}>
              <div className={styles.ownerImage}>
                <img src={image1} alt="owner" />
              </div>
              <div className={styles.ownerDetails}>
                <p>John Doe</p>
                <p>johndoe@gmail.com</p>
                <div className={styles.book}>Book now</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Offer;

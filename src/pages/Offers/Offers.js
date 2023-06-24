import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "../Offers/Offers.module.css";
import { BiSearch } from "react-icons/bi";
import { FaSpinner } from "react-icons/fa";
import OfferItem from "../../components/OfferItem/OfferItem";

const Offers = () => {
  const [offers, setOffers] = useState([]);
  const [displayedOffers, setDisplayedOffers] = useState(8);
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchOffers = async () => {
    try {
      const response = await fetch("http://localhost:8080/home/read");
      if (response.ok) {
        const data = await response.json();
        setOffers(data);
      } else {
        console.log("Failed to fetch offers");
      }
    } catch (error) {
      console.log("Error occurred while fetching offers:", error);
    }
  };

  const loadMoreOffers = () => {
    setLoading(true);
    setTimeout(() => {
      setDisplayedOffers(displayedOffers + 4);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchOffers();
    setLoaded(true);
  }, []);

  const visibleOffers = offers
    .filter((offer) =>
      offer.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, displayedOffers);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h1 style={{ color: "black" }}>Search for an Offer</h1>
        <p style={{ textAlign: "center" }}>
          Choose from the most advantageous offers
        </p>
        <div className={styles.searchOfferContainer}>
          <div className={styles.searchOfferBar}>
            <input
              className={styles.searchInput}
              placeholder="Search Location"
              value={searchTerm}
              onChange={handleSearch}
            ></input>
            <div className={styles.searchButton}>
              <BiSearch color="white" size={24} />
              <p>Search</p>
            </div>
          </div>
          <div className={styles.searchOfferFilter}>
            <select className={styles.filter}>
              <option value="default">Type of house</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="loft">Loft</option>
            </select>
            <select className={styles.filter}>
              <option value="default">Apartment</option>
              <option value="house">House</option>
              <option value="loft">Loft</option>
            </select>
            <select className={styles.filter}>
              <option value="default">Duration</option>
              <option value="3d">3 days</option>
              <option value="1w">1 week</option>
              <option value="2w">2 weeks</option>
            </select>
          </div>
        </div>
        <div className={styles.offerContainer}>
          <div
            className={`${styles.offerListContainer} ${
              loaded && styles.loaded
            }`}
          >
            {visibleOffers.map((offer) => (
              <OfferItem
                key={offer.id}
                title={offer.title}
                image={offer.image1}
                owner={offer.owner}
                date={offer.date}
              />
            ))}
          </div>
          {loading ? (
            <div className={styles.spinner}>
              <FaSpinner className={styles.spinnerIcon} size={70} />
            </div>
          ) : (
            <div className={styles.moreOffersContainer}>
              <button
                className={styles.moreOffersButton}
                onClick={loadMoreOffers}
              >
                More Offers
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Offers;

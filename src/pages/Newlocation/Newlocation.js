import React, { useState } from "react";
import "./Newlocation.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "./Newlocation.css";

function Newlocation() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    image: null,
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value, files } = event.target;
    if (name === "image") {
      const selectedImage = files[0];
      const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
      if (selectedImage && allowedTypes.includes(selectedImage.type)) {
        setFormData((prevState) => ({
          ...prevState,
          [name]: selectedImage,
        }));
        setErrorMessage("");
      } else {
        setErrorMessage(
          "Veuillez sélectionner un fichier image (JPEG, PNG, GIF)."
        );
        setFormData((prevState) => ({
          ...prevState,
          [name]: null,
        }));
      }
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logique pour traiter le formulaire
  };

  return (
    <div>
      <section>
        <Navbar />
      </section>
      <div className={styles.newlocationContainer}>
        <form onSubmit={handleSubmit} className={styles.newlocationForm}>
          <h1>Add a new house</h1>
          <label>
            Username
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Image
            <input
              type="file"
              name="image"
              onChange={handleInputChange}
              required
            />
          </label>
          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <button type="submit">Add your House</button>
        </form>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Newlocation;

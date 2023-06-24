import React, { useState } from "react";
import styles from "./Newlocation.module.css";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Newlocation = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleImage1Change = (e) => {
    setImage1(e.target.files[0]);
  };

  const handleImage2Change = (e) => {
    setImage2(e.target.files[0]);
  };

  const handleImage3Change = (e) => {
    setImage3(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image1", image1);
    formData.append("image2", image2);
    formData.append("image3", image3);
    formData.append("startRent", startDate);
    formData.append("endRent", endDate);

    try {
      console.log(formData);
      const response = await axios.post(
        "http://localhost:8080/home/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      // Handle success or redirect
    } catch (error) {
      console.error("Error occurred while creating home:", error);
      // Handle error
    }
  };

  return (
    <div className={styles.globalContainer}>
      <Navbar />
      <h2 style={{ paddingTop: "100px" }}>Add Home</h2>
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <label>Image 1:</label>
          <input type="file" onChange={handleImage1Change} />

          <label>Image 2:</label>
          <input type="file" onChange={handleImage2Change} />

          <label>Image 3:</label>
          <input type="file" onChange={handleImage3Change} />

          <label>Start Date:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />

          <label>End Date:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />

          <button type="submit">Create Home</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Newlocation;

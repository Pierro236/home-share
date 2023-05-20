import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

const Administrator = () => {
  return (
    
    <div className="admin-page">
        <Header />
        <Navbar />
        <Sidebar />
        <div className="admin-content">
            <p>Welcome to Administrator Page !</p>
        </div>
    </div>
  );
};

export default Administrator;

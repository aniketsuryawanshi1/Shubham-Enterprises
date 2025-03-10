import React from "react";
import "../style.css";
import bgvideo from "../../assets/Media/Video/testtwo.mp4";
import truck from "../../assets/Media/Image/truck.svg";
const Home = () => {
  return (
    <div className="video-container">
      <section className="video-section">
        <video autoPlay loop muted className="background-video">
          <source src={bgvideo} type="video/mp4" />
        </video>
        <div className="overlay-text">Authenticity in Every Layer!</div>
        <div className="truck">
          <img src={truck} alt="Truck Icon" className="truck-icon" />
        </div>
      </section>
    </div>
  );
};

export default Home;

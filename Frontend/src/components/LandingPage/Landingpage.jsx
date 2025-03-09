import React from "react";
import "./style.css";
import BgVideo from "../../assets/Media/Video/test.mp4";

const Landingpage = () => {
  return (
    <div className="landingpage">
      <video src={BgVideo} autoPlay muted loop class="video-bg" />
      <div className="bg-overlay"></div>
      <div className="home-text">
        <h1>The Bubu Island</h1>
        <p>Come live out your ideal vacation with us</p>
      </div>

      <div className="home-btn">Explore</div>
    </div>
  );
};

export default Landingpage;

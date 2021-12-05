import React from "react";
import "./css/styles.css";

import VideoPc from "./assets/HuTaoPC.mp4";
// import anime from "animejs";
// import VideoMb from "./assets/HuTaoMb.mp4";

export default function BackgroundHeader({ children, homeState }) {

  let BD = "https://i.ibb.co/JpBqbMN/image-Home.jpg";
  // let BM = "https://i.ibb.co/xSQbqVd/hu-Tao-background-mobil.jpg";

  return (
    <div className={`container-bg ${homeState? '' : 'off'}`}>
      <div  className="video-container">
          <video poster={BD} src={VideoPc} autoPlay playsinline muted loop preload></video>
      </div>
      <div className="container-title">{children}</div>
    </div>
  );
}

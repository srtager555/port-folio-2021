import React from "react";
import "./css/styles.css";

import VideoPc from "./assets/HuTaoPC.mp4";
// import anime from "animejs";

export default function BackgroundHome({ children, homeState }) {
  let BD = "https://i.ibb.co/0J2Ntfn/hu-Tao-background-desktop.jpg";

  return (
    <div className={`container-bg ${homeState ? "" : "off"}`}>
      <div className="video-container">
        <video autoPlay muted="true" loop poster={BD} src={VideoPc}></video>
      </div>
      <div className="container-title">{children}</div>
    </div>
  );
}

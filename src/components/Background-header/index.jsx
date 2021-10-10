import React, { useEffect, useState } from "react";
import "./css/styles.css";

import VideoPc from "./assets/HuTaoPC.mp4";
import VideoMb from "./assets/HuTaoMb.mp4";

export default function BackgroundHeader({ children }) {
  let BD = "https://i.ibb.co/0J2Ntfn/hu-Tao-background-desktop.jpg";
  let BM = "https://i.ibb.co/xSQbqVd/hu-Tao-background-mobil.jpg";

  const [backgroundMobil, setBackgroundMobil] = useState();
  const [firstTime, setFirstTime] = useState(true)

  useEffect(() => {
    if (window.innerWidth < 480 && firstTime) {
      setBackgroundMobil(true);
      setFirstTime(false)
      console.log('?')
    }
    function handleResize() {
      if (window.innerWidth > 480) {
        setBackgroundMobil(false);
      } else {
        setBackgroundMobil(true);
      }
      console.log(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className="container-bg">
      <div className="video-container">
        {backgroundMobil ? (
          <video poster={BM} src={VideoMb} autoPlay muted loop></video>
        ) : (
          <video poster={BD} src={VideoPc} autoPlay muted loop></video>
        )}
      </div>
      <div className="container-title">{children}</div>
    </div>
  );
}

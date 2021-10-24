import React, { useRef, useEffect } from "react";
import "./css/styles.css";

import VideoPc from "./assets/HuTaoPC.mp4";
// import anime from "animejs";
// import VideoMb from "./assets/HuTaoMb.mp4";

export default function BackgroundHeader({ children, homeState }) {

  let BD = "https://i.ibb.co/0J2Ntfn/hu-Tao-background-desktop.jpg";
  // let BM = "https://i.ibb.co/xSQbqVd/hu-Tao-background-mobil.jpg";

  const elemento = useRef(null)
  // useEffect(()=>{
  //   elemento.current = anime({
  //     targets: ".video-container",
  //     scale: [10, 1],
  //     translateY: [0, 100, 0], 
  //     easing: "easeInOutSine",
  //     duration: 1000,
  //   })
  // }, [])

  return (
    <div ref={elemento} className={`container-bg ${homeState? '' : 'off'}`}>
      <div  className="video-container">
          <video poster={BD} src={VideoPc} autoPlay muted loop></video>
      </div>
      <div className="container-title">{children}</div>
    </div>
  );
}

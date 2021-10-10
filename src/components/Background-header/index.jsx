import React, { useEffect, useState } from "react";
import "./css/styles.css";

import VideoPc from './assets/HuTaoPC.mp4'
import VideoMb from './assets/HuTaoMb.mp4'

export default function BackgroundHeader() {
  let BD = "https://i.ibb.co/0J2Ntfn/hu-Tao-background-desktop.jpg";
  let BM = "https://i.ibb.co/xSQbqVd/hu-Tao-background-mobil.jpg";

//   let src = 'blob:https://www.youtube.com/1b5556a2-a5eb-2646-bca8-c533cf33a8a3'
  let src = ''

  // let backgroundMobil;
  const [backgroundMobil, setBackgroundMobil] = useState(false);

  // window.addEventListener('resize', () => {
  //     if(window.innerWidth > 720) {
  //         backgroundMobil = false;
  //     } else {
  //         backgroundMobil = true;
  //     }
  //     console.log(window.innerWidth)
  //     return backgroundMobil
  // })
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 480) {
        setBackgroundMobil(false);
      } else {
        setBackgroundMobil(true);
      }
      console.log(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  });
  return (
    <div className='video-container'>
      {backgroundMobil ? (
        <video poster={BM} src={VideoMb} autoPlay muted loop></video>
      ) : (
        <video poster={BD} src={VideoPc}  autoPlay muted loop></video>
      )}
    </div>
  );
}

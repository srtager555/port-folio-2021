import React, { Fragment, useState, useEffect, useRef } from "react";
import "./css/styles.css";

import Anime, { anime } from "react-anime";

export default function TittleHeader() {
  const elemento = useRef(null);
  const [titleFirstPart, setTitleFirstPart] = useState([]);
  const [titleSecondPart, setTitleSecondPart] = useState([]);

  const textTitleFirst = "I'M CARLOS, A CREATIVE";
  const textTitleSecond = "FRONT-END DEVELOPER";

  useEffect(() => {
    setTitleFirstPart([...textTitleFirst]);
    setTitleSecondPart([...textTitleSecond]);
  }, []);

  function titleInitAnime() {
    elemento.current = anime
        .timeline({
          duration: 1000,
          easing: "easeInOutSine",
        })
        .add({
          targets: ".header-title .letter-title",
          translateY: ["1.1em", 0],
          translateX: ["0.55em", 0],
          translateZ: 0,
          rotateZ: [180, 0],
          delay: anime.stagger(50),
        })
        .add({
          targets: ".container-text .border",
          width: ["0%", "100%"],
        });
  }

  useEffect(() => {
    setTimeout(() => {
      titleInitAnime()
    }, 100);
  }, []);

  return (
    <Fragment>
      <div className="container-text" ref={elemento}>
        <p className="header-title">
          <span className="hidden-letter">
            {titleFirstPart.map((l) => {
              if (l === " ") {
                return <span className="letter-title"> </span>;
              } else if (l === ",") {
                return <span className="letter-title little-comma">{l}</span>;
              } else {
                return <span className="letter-title">{l}</span>;
              }
            })}{" "}
          </span>
          <span className="hidden-letter">
            {titleSecondPart.map((l) => {
              if (l === " ") {
                return <span className="letter-title"> </span>;
              } else if (l === ",") {
                return <span className="letter-title little-comma">{l}</span>;
              } else {
                return <span className="letter-title">{l}</span>;
              }
            })}
          </span>
        </p>
        <span className="border"></span>
      </div>
    </Fragment>
  );
}

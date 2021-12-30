import React, { Fragment, useEffect, useRef } from "react";
import WrappingLetters from "wrapping-letters-react";
import "./css/styles.css";

import { anime } from "react-anime";

export default function TittleHeader() {
  const elemento = useRef(null);

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
  }
  useEffect(() => {
    setTimeout(() => {
      titleInitAnime();
    }, 100);
  }, []);

  return (
    <Fragment>
      <div className="container-text" ref={elemento}>
        <p className="header-title">
          <span className="hidden-letter">
            <WrappingLetters
              word="I'M CARLOS,"
              wordOptions={[{"ClassToAdd": "letter-title"}]}
            />
          </span>
          <span className="hidden-letter">
            <WrappingLetters
              word="A CREATIVE"
              wordOptions={[{"ClassToAdd": "letter-title"}]}
            />
          </span>
          <span className="hidden-letter">
            <WrappingLetters
              word="FRONT-END"
              wordOptions={[{"ClassToAdd": "letter-title"}]}
            />
          </span>
          <span className="hidden-letter">
            <WrappingLetters
              word="DEVELOPER"
              wordOptions={[{"ClassToAdd": "letter-title"}]}
            />
          </span>
        </p>
      </div>
    </Fragment>
  );
}

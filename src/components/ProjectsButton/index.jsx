import React from "react";
import { Link } from "react-router-dom";
import WrappingLetters from "wrapping-letters-react";
import { anime } from "react-anime";
import "./css/styles.css";

let easing = 'easeInOutSine';
let delay = 50;
function handleWordAnimation(easing, delay) {
  anime({
    targets: ".word_container .word__container-first-word span",
    translateY: "-111%",
    delay: anime.stagger(delay),
    easing: easing,
  });
  anime({
      duration: 1000,
    targets: ".word_container .word__container-second-word span",
    translateY: "0%",
    delay: anime.stagger(delay),
    easing: easing,
  });
}
function handleWordAnimationReverse(easing, delay) {
  anime({
    targets: ".word_container .word__container-first-word span",
    translateY: "0%",
    delay: anime.stagger(delay),
    easing: easing,
  });
  anime({
    targets: ".word_container .word__container-second-word span",
    translateY: "111%",
    delay: anime.stagger(delay),
    easing: easing,
  });
}

export default function ProjectButton() {
  return (
    <Link
      onMouseEnter={() => handleWordAnimation(easing, delay)}
      onMouseLeave={() => handleWordAnimationReverse(easing, delay)}
      to="/projects/"
      className="container-projects__button"
    >
      <div className="word_container">
        <div className="word__container-first-word">
          <WrappingLetters word="Projects" />
        </div>
        <div className="word__container-second-word">
          <WrappingLetters word="Projects" />
        </div>
      </div>
      <span className="border"></span>
    </Link>
  );
}

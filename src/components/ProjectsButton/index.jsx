import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import WrappingLetters from "wrapping-letters-react";
import { anime } from "react-anime";
import "./css/styles.css";


export default function ProjectButton() {
  const [showButton, setShowButton] = useState(false);
  
  let easing = "easeInOutSine";
  let delay = 50;

  function handleWordAnimation(easing, delay) {
    anime
      .timeline({
        easing: easing,
        duration: 1000,
      })
      .add({
        targets: ".word_container .word__container-first-word span",
        translateY: "-111%",
        delay: anime.stagger(delay, { from: "center" }),
      })
      .add(
        {
          duration: 1000,
          targets: ".word_container .word__container-second-word span",
          translateY: "-111%",
          delay: anime.stagger(delay, { from: "center" }),
        },
        0
      );
  }
  function handleWordAnimationReverse(easing, delay) {
    anime
      .timeline({
        easing: easing,
        duration: 1000,
      })
      .add({
        targets: ".word_container .word__container-first-word span",
        translateY: "0%",
        delay: anime.stagger(delay, { from: "center" }),
      })
      .add(
        {
          duration: 1000,
          targets: ".word_container .word__container-second-word span",
          translateY: "0%",
          delay: anime.stagger(delay, { from: "center" }),
        },
        0
      );
  }
  useEffect(() => {
    setTimeout(() => {
      setShowButton(true);
    }, 100);
  }, []);
  return (
    <Link
      onMouseEnter={() => handleWordAnimation(easing, delay)}
      onMouseLeave={() => handleWordAnimationReverse(easing, delay)}
      to="/projects/"
      className={`container-projects__button ${showButton ? "on" : ""}`}
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

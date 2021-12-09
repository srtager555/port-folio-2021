import React from "react";
import { PlaceHolderImage } from "../../components/PlaceHolderImage";

import "../css/styles.css";

export default function WrappingLetter() {
  return (
    <div className="container">
      <div className="section-description">
        <span className="description-textContainer">
          Wrapping Letters is a javascript library that simplifies the job of
          wrapping letters in html tags
        </span>
        <span className="description-underLine" />
      </div>
      <div className="section-information">
        <div className="section-margin">
          <h2>The problem that gave birth to this idea</h2>
          <p>
            Wrapping Letters was born by a problem of discomfort when animating
            letters, the process of wrapping each character within a label in
            addition to being tedium occupies a large part of the code, the
            longer the word, the more lines it occupies, Wrapping Letters brings
            the solution to this problem minimizing everything to a single line
            of code.
          </p>
          <h3>objective of the project</h3>
          <p>
            Stop working with the traditional tedious and long procedure for
            example:
          </p>
          <PlaceHolderImage src="https://ttager.netlify.app/img/oaAhri4.jpg"/>
          <p>
            And start simplifying the process as quickly and flexibly as
            possible like this example:
          </p>
          <PlaceHolderImage src="https://ttager.netlify.app/img/oaAhri4.jpg" />
          <h2>First stable version</h2>
          <p>
            It is expected that by the end of 2021 its first stable version will
            be available and by the beginning of 2022 a version ready for
            production
          </p>
        </div>
      </div>
    </div>
  );
}

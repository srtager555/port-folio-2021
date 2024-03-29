import React from "react";
import { Link } from "react-router-dom";
import { PlaceHolderImage } from "../../components/PlaceHolderImage";

import "../css/styles.css";

export default function Template() {
  return (
    <div className="container">
      <div className="section-description">
        <span className="description-textContainer">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          maximus elit et ex mattis elementum ut nec sem. Nam vulputate. v
        </span>
        <span className="description-underLine" />
      </div>
      <div className="section-information">
        <div className="section-margin">
          <h2>this is a title</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            maximus elit et ex mattis elementum ut nec sem. Nam vulputate.{" "}
          </p>
          <PlaceHolderImage
            src="https://ttager.netlify.app/img/oaAhri4.jpg"
            alt="provisional image"
          />
          <h3>this is a subtitle</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            maximus elit et ex mattis elementum ut nec sem. Nam vulputate.
          </p>
          <ol>
            <li>Lorem ipsum dlior sit amet</li>
            <li>Lorem ipsum dlior sit amet</li>
            <li>Lorem ipsum dlior sit amet</li>
            <li>Lorem ipsum dlior sit amet</li>
          </ol>
          <PlaceHolderImage
            src="https://ttager.netlify.app/img/oaAhri4.jpg"
            alt="provisional image"
          />
          <div className="highlighted-comment">
            <span>Lorem ipsum dolor sit amet, dolor sit amet</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            maximus elit et ex mattis{" "}
            <span className="highlighted-word">elementum</span> ut nec sem. Nam
            vulputate.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            maximus elit et ex mattis elementum ut nec sem. Nam{" "}
            <Link to="/projects/template">vulputate</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}

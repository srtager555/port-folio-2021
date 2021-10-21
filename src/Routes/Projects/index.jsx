import React from "react";
import { Link } from "react-router-dom";
import "./css/style.css";

export default function Projects({ BlogPostContext }) {
  return (
    <div className="container-projects">
      {BlogPostContext.map((p, index) => {
        if (p.show) {
          return (
            <Link to={p.link} key={"p " + index} className="container-post">
              <div className="titleContainer">
                <p className="type-project">{p.type_project}</p>
                <h3>{p.titulo}</h3>
              </div>
              <div className="imageContainer">
                <img src={p.img_tumbnail} alt="" />
              </div>
            </Link>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import './css/style.css'

export default function Projects({ BlogPostContext }) {
  return (
    <div className="container-projects">
      {BlogPostContext.map((p, index) => (
        <Link to={p.link} key={index} className="container-post">
          <div className="titleContainer">
            <p className="type-project">{p.type_project}</p>
            <h3>{p.titulo}</h3>
          </div>
          <div className="imageContainer">
            <img src={p.img} alt='' />
          </div>
        </Link>
      ))}
    </div>
  );
}

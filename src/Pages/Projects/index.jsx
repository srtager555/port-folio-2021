import React from "react";
import { Link } from "react-router-dom";
import { blogPost } from "../../Context/ContextApi";

export default function Projects() {
  console.log(blogPost)
  console.log(blogPost[0])
  return (
    <div className="container-projects">
      {blogPost.map((p, index) => (
        <Link to={p.link} key={index} className="container-post">
          <div className="imageContainer">
            <img src={p.img} alt='' />
          </div>
          <div className="titleContainer">
            <h3>{p.titulo}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

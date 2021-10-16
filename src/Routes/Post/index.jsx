import React from "react";
import { useParams } from "react-router";
import "./css/style.css";

import { InformationPages } from "../../containers/InformationPages";

export default function Post({ BlogPostContext }) {
  const { id } = useParams();
  const post = BlogPostContext.filter((blog) => blog.name === id);
  const index = BlogPostContext.findIndex((blog) => blog.name === id);
  const a = post.map((post) => (
    <div key={post.id} className="container-project">
      <div className="container-imageHeader">
        <div className="imgBox">
          <img src={post.img} alt="" />
        </div>
        <p>{post.titulo}</p>
      </div>
      <div className="description">
        <p>{post.description}</p>
      </div>
      <div className="container-content">
        <InformationPages id={index} />
      </div>
    </div>
  ));
  console.log(BlogPostContext.indexOf(post));
  console.log(index);
  console.log(post);

  return a;
}

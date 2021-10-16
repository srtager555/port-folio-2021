import React from "react";
import { useParams } from "react-router";
import "./css/style.css";

export default function Post({ BlogPostContext }) {
  const { id } = useParams();
  const post = BlogPostContext.filter((blog) => blog.id === id);
  const a = post.map((post) => (
    <div key={post.id} className="container-project">
      <div className="container-imageHeader">
        <div className="imgBox">
          <img src={post.img} alt='' />
        </div>
        <p>{post.titulo}</p>
      </div>
      <div className="description">
        <p>{post.description}</p>
      </div>
      <div className="container-content">{post.content}</div>
    </div>
  ));
  console.log(post.content);
  console.log(post);

  return a;
}

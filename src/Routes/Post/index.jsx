import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./css/style.css";
import { InformationPages } from "../../containers/InformationPages";
import { useHistory } from "react-router-dom";

function Nextpage({ BlogPostContext, index, opacity }) {
  let history = useHistory();
  const [nexPost, setNexPost] = useState(0);

  function handleScrollInit(BlogPostContext, nexPost) {
    setTimeout(() => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, 300);
    setTimeout(() => {
      history.push(`/${BlogPostContext[nexPost].link}`);
    }, 1000);
  }

  useEffect(() => {
    if (index === BlogPostContext.length - 1) {
      setNexPost(1);
    } else {
      setNexPost(index + 1);
    }
  }, []);

  return (
    <div
      onClick={() => {
        handleScrollInit(BlogPostContext, nexPost);
        opacity();
      }}
      className="nextProject"
    >
      <div className="imgBox">
        <img src={BlogPostContext[nexPost].img_next} alt="" />
      </div>
      <div className="nextProject-name">
        <span>{BlogPostContext[nexPost].titulo}</span>
      </div>
      <div className="nextProject-next">
        <span>next</span>
      </div>
    </div>
  );
}

export default function Post({ BlogPostContext }) {
  const { id } = useParams();
  const post = BlogPostContext.filter((blog) => blog.name === id);
  const index = BlogPostContext.findIndex((blog) => blog.name === id);
  const [opacity, setOpacity] = useState("");

  function handleOpacity() {
    setOpacity("off");
    setTimeout(() => {
      setOpacity("");
    }, 1500);
  }

  return (
    <React.Fragment>
      {post.map((post) => {
        console.log(post.name)
        return (
          <div key={post.name} className={`container-project ${opacity}`}>
            <div className="container-imageHeader">
              <div className="imgBox">
                <img src={post.img_header} alt="" />
              </div>
              <h1 className="title-post">{post.titulo}</h1>
            </div>
            <div className="description">
              <p>{post.description}</p>
            </div>
            <div className="container-content">
              <InformationPages id={index} />
            </div>
            <Nextpage
              opacity={handleOpacity}
              BlogPostContext={BlogPostContext}
              id={id}
              index={index}
            />
          </div>
        );
      })}
    </React.Fragment>
  );
}

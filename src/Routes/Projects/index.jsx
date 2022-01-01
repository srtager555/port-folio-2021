import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LayoutHelmet } from "../../Layouts/HelmetLayout"
import "./css/style.css"; 

export default function Projects({ BlogPostContext }) {
  const [urlSlash, setUrlSlash] = useState([]);
  const wPath = window.location.pathname;

  useEffect(() => {
    setUrlSlash([...wPath]);
  }, [wPath]);
  return (
    <LayoutHelmet
      title='Carlos && Ponce | Projects'
      description='I worked in multiple projects, check out!'
      url='https://ttager.page/projects/'
      img='null'
    >
      <div className="container-projects">
        {BlogPostContext.map((p, index) => {
          if (p.show) {
            return (
              <Link
                to={
                  urlSlash[urlSlash.length - 1] === "/"
                    ? window.location.pathname + p.link
                    : window.location.pathname + "/" + p.link
                }
                key={"p " + index}
                className="container-post"
              >
                <div className="titleContainer">
                  <p className="type-project">{p.type_project}</p>
                  <div className="title-wrapped">
                    <span>{p.titulo}</span>
                    <span>{p.titulo}</span>
                  </div>
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
    </LayoutHelmet>
  );
}

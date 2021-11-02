import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./css/style.css";
import { InformationPages } from "../../containers/InformationPages";
import { useHistory } from "react-router-dom";
import { PlaceHolderImage } from "../../components/PlaceHolderImage";

function Nextpage({ AvailableShow, index, opacity }) {
  let history = useHistory();
  const [nexPost, setNexPost] = useState(0);

  function handleScrollInit(AvailableShow, nexPost) {
    setTimeout(() => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, 300);
    setTimeout(() => {
      history.push(`/${AvailableShow[nexPost].link}`);
    }, 1000);
  }

  useEffect(() => {
    if (index === AvailableShow.length - 1) {
      setNexPost(0);
    } else {
      setNexPost(index + 1);
    }
  }, []);

  return (
    <div
      onClick={() => {
        handleScrollInit(AvailableShow, nexPost);
        opacity();
      }}
      className="nextProject"
    >
      <div className="nextProject-name">
        <span>{AvailableShow[nexPost].titulo}</span>
      </div>
      <div className="imgBox">
        <PlaceHolderImage
          src={AvailableShow[nexPost].img_next}
          alt={AvailableShow[nexPost].titulo}
        />
        {/* <img src={AvailableShow[nexPost].img_next} alt="" /> */}
      </div>
      <div className="nextProject-next">
        <span>next project</span>
        <span>next project</span>
      </div>
    </div>
  );
}

export default function Post({ BlogPostContext }) {
  const { id } = useParams();
  const AvailableShow = BlogPostContext.filter((blog) => blog.show === true);
  const post = AvailableShow.filter((blog) => blog.name === id);
  const index = AvailableShow.findIndex((blog) => blog.name === id);
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
        return (
          <div key={post.name} className={`container-project ${opacity}`}>
            <div className="container-imageHeader">
              <div className="imgBox">
                <PlaceHolderImage src={post.img_header} alt="" />
                {/* <img src={post.img_header} alt="" /> */}
              </div>
              <h1 className="title-post">{post.titulo}</h1>
            </div>
            <div className="description">
              <p>{post.description}</p>
            </div>
            <div className="container-content">
              <InformationPages index={index} AvailableShow={AvailableShow} />
            </div>
            <Nextpage
              opacity={handleOpacity}
              AvailableShow={AvailableShow}
              id={id}
              index={index}
            />
          </div>
        );
      })}
    </React.Fragment>
  );
}

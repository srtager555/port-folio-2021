import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router";
import "./css/style.css";
import { InformationPages } from "../../containers/InformationPages";
import { useHistory } from "react-router-dom";
import { PlaceHolderImage } from "../../components/PlaceHolderImage";
import { LayoutHelmet } from "../../Layouts/HelmetLayout";
import NotFound from "../NotFound";

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
      history.push(`/projects/${AvailableShow[nexPost].link}`);
    }, 1000);
  }

  useEffect(() => {
    if (index === AvailableShow.length - 1) {
      setNexPost(0);
    } else {
      setNexPost(index + 1);
    }
  }, [AvailableShow, index]);

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
  const [opacity, setOpacity] = useState("");
  const nextImage = useRef(null);
  const [found, setFound] = useState(false);

  const AvailableShow = BlogPostContext.filter((blog) => blog.show === true);
  const post = AvailableShow.filter((blog) => blog.name === id);
  const indexPost = AvailableShow.findIndex((blog) => blog.name === id);

  function handleOpacity() {
    setOpacity("off");
    setTimeout(() => {
      setOpacity("");
    }, 1500);
  }

  useEffect(() => {
    if (post.length === 0) {
      setFound(false);
    } else {
      setFound(true);
    }
  }, [AvailableShow, indexPost, post.length]);

  return (
    <React.Fragment>
      {found ? (
        post.map((post, index) => {
          return (
            <LayoutHelmet
              key={index + " " + post.name}
              title={`Carlos && Ponce | ${post.titulo}`}
              description={post.description}
              url={`https://ttager.page/projects/${post.link}`}
              img={post.img_header}
            >
              <div className={`container-project ${opacity}`}>
                <div className="container-imageHeader">
                  <div className="imgBox" ref={nextImage}>
                    <PlaceHolderImage
                      srcPC={post.img_header}
                      srcMB={post.img_header_MB}
                      title="Header Image"
                    />
                  </div>
                  <h1 className="title-post">{post.titulo}</h1>
                </div>
                <div className="description">
                  <p>{post.description}</p>
                </div>
                <div className="container-content">
                  <InformationPages
                    key={index + " pages " + post.name}
                    index={indexPost}
                    AvailableShow={AvailableShow}
                  />
                </div>
                <Nextpage
                  opacity={handleOpacity}
                  AvailableShow={AvailableShow}
                  id={id}
                  index={indexPost}
                />
              </div>
            </LayoutHelmet>
          );
        })
      ) : (
        <NotFound />
      )}
    </React.Fragment>
  );
}

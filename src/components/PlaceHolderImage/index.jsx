import React, { Fragment, useRef, useEffect, useState } from "react";

import "./style.css";

export function PlaceHolderImage({ src, alt }) {
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState(null);
  const [imageMinHeight, setImageMinHeight] = useState(null);
  const imagen = useRef(null);

  console.log(imagen);

  const css = {
    width: "100%",
    height: "100%",
    // height: imagen.current.width / 1.77777778,
    objectFit: "cover",
    opacity: loading ? 0 : 1,
    transition: "opacity 0.5s ease-in-out",
  };

  useEffect(() => {
    setImageMinHeight(imagen.current.width / 1.77777778);
  }, []);

  return (
    <Fragment>
      <div className="image-container" ref={imagen}>
        <img
          src={src}
          alt={alt}
          onLoad={() => setTimeout(() => setLoading(false), 5000)}
          onError={() => setImage(null)}
          style={css}
        />
        <div
          className="placeHolder-image"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            minHeight: imageMinHeight,
            backgroundColor: "rgba(0,0,0, 0.1)",
            color: "rgba(0,0,0, 0.2)",
            textTransform: 'uppercase',
            opacity: loading ? "1" : "0",
            transition: "background-color 0.5s ease-in-out",
            zIndex: 1,
          }}
        >
          Loading...
        </div>
      </div>
    </Fragment>
  );
}

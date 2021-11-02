import React, { Fragment } from "react";

import "./style.css";

export function PlaceHolderImage({ src, alt }) {
  const [loading, setLoading] = React.useState(true);
  const [image, setImage] = React.useState(null);

  return (
    <Fragment>
      <div className="image-container">
        <img
          src={src}
          alt={alt}
          onLoad={() => setTimeout(() => setLoading(false), 1000)}
          onError={() => setImage(null)}
          style={{
            width: "100%",
            height: "100%",
            opacity: loading ? 0 : 1,
            transition: "opacity 0.5s ease-in-out",
          }}
        />
        <div
          className="placeHolder-image"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: loading ? "rgba(0,0,0, 0.1)" : "transparent",
            transition: "background-color 0.5s ease-in-out",
            zIndex: 1,
          }}
        ></div>
      </div>
    </Fragment>
  );
}

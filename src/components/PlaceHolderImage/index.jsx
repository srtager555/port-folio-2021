import React, { Fragment } from "react";

import "./style.css";

export function PlaceHolderImage({ src, alt }) {
  const [loading, setLoading] = React.useState(true);
  const [image, setImage] = React.useState(null);

  const css = {
    width: "100%",
    height: "100%",
    opacity: loading ? 0 : 1,
    transition: "opacity 0.5s ease-in-out",
  };

  return (
    <Fragment>
      <div className="image-container">
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
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0, 0.1)",
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

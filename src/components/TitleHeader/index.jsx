import React, { Fragment } from "react";
import "./css/styles.css";

export default function TittleHeader() {
  return (
    <Fragment>
      <div className="container-text">
        <p className="header-title">
          I'M CARLOS<span className="little-comma">,</span> A CREATIVE FRONT-END
          DEVELOPER
        </p>
        <span className="border"></span>
      </div>
    </Fragment>
  );
}

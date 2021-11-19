import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

export function LayoutHelmet({ children, title, description, url, img }) {
  return (
    <Fragment>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={url} />
        <meta
          property="og:image"
          content={img}
        />
      </Helmet>
      {children}
    </Fragment>
  );
}

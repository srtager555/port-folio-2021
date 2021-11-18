import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

export function helmet({ Children }) {
  return (
    <Fragment>
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Helmet>
      {Children}
    </Fragment>
  );
}

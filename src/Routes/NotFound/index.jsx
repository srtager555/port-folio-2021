import React from "react";
import { LayoutHelmet } from "../../Layouts/HelmetLayout";
import { Link } from "react-router-dom";
import "./css/style.css";

export default function NotFound() {
  return (
    <LayoutHelmet
      title="Not Found :( | 404"
      description="Apparently you misspelled the url because there is nothing here"
    >
      <div className="container-404">
        <div className="card-404">
          <h1>
            <span>error</span>404
          </h1>
          <div className="card-404-buttons">
            <Link to="/">Go to home</Link>
            <Link to="/projects">Go to projects</Link>
          </div>
          <span>path: {window.location.pathname}</span>
          <span>Maybe you were wrong or the post was lost :3</span>
        </div>
      </div>
    </LayoutHelmet>
  );
}

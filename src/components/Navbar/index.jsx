import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { ImGithub, ImLinkedin, ImBehance } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";

import "./css/styles.css";

export default function Navbar() {
  const [menuInformation, setMenuInformation] = useState("");
  const [windowWithSize, setWindowWithSize] = useState("32px");

  function handleActiveMenu() {
    if (menuInformation === "") {
      setMenuInformation("active");
    } else {
      setMenuInformation("");
    }
  }
  function handleReturnButton() {
    if (window.location.pathname === "/") {
      return "";
    } else if (
      window.location.pathname === "/projects/" ||
      window.location.pathname === "/projects" 
    ) {
      return "/";
    } else if (window.location.pathname !== "/projects/") {
      return "/projects/";
    }
  }
  function handleSizeWindow() {
    if (window.innerWidth > 1080) {
      setWindowWithSize("128px");
    } else if (window.innerWidth > 768) {
      setWindowWithSize("96px");
    } else if (window.innerWidth > 360) {
      setWindowWithSize("64px");
    } else {
      setWindowWithSize("32px");
    }
  }
  useEffect(() => {
    handleSizeWindow();
  }, []);
  useEffect(() => {
    window.addEventListener("resize", handleSizeWindow);
    return () => {
      window.removeEventListener("resize", handleSizeWindow);
    };
  });

  return (
    <Fragment>
      <div className="container-menu_options">
        <Link to={handleReturnButton} className="bx-logo">
          <h1>&&</h1>
        </Link>
      </div>
    </Fragment>
  );
}

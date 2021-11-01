import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./css/styles.css";

export default function Navbar() {
  const [menuInformation, setMenuInformation] = useState('')

  function handleActiveMenu() {
    if (menuInformation === '') {
      setMenuInformation('active')
    } else {
      setMenuInformation('')
    }
  }
  function handleReturnButton() {
    if (window.location.pathname === '/') {
      return ''
    } else if (window.location.pathname === '/projects') {
      return '/'
    } else if (window.location.pathname !== '/projects/') {
      return '/projects'
    }
  }
  return (
    <Fragment>
      <div className="container-menu_options">
        <Link to={handleReturnButton} className="bx-logo">
          <h1>&&</h1>
        </Link >
        <div className={`menu-button ${menuInformation}`} onClick={handleActiveMenu}>
          <div className="circle-border border-1">
          </div>
          <div className="container-text">
            <span className="menu-title Open">
              Open
            </span>
            <span className="menu-title menu">
              Menu
            </span>
            <span className="menu-title menu">
              Close
            </span>
          </div>
        </div>
      </div>
      <div className={`container-menu_information ${menuInformation}`}>
        <div className="background-blur">
          <div className="filter" />
        </div>
        <div className="menu-links">
          <span>contact</span>
          <span>linkedin</span>
          <span>github</span>
          <span>credits</span>
        </div>
        <div className="container-form">
          <form></form>
        </div>
      </div>
    </Fragment>
  );
}

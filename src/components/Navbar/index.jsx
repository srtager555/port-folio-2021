import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./css/styles.css";

export default function Navbar() {
  const [menuInformation, setMenuInformation] = useState('')
  function handleActiveMenu (){
    if(menuInformation === ''){
      setMenuInformation('active')
    } else {
      setMenuInformation('')
    }
  } 
  return (
    <Fragment>
      <div className="container-menu_options">
        <Link to='/' className="bx-logo">
          <h1>&&</h1>
        </Link >
        <div className={`menu-button ${menuInformation}`} onClick={handleActiveMenu}>
          <span className="menuLine menuLine-1"></span>
          <span className="menuLine menuLine-2"></span>
          <span className="menuLine menuLine-3"></span>
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

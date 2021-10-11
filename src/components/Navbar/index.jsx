import React, {Fragment} from "react";
import './css/styles.css'

export default function Navbar() {
  return (
    <Fragment>
      <div className="container-menu_options">
        <div className="bx-logo">
          <h1>&&</h1>
        </div>
        <div className="menu-button">
          <span className="menuLine menuLine-1"></span>
          <span className="menuLine menuLine-2"></span>
          <span className="menuLine menuLine-3"></span>
        </div>
      </div>
      <div className="container-menu_information">
        <span>contact</span>
        <span>linkedin</span>
        <span>github</span>
        <span>credits</span>
        <div className="container-form">
            <form></form>
        </div>
      </div>
    </Fragment>
  );
}

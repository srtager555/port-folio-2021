import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { ImGithub, ImLinkedin, ImBehance } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";

import "./css/styles.css";

export default function Navbar() {
  const [menuInformation, setMenuInformation] = useState('')
  const [windowWithSize, setWindowWithSize] = useState('32px')

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
  function handleSizeWindow() {
    if (window.innerWidth > 1080) {
      setWindowWithSize('128px')
    } else if (window.innerWidth > 768) {
      setWindowWithSize('96px')
    } else if (window.innerWidth > 360) {
      setWindowWithSize('64px')
    } else {
      setWindowWithSize('32px')
    }
  }
  useEffect(() => {
    handleSizeWindow()
  }, [])
  useEffect(() => {
    window.addEventListener('resize', handleSizeWindow)
    return () => {
      window.removeEventListener('resize', handleSizeWindow)
    }
  })

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
          <a href="mailto:skarletst5@gmail.com">
            <AiOutlineMail size={windowWithSize} />
          </a>
          <a href="https://github.com/Carlos-And-Ponce">
            <ImGithub size={windowWithSize} />
          </a>
          <a href="https://www.linkedin.com/in/srtager555/">
            <ImLinkedin size={windowWithSize} />
          </a>
          <a href="https://www.behance.net/carlosponce10">
            <ImBehance size={windowWithSize} />
          </a>
        </div>
        <div className="container-form">
          <form></form>
        </div>
      </div>
    </Fragment>
  );
}

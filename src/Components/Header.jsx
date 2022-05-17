import React from 'react';
import Logo from "../Assets/Logo.svg";
import LogoActive from '../Assets/LogoActive.svg';
import {Link} from "react-router-dom";
import '../Stylesheets/Header.scss';

export const Header = () => {
  return (
    <div className="nav-wrapper" id="nav-wrapper">
      <nav className="navbar">
        <div className="logo">
          <a href="/" className="invert-target">
            <img className="logo1" src={Logo} alt="logo" width="80px" height="80px" align="center"/>
            <img className="logo2" src={LogoActive} alt="logo" width="80px" height="80px" align="center"/>
          </a>
        </div>
        <ul className="menu">
          <li className="menu-item" id="work-menu-item"><Link to="/">
            <h3>Work</h3>
          </Link></li>
          <li className="menu-item" id="play-menu-item"><Link to="/playground">
            <h3>Play</h3>
          </Link></li>
          <li className="menu-item" id="about-menu-item"><Link to="/about">
            <h3>About</h3>
          </Link></li>

          <li className="menu-item"><Link to="/">
            <h3>Resume</h3>
          </Link></li>
        </ul>
      </nav>
    </div>

  )
}
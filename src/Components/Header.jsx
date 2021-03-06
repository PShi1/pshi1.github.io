import React from 'react';
import Logo from "../Assets/HeaderImages/Logo.svg";
import LogoActive from '../Assets/HeaderImages/LogoActive.svg';
import LogoLight from '../Assets/HeaderImages/LogoLight.svg';
import LogoLightActive from '../Assets/HeaderImages/LogoLightActive.svg';
import {Link} from "react-router-dom";
import '../Stylesheets/Header.scss';

export const Header = () => {
  return (
    <div className="nav-wrapper" id="nav-wrapper">
      <nav className="navbar">
        <div className="logo">
          <a href="/" className="">
            <div className="invert-target">
              <img className="logo1" id="logo" src={Logo} alt="logo" width="80px" height="80px" align="center"/>
              <img className="logo2" id="logo" src={LogoActive} alt="logo" width="80px" height="80px" align="center"/>
            </div>
            <div className="">
              <img className="logo1" id="logo-light" src={LogoLight} alt="logo" width="80px" height="80px" align="center"/>
              <img className="logo2" id="logo-light" src={LogoLightActive} alt="logo" width="80px" height="80px" align="center"/>
            </div>
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
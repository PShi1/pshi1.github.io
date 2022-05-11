import React from 'react';
import Logo from "../Assets/Logo.svg";
import {Link} from "react-router-dom";
import '../Stylesheets/Header.scss';

export const Header = () => {
  return (
    <div className="nav-wrapper" id="nav-wrapper">
      <nav className="navbar">
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="logo" width="80px" height="80px" align="center"/>
          </a>
        </div>
        <ul className="menu">
          <li className="menu-item"><Link to="/">
            <h3>WORK</h3>
          </Link></li>
          <li className="menu-item"><Link to="/playground">
            <h3>PLAY</h3>
          </Link></li>
          <li className="menu-item"><Link to="/about">
            <h3>ABOUT</h3>
          </Link></li>

          <li className="menu-item"><Link to="/">
            <h3>RESUME</h3>
          </Link></li>
        </ul>
      </nav>
    </div>

  )
}
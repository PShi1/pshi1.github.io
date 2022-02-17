import React from 'react';
import logo from "../Assets/coffee-cup 1.svg";
import {Link} from "react-router-dom";
import '../Stylesheets/Header.scss';

export const Header = () => {
  return (
    <div className="nav-wrapper">
      <nav className="navbar">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="logo" width="80px" height="80px" align="center"/>
          </a>
        </div>
        <ul className="menu">
          <li className="menu-item"><Link to="/">
            <p className="header-font">Work</p>
          </Link></li>
          <li className="menu-item"><Link to="/about">
            <p className="header-font">About</p>
          </Link></li>
          <li className="menu-item"><Link to="/playground">
            <p className="header-font">Playground</p>
          </Link></li>
          <div className="secondary-button menu-item">
            <p className="header-font">Resume</p>
          </div>
        </ul>
      </nav>
    </div>

  )
}
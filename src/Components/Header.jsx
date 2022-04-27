import React from 'react';
import logo from "../Assets/shapeLogo.svg";
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
            <p className="header-font">Work.</p>
          </Link></li>
          <li className="menu-item"><Link to="/playground">
            <p className="header-font">Play.</p>
          </Link></li>
          <li className="menu-item"><Link to="/about">
            <p className="header-font">About.</p>
          </Link></li>

          <li className="menu-item"><Link to="/">
            <p className="header-font">Resume.</p>
          </Link></li>
        </ul>
      </nav>
    </div>

  )
}
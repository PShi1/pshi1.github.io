import React from 'react';
import logo from "../Assets/shapeLogo.svg";
import {Link} from "react-router-dom";
import '../Stylesheets/Header.scss';

export const Header = () => {
  return (
    <div className="nav-wrapper" id="nav-wrapper">
      <nav className="navbar">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="logo" width="80px" height="80px" align="center"/>
          </a>
        </div>
        <ul className="menu">
          <li className="menu-item"><Link to="/">
            <h3>Work.</h3>
          </Link></li>
          <li className="menu-item"><Link to="/playground">
            <h3>Play.</h3>
          </Link></li>
          <li className="menu-item"><Link to="/about">
            <h3>About.</h3>
          </Link></li>

          <li className="menu-item"><Link to="/">
            <h3>Resume.</h3>
          </Link></li>
        </ul>
      </nav>
    </div>

  )
}
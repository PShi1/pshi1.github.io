import React, {useEffect} from 'react';
import Logo from "../Assets/HeaderImages/Logo.svg";
import LogoActive from '../Assets/HeaderImages/LogoActive.svg';
import LogoLight from '../Assets/HeaderImages/LogoLight.svg';
import LogoLightActive from '../Assets/HeaderImages/LogoLightActive.svg';
import {Link} from "react-router-dom";
import '../Stylesheets/Header.scss';

export const Header = () => {

  useEffect(() => {
    let lastScrollTop = window.scrollTop;

    window.addEventListener("scroll", function(){
      let st = document.documentElement.scrollTop;
      let el = document.getElementById("nav-wrapper");
      // Scroll is at the top
      if (st < 30) {
        if (!el.classList.contains("active")) {
          el.classList.add("active");
        }
      }
      // Scrolling down, hide navbar
      else if (st > lastScrollTop){
        if (el.classList.contains("active")) {
          el.classList.remove("active");
        }
      }
      // Scrolling up, show the navbar
      else {
        if (!el.classList.contains("active")) {
          el.classList.add("active");
        }
      }
      lastScrollTop = st <= 0 ? 0 : st;
    }, false);
  }, [])

  return (
    <div className="nav-wrapper active" id="nav-wrapper">
      <nav className="navbar" id="navbar-inner">
        <div className="logo">
          <a href="/#/work" className="">
            <div className="invert-target">
              <img className="logo1" id="logo" src={Logo} alt="logo" width="80px" height="80px" align="center"/>
              <img className="logo2" id="logo" src={LogoActive} alt="logo" width="80px" height="80px" align="center"/>
            </div>
            <div className="">
              <img className="logo1" id="logo-light" src={LogoLight} alt="logo" width="80px" height="80px"
                   align="center"/>
              <img className="logo2" id="logo-light" src={LogoLightActive} alt="logo" width="80px" height="80px"
                   align="center"/>
            </div>
          </a>
        </div>
        <ul className="menu">
          <li className="menu-item" id="work-menu-item"><Link to="/work">
            <h3>Work</h3>
          </Link></li>
          <li className="menu-item" id="play-menu-item"><Link to="/playground">
            <h3>Play</h3>
          </Link></li>
          <li className="menu-item" id="about-menu-item"><Link to="/about">
            <h3>About</h3>
          </Link></li>

          <li className="menu-item"><a href="https://drive.google.com/file/d/1Os3AgCdpkwbxlT7rmx8QqjDRnoXxm1tj/view"
                                       target="_blank">
            <h3>Resume</h3>
          </a></li>
        </ul>
      </nav>
    </div>

  )
}
import React from 'react';
import '../Stylesheets/Footer.scss'
import LinkedinIcon from "../Assets/LinkedinIcon.svg"
import MailIcon from "../Assets/MailIcon.svg";
import MailIconDark from '../Assets/AccessPageImages/MailIconDark.svg';
import LinkedinIconDark from '../Assets/AccessPageImages/LinkedinIconDark.svg';

export const Footer = () => {
  const redirectLinkedin = () => {
    window.open("https://www.linkedin.com/in/emmalili/", "_blank");
  }

  const copyEmail = () => {
    navigator.clipboard.writeText("uxemmali@gmail.com");
  }

  return (
    <div className="footer" id="footer">
      <div className="center-column">
        <h2 className="large-text"> LET'S CREATE SOMETHING AMAZING TOGETHER. </h2>
        <div className="image-container">
          <img className="footer-icon" id="mail-icon" src={MailIcon} alt="email" onClick={copyEmail}/>
          <img className="footer-icon" id="mail-icon-dark" src={MailIconDark} alt="email" onClick={copyEmail}/>
          <img className="footer-icon" id="linkedin-icon" src={LinkedinIcon} alt="linkedin" onClick={redirectLinkedin}/>
          <img className="footer-icon" id="linkedin-icon-dark" src={LinkedinIconDark} alt="email" onClick={redirectLinkedin}/>
        </div>
        <p className="medium-text"> designed & coded with ❤️ and lots of ☕️ </p>
        <p className="small-text"> Emma Li © 2022 All Rights Reserved </p>
      </div>
    </div>
  )
}
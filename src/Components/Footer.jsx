import React from 'react';
import '../Stylesheets/Footer.scss'
import Linkedin from "../Assets/Linkedin.svg"
import LinkedinActive from '../Assets/LinkedinActive.svg'
import Mail from "../Assets/Mail.svg";
import MailActive from '../Assets/MailActive.svg'
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
        <h2 className="large-text"> Let's connect for any opportunities! </h2>
        <div className="image-container">
          <img className="footer-icon" id="linkedin-icon" src={Linkedin} alt="linkedin" onClick={redirectLinkedin}/>
          <img className="footer-icon" id="linkedin-icon-dark" src={LinkedinIconDark} alt="email" onClick={redirectLinkedin}/>
          <img className="footer-icon" id="mail-icon" src={Mail} alt="email" onClick={copyEmail}/>
          <img className="footer-icon" id="mail-icon-dark" src={MailIconDark} alt="email" onClick={copyEmail}/>
        </div>
        <p className="medium-text"> Designed & coded with ❤️ and lots of ☕️ </p>
        <p className="small-text"> Emma Li © 2022 All Rights Reserved </p>
      </div>
    </div>
  )
}
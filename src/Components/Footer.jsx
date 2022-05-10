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
        <h2 className="large-text"> Let's grab a cup of coffee. </h2>
        <div className="image-container">
          <img id="mail-icon" src={MailIcon} alt="email" onClick={copyEmail}/>
          <img id="mail-icon-dark" src={MailIconDark} alt="email" onClick={copyEmail}/>
          <img id="linkedin-icon" src={LinkedinIcon} alt="linkedin" onClick={redirectLinkedin}/>
          <img id="linkedin-icon-dark" src={LinkedinIconDark} alt="email" onClick={redirectLinkedin}/>
        </div>
        <p className="medium-text"> designed & coded with ❤️ and lots of ☕️ </p>
        <p className="small-text"> Emma Li © 2022 All Rights Reserved </p>
      </div>
    </div>
  )
}
import React from 'react';
import '../Stylesheets/Footer.scss'
import LinkedinIcon from "../Assets/LinkedinIcon.svg"
import MailIcon from "../Assets/MailIcon.svg"

export const Footer = () => {
  const redirectLinkedin = () => {
    window.open("https://www.linkedin.com/in/emmalili/", "_blank");
  }

  const copyEmail = () => {
    navigator.clipboard.writeText("uxemmali@gmail.com");
  }

  return (
    <div className="footer">
      <div className="center-column">
        <p className="large-text"> Let's grab a cup of coffee. </p>
        <div className="image-container">
          <img src={MailIcon} alt="email" onClick={copyEmail}/>
          <img src={LinkedinIcon} alt="linkedin" onClick={redirectLinkedin}/>
        </div>
        <p className="medium-text"> designed & coded with ❤️ and lots of ☕️ </p>
        <p className="small-text"> Emma Li © 2022 All Rights Reserved </p>
      </div>
    </div>
  )
}
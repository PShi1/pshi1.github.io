import React from 'react';
import '../Stylesheets/Footer.scss'
import Coffee from '../Assets/CoffeeCupImage.svg'
import InstagramIcon from "../Assets/InstagramIcon.svg"
import LinkedinIcon from "../Assets/LinkedinIcon.svg"
import MailIcon from "../Assets/MailIcon.svg"

export const Footer = () => {
  const redirectInstagram = () => {
    window.open("https://www.instagram.com/emmalili_/", "_blank");
  }

  const redirectLinkedin = () => {
    window.open("https://www.linkedin.com/in/emmalili/", "_blank");
  }

  const redirectEmail = () => {
    window.open("mailto:uxemmali@gmail.com","_blank");
  }

  return (
    <div className="footer">
      <div className="left-column">
        <img src={Coffee} alt="coffee"/>
      </div>
      <div className="center-column">
        <p className="large-text"> Let's chat! </p>
        <p className="medium-text"> Designed & coded with 💜 and lots of ☕️ </p>
        <p className="small-text"> Emma Li @ 2021 All Rights Reserved </p>
      </div>
      <div className="right-column">
        <img src={InstagramIcon} alt="instagram" onClick={redirectInstagram}/>
        <img src={LinkedinIcon} alt="linkedin" onClick={redirectLinkedin}/>
        <img src={MailIcon} alt="email" onClick={redirectEmail}/>
      </div>
    </div>
  )
}
import React, {useEffect} from 'react';
import '../Stylesheets/Footer.scss'
import Linkedin from "../Assets/FooterImages/Linkedin.svg"
import LinkedinActive from '../Assets/FooterImages/LinkedinActive.svg'
import Mail from "../Assets/FooterImages/Mail.svg";
import MailActive from '../Assets/FooterImages/MailActive.svg'
import MailLight from '../Assets/FooterImages/MailLight.svg';
import LinkedinLight from '../Assets/FooterImages/LinkedinLight.svg';
import MailLightActive from "../Assets/FooterImages/MailLightActive.svg";
import LinkedinActiveLight from '../Assets/FooterImages/LinkedinLightActive.svg';
import {copyEmail} from "../App";

export const Footer = () => {
  useEffect(() => {
    let elements = document.getElementsByClassName('typewrite-footer');
    for (let i = 0; i < elements.length; i++) {
      let toRotate = "[\"any opportunities!\", \"a coffee chat!\", \"an ambitious project!\",\n" +
        "              \"any questions!\", \"some genuine feedback!\"]";
      let period = "2000"
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    let css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite-footer > .wrap { border-right: 0.08em solid #000}";
    document.body.appendChild(css);
  }, []);


  const redirectLinkedin = () => {
    window.open("https://www.linkedin.com/in/emmalili/", "_blank");
  }

  let TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };

  TxtType.prototype.tick = function() {
    let i = this.loopNum % this.toRotate.length;
    let fullTxt = this.toRotate[i];
    let delta = 100; // This sets the normal time per char
    if (this.isDeleting) {
      delta = 50; // This sets the time per char deletion
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap large-text colour-gradient">'+this.txt+'</span>';

    let that = this;

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function() {
      that.tick();
    }, delta);
  };

  return (
    <div className="footer" id="footer">
      <div className="center-column margin-bottom-40px">
        <div className="left-column">
          <p className="large-text margin-bottom-24px"> Let's connect for </p>
          <div className="typewrite-footer"/>
          <p className="medium-text"> Designed & coded with ❤️ and lots of ☕️ </p>
          <p className="small-text"> Emma Li © 2022 All Rights Reserved </p>
        </div>

        <div className="right-column">
          <div className="image-container">
            <div className="logo">
              <img className="footer-icon logo1 invert-target" id="linkedin-icon" src={Linkedin} alt="linkedin" onClick={redirectLinkedin}/>
              <img className="footer-icon logo2 invert-target" id="linkedin-icon" src={LinkedinActive} alt="linkedin" onClick={redirectLinkedin}/>
              <img className="footer-icon logo1" id="linkedin-icon-light" src={LinkedinLight} alt="linkedin" onClick={redirectLinkedin}/>
              <img className="footer-icon logo2" id="linkedin-icon-light" src={LinkedinActiveLight} alt="linkedin" onClick={redirectLinkedin}/>
            </div>
            <div className="logo">
              <img className="footer-icon logo1 invert-target" id="mail-icon" src={Mail} alt="email" onClick={() => copyEmail("footer")}/>
              <img className="footer-icon logo2 invert-target" id="mail-icon" src={MailActive} alt="email" onClick={() => copyEmail("footer")}/>
              <img className="footer-icon logo1" id="mail-icon-light" src={MailLight} alt="email" onClick={() => copyEmail("footer")}/>
              <img className="footer-icon logo2" id="mail-icon-light" src={MailLightActive} alt="email" onClick={() => copyEmail("footer")}/>
            </div>
            <p className="cs-body" id="email-copied">Copied!</p>

          </div>
        </div>
      </div>
    </div>
  )
}
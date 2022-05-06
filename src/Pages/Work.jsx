import React, {useEffect} from 'react';
import '../Stylesheets/Work.scss';
import AccessCard from "../Assets/AccessCard.svg";
import AccessCardActive from '../Assets/AccessCardActive.svg';
import SponsorCircleCard from '../Assets/SponsorCircleCard.svg';
import SponsorCircleCardActive from '../Assets/SponsorCircleCardActive.svg'
import KnowbieCard from '../Assets/KnowbieCard.svg';
import KnowbieCardActive from '../Assets/KnowbieCardActive.svg'
import AprioCard from '../Assets/AprioCard.svg';
import AprioCardActive from '../Assets/AprioCardActive.svg'
import PivotCard from '../Assets/PivotCard.svg';
import PivotCardActive from '../Assets/PivotCardActive.svg'
import FinWellCard from '../Assets/FinWellCard.svg';
import FinWellCardActive from '../Assets/FinWellCardActive.svg';

/**
 * Page component for the main page
 */
export const Work = () => {
  // Start of Typewriter - https://codepen.io/hi-im-si/pen/ALgzqo
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

    this.el.innerHTML = '<span class="wrap b1-light colour-gradient">'+this.txt+'</span>';

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

  useEffect(() => {

    window.scrollTo(0,0);

    let elements = document.getElementsByClassName('typewrite');
    for (let i = 0; i < elements.length; i++) {
      let toRotate = "[\"a life long learner.\", \"an engaging story teller.\", \"a driven entrepreneur.\",\n" +
        "              \"a curious researcher.\", \"an imaginative problem solver.\", \"a technology enthusiast.\", \"an accessibility advocate.\"]";
      let period = "2000"
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    let css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
  }, []);

  // End of Typewriter

  const scrollToCaseStudies = () => {
    let element = document.getElementById("case-studies-container");
    if (element) {
      element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
  }

  return (
      <div className="background">
        <div className="work-page">
          <div className="header-outer-div">
            <div className="row">
              <div className="header-area">
                <h1>Hello.</h1>
              </div>
            </div>

            <div>
              <p className="b1-light">I'm Emma, a coffee-infused <strong className="yellow-font-colour">Product Designer</strong> based in <strong className="yellow-font-colour">Vancouver.</strong> 🍁</p>
              <p className="b1-light">Currently building digital products @ Moken Agency to empower founders to achieve their wildest dreams. </p>
            </div>
            <div className="typewriter-wrapper-div">
              <p className="typewriter-prefix b1-light">I'm also</p>
              <div className="typewrite"/>
            </div>

            <div id="scroll-down" onClick={() => scrollToCaseStudies()}>
              <span id="scroll-title" className="b4">
                EXPLORE SELECTED CASE STUDIES
              </span>
            </div>
          </div>

          <div id="case-studies-container">
            <a className="cards-div" href="/access">
              <img className="first-active" src={AccessCard} alt=""/>
              <img className="first-inactive" src={AccessCardActive} alt=""/>
            </a>
            <a className="cards-div" href="/sponsorcircle">
              <img className="first-active" src={SponsorCircleCard} alt=""/>
              <img className="first-inactive" src={SponsorCircleCardActive} alt=""/>
            </a>
            <a className="cards-div" href="/knowbie">
              <img className="first-active" src={KnowbieCard} alt=""/>
              <img className="first-inactive" src={KnowbieCardActive} alt=""/>
            </a>
            <a className="cards-div" href="/aprio">
              <img className="first-active" src={AprioCard} alt=""/>
              <img className="first-inactive" src={AprioCardActive} alt=""/>
            </a>
            <a className="cards-div" href="/pivot">
              <img className="first-active" src={PivotCard} alt=""/>
              <img className="first-inactive" src={PivotCardActive} alt=""/>
            </a>
            <a className="cards-div" href="/finwell">
              <img className="first-active" src={FinWellCard} alt=""/>
              <img className="first-inactive" src={FinWellCardActive} alt=""/>
            </a>
          </div>
        </div>
      </div>
    )
}
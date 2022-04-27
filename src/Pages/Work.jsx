import React from 'react';
import '../Stylesheets/Work.scss';
import FinWellImage from '../Assets/FinWellImage.svg'
import RechargeImage from '../Assets/RechargeImage.svg'
import {CaseStudyCard} from "../Components/CaseStudyCard";

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

    this.el.innerHTML = '<span class="wrap body-font">'+this.txt+'</span>';

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

  window.onload = () => {
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
  };
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
                <h1 className="welcome-header">Hello.</h1>
              </div>
            </div>

            <div>
              <p className="body-font">I'm Emma, a coffee-infused <strong>Product Designer</strong> based in Vancouver. 🍁</p>
              <p className="body-font">Currently building digital products @ <strong> Moken Agency </strong> to empower founders to achieve their wildest dreams. </p>
            </div>
            <div className="typewriter-wrapper-div">
              <p className="typewriter-prefix body-font">I'm also</p>
              <div className="typewrite"/>
            </div>

            <div id="scroll-down" onClick={() => scrollToCaseStudies()}>
              <span id="scroll-title">
                EXPLORE SELECTED CASE STUDIES
              </span>
            </div>
          </div>

          <div id="case-studies-container">
            <div className="half-width">
              <CaseStudyCard unFocusedColour="#0B2CB8" opacity="0.15" headerColour="#0B2CB8" header="MOBILE APPLICATION | SOLO | 10 MIN READ" title="FinWell"
                             description="Using AI to build mindfulness and help control impulse spending by letting users reflect on their purchases over time."
                             cardID="finwell-case-study-card" redirectLink="/finwell" image={FinWellImage}/>
            </div>

            <div className="half-width">
              <CaseStudyCard unFocusedColour="#00796B" opacity="0.2" headerColour="#00796B" header="WEB APPLICATION | SOLO | 10 MIN READ" title="Pivot"
                             description="Leveraging mentorship and community to support career changers pivoting to their dream careers."
                             cardID="pivot-case-study-card" redirectLink="/pivot" image={FinWellImage}/>
            </div>

            <div className="half-width">
              <CaseStudyCard unFocusedColour="#FFD4E6" opacity="0.4" headerColour="#CA3273" header="WEB & MOBILE APPLICATION | TEAM | 5 MIN READ" title="Sponsor Circle Internship"
                             description="Redesigning a checkout flow for a sponsorship platform."
                             cardID="sponsor-circle-case-study-card" redirectLink="/sponsorcircle" image={FinWellImage}/>
            </div>

            <div className="half-width">
              <CaseStudyCard unFocusedColour="#DDD3FC" opacity="0.5" headerColour="#7043AC" header="WEB APPLICATION | TEAM | 10 MIN READ" title="Recharge"
                             description="Reinventing what it means to take a break-by recommending break time activities based on preferences and goals."
                             cardID="recharge-case-study-card" redirectLink="/recharge" image={RechargeImage}/>
            </div>

          </div>
        </div>
      </div>
    )
}
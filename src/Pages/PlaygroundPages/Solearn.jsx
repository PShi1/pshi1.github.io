import React, {useEffect} from 'react';
import {setPageToLightMode, setupScrollBar, turnAllMenuStatesOff} from "../../App";
import "../../Stylesheets/PlaygroundStylesheets/Solearn.scss"
import SolearnHeaderImage from '../../Assets/SolearnPageAssets/SolearnHeaderImage.png';
import SolearnFinalImage from '../../Assets/SolearnPageAssets/SolearnFinalImage.png';
import UserResearch from '../../Assets/SolearnPageAssets/UserResearch.png';
import Brainstorming from '../../Assets/SolearnPageAssets/Brainstorming.png';
import AnchorLinks from "../../Components/AnchorLinks";
import {RedirectLinks} from "../../Components/RedirectLinks";

export const Solearn = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    setPageToLightMode();
    document.title = "Emma Li | Solearn";
    setupScrollBar("#6FC7FF");
    turnAllMenuStatesOff();
    highlight();
  }, []);

  /**
   * Highlights words that are preset, when they're visible on the screen
   */
  const highlight = () => {
    let topOffset = 100;
    let scroll = window.scrollY + topOffset;
    let innerHeight = window.innerHeight - topOffset;
    let screenBottom = innerHeight;

    let elements = document.getElementsByClassName("highlight");

    window.addEventListener("scroll", () => {
      scroll = window.scrollY;
      screenBottom = scroll + innerHeight;

      for (const element of elements) {
        // If element is on the screen ...
        if (element.offsetTop < screenBottom - topOffset && element.offsetTop > scroll + topOffset) {
          if (!element.classList.contains("active")) {
            element.classList.add("active");
          }
        } else if (element.offsetTop > screenBottom + 150 || element.offsetTop < scroll - 150) {
          if (element.classList.contains("active")) {
            element.classList.remove("active");
          }
        }
      }
    })
  }

  const scrollToOverview = () => {
    let el = document.getElementById("overview-area");
    if (el) {
      el.scrollIntoView({behavior: "smooth"});
    }
  }

  const redirectToPrototype = () => {
    let el = document.getElementById("final-prototype-title");
    if (el) {
      el.scrollIntoView({behavior: "smooth"});
    }
  }

  return (
    <div className="solearn-page">
      <AnchorLinks callerType="solearn"/>
      <img className="image margin-bottom-40px anchor-area clickable" src={SolearnHeaderImage} alt=""
           id="header-image"
           onClick={() => {
             scrollToOverview()
           }}/>

      <div className="overview anchor-area margin-bottom-160px" id="overview-area">
        <h3 className="cs-title mid-align-title margin-bottom-40px" id="overview-title">Overview</h3>

        <h2 className="cs-manrope margin-bottom-80px">
          A collaborative project completed for the NASA + Adobe XD Creative Jam, winning an honourable mention (12th
          place) out of 300 submissions.</h2>

        <h3 className="cs-subtitle-2 margin-bottom-12px" id="the-prompt-title">The Prompt</h3>
        <p className="cs-body margin-bottom-80px"><strong className="highlight">“Help kids (11-13 years old) learn more
          about space exploration by teaching about a single or multiple NASA JPL missions.</strong> Design a
          third-party Android tablet or Apple iPad app that provides an engaging way for kids to learn and share space
          stories, facts, and topics.”</p>

        <h3 className="cs-subtitle-2 margin-bottom-12px" id="the-solution-title">The Solution</h3>
        <p className="cs-body">Solearn is an educational app targeted toward kids aged 11-13. It aims to gamify space
          education and make learning about space a fun and competitive social experience that kids will want to keep
          revisiting.
        </p>
        <p className="cs-body">It has two main components:
        </p>
        <ol className="margin-bottom-80px">
          <li className="cs-body">The Planetarium is a collection of information about different planets and parts of
            our galaxy. It contains facts, details, and information about various JPL missions -> <strong
              className="highlight">learning about space facts and stories engagingly.
            </strong></li>
          <li className="cs-body">The Robot Stadium is a fun and competitive online game trivia game that matches you up
            with a friend to compete for a spot on the leaderboards -> <strong
              className="highlight">testing and sharing your knowledge about space socially.
            </strong>
          </li>
        </ol>

        <h3 className="cs-subtitle-2 margin-bottom-12px" id="my-contributions-title">My Contributions</h3>
        <p className="cs-body">I led research, ideation, wireframing, and transitioning our screens into hi-fi. I also
          contributed to mapping out the user journey, creating the style guide, and helped with prototyping the
          animations. The areas of the tablet app I focused on were the actual game screens, the onboarding flow, and
          the home menu screens.</p>

        <div className="three-column-row margin-bottom-0px">
          <div className="left-column margin-bottom-0px">
            <h3 className="cs-subtitle-2 margin-bottom-16px" id="project-timeline-title">Project Timeline</h3>
            <p className="cs-body margin-bottom-0px">2 weeks (May 2021)
            </p>
          </div>
          <div className="center-column margin-bottom-0px">
            <h3 className="cs-subtitle-2 margin-bottom-16px" id="project-type-title">Project Team</h3>
            <p className="cs-body margin-bottom-0px margin-top-0px"><a href="https://www.linkedin.com/in/windfulsoul/">Aiden
              Ko Song</a> (UX Design)</p>
          </div>
          <div className="right-column margin-bottom-0px">
            <h3 className="cs-subtitle-2 margin-bottom-16px" id="project-tools-title">Project Tools</h3>
            <p className="cs-body margin-bottom-0px">Adobe XD, Illustrator, Procreate</p>
          </div>
        </div>

        <div className="link-to-prototype-container">
          <div className="prototype-button clickable" onClick={() => {
            redirectToPrototype();
          }}>
            <p className="cs-body"/>
          </div>
        </div>
      </div>

      <div className="user-research margin-bottom-160px anchor-area" id="user-research-area">
        <h2 className="cs-title mid-align-title margin-bottom-40px" id="user-research-title"><strong
          className="light-blue-text">01 </strong>-
          User Research</h2>
        <img className="image" src={UserResearch} alt=""/>
      </div>

      <div className="brainstorming margin-bottom-160px anchor-area" id="brainstorming-area">
        <h2 className="cs-title mid-align-title margin-bottom-40px" id="brainstorming-title"><strong
          className="light-blue-text">02 </strong>-
          Brainstorming</h2>
        <img className="image" src={Brainstorming} alt=""/>
      </div>

      <div className="final-prototype margin-bottom-160px anchor-area" id="final-prototype-area">
        <h2 className="cs-title mid-align-title margin-bottom-40px" id="final-prototype-title"><strong
          className="light-blue-text">03 </strong>-
          Final Prototype</h2>
        <div className="figma-embed-wrapper" id="prototype-container">
          <iframe width="100%" height="100%"
                  src="https://xd.adobe.com/embed/28430b77-e523-43fb-a1bc-b20408e53d60-7d10/?fullscreen" frameBorder="0"
                  allowFullScreen/>
        </div>
      </div>

      <img className="margin-bottom-160px image anchor-area" id="final-image" src={SolearnFinalImage}
           alt=""/>

      <RedirectLinks currentPage="solearn" category="playgroundPages"/>
    </div>
  )
}
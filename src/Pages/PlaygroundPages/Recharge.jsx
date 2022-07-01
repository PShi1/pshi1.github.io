import React, {useEffect} from 'react';
import {setPageToLightMode, setupScrollBar, turnAllMenuStatesOff} from "../../App";
import "../../Stylesheets/PlaygroundStylesheets/Recharge.scss"
import RechargeHeaderImage from '../../Assets/RechargePageImages/RechargeHeaderImage.png';
import UserResearch from '../../Assets/RechargePageImages/UserResearch.png';
import LogoBrainstorm from '../../Assets/RechargePageImages/LogoBrainstorm.png';
import DesignSystem from '../../Assets/RechargePageImages/DesignSystem.png';
import AboutPage from '../../Assets/RechargePageImages/AboutPage.png';
import AnchorLinks from "../../Components/AnchorLinks";
import {RedirectLinks} from "../../Components/RedirectLinks";
import RechargeFinalImage from "../../Assets/RechargePageImages/RechargeFinalImage.png";

export const Recharge = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    setPageToLightMode();
    document.title = "Emma Li | Recharge";
    setupScrollBar("#3E2D5A");
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

  const redirectToRechargeYourself = () => {
    window.open("https://cocky-sammet-437ef2.netlify.app/", "_blank");
  }

  const redirectToExternalProjectPage = () => {
    window.open("https://www.joincolab.io/projects/recharge", "_blank");
  }

  return (
    <div className="recharge-page">
      <AnchorLinks callerType="recharge"/>
      <img className="image margin-bottom-40px anchor-area clickable" src={RechargeHeaderImage} alt=""
           id="header-image"
           onClick={() => {
             scrollToOverview()
           }}/>

      <div className="overview anchor-area margin-bottom-160px" id="overview-area">
        <h3 className="cs-title mid-align-title margin-bottom-40px" id="overview-title">Overview</h3>

        <h2 className="cs-manrope margin-bottom-80px">
          I collaborated with a cross-functional team of 2 developers & 1 product manager to build and ship a web app.
          We went from ideation to deployment in just 8 weeks and launched a fully functional MVP.</h2>

        <h3 className="cs-subtitle-2 margin-bottom-12px" id="the-problem-title">The Problem</h3>
        <p className="cs-body margin-bottom-40px">Stressful situations are commonplace in our lives, and one primary
          source of stress is
          related to our jobs. Studies have shown that job stress threatens the health of workers. Extended periods of
          stress or frequent exposure to stress can cause mental, physiological, and physical illnesses. In addition to
          health effects, studies show that stressful working conditions are associated with increased absenteeism,
          tardiness, and intentions by workers to quit their jobs, all of which negatively affect the bottom line.</p>

        <p className="cs-body margin-bottom-80px"><strong className="highlight">Individuals need a way to incorporate
          micro-breaks and carry out stress recovery activities (SRA) during the workday because SRA improves not only
          productivity but also the individual's mental, emotional, and physical health.</strong> SRA is also a proven
          key to preventing workplace burnout.</p>

        <h3 className="cs-subtitle-2 margin-bottom-12px" id="the-solution-title">The Solution</h3>
        <p className="cs-body margin-bottom-80px"><strong className="highlight">We created Recharge to help users narrow
          down a specific
          break activity based on their personal goals and preferences.</strong> Users go through a flow, answering
          questions and completing activities until the recommendation engine leads them to a personalized activity page
          with their recommended action and media/information to help them take a productive break.
        </p>

        <h3 className="cs-subtitle-2 margin-bottom-12px" id="my-contributions-title">My Contributions</h3>
        <ul className="margin-bottom-80px">
          <li className="cs-body">I synthesized user research via user surveys/interviews to brainstorm product features
            and prioritize them for our MVP.
          </li>
          <li className="cs-body">I crafted high-fidelity screens, a design system, and promotional materials in Figma.
          </li>
          <li className="cs-body">I conducted usability tests on the initial prototype to implement user feedback into
            actionable changes and user experience improvements.
          </li>
        </ul>

        <div className="three-column-row margin-bottom-0px">
          <div className="left-column margin-bottom-0px">
            <h3 className="cs-subtitle-2 margin-bottom-16px" id="project-timeline-title">Project Timeline</h3>
            <p className="cs-body margin-bottom-0px">2 months (Q4 2021)
            </p>
          </div>
          <div className="center-column margin-bottom-0px">
            <h3 className="cs-subtitle-2 margin-bottom-16px" id="project-type-title">Project Team</h3>
            <p className="cs-body margin-bottom-0px margin-top-0px"><a
              href="https://www.linkedin.com/in/pingchengzhang/">Ping
              Zhang</a> (Product Manager)</p>
            <p className="cs-body margin-bottom-0px margin-top-0px"><a
              href="https://www.linkedin.com/in/mihail-soltan/">Mihail
              Soltan</a> (Developer)</p>
            <p className="cs-body margin-bottom-0px margin-top-0px">Miguel
              S. (Developer)</p>
          </div>
          <div className="right-column margin-bottom-0px">
            <h3 className="cs-subtitle-2 margin-bottom-16px" id="project-tools-title">Project Tools</h3>
            <p className="cs-body margin-bottom-0px">Figma, Zeplin, Blender, Spline</p>
          </div>
        </div>

        <div className="link-to-prototype-container">
          <div className="prototype-button clickable" id="try-out-recharge-yourself" onClick={() => {
            redirectToRechargeYourself();
          }}>
            <p className="cs-body"/>
          </div>
          <div className="prototype-button clickable" id="link-to-external-project-page" onClick={() => {
            redirectToExternalProjectPage();
          }}>
            <p className="cs-body"/>
          </div>
        </div>
      </div>

      <div className="user-research margin-bottom-160px anchor-area" id="user-research-area">
        <h2 className="cs-title mid-align-title margin-bottom-40px" id="user-research-title"><strong
          className="purple-text">01 </strong>-
          User Research</h2>
        <img className="image" src={UserResearch} alt=""/>
      </div>

      <div className="logo-brainstorm margin-bottom-160px anchor-area" id="logo-brainstorm-area">
        <h2 className="cs-title mid-align-title margin-bottom-40px" id="logo-brainstorm-title"><strong
          className="purple-text">02 </strong>-
          Logo Brainstorm</h2>
        <img className="image" src={LogoBrainstorm} alt=""/>
      </div>

      <div className="design-system margin-bottom-160px anchor-area" id="design-system-area">
        <h2 className="cs-title mid-align-title margin-bottom-40px" id="design-system-title"><strong
          className="purple-text">03 </strong>-
          Design System</h2>
        <img className="image" src={DesignSystem} alt=""/>
      </div>

      <div className="final-prototype margin-bottom-160px anchor-area" id="final-prototype-area">
        <h2 className="cs-title mid-align-title margin-bottom-40px" id="final-prototype-title"><strong
          className="purple-text">04 </strong>-
          Final Prototype</h2>
        <div className="figma-embed-wrapper" id="prototype-container">
          <iframe width="100%" height="100%"
                  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FNtW76jwaIAmDCOlXyWD5Cx%2FRecharge%3Fpage-id%3D0%253A1%26node-id%3D466%253A847%26starting-point-node-id%3D466%253A847%26scaling%3Dcontain"
                  frameBorder="0"
                  allowFullScreen/>
        </div>
      </div>

      <div className="about-page-recharge margin-bottom-160px anchor-area" id="about-page-area">
        <h2 className="cs-title mid-align-title margin-bottom-40px" id="about-page-title"><strong
          className="purple-text">05 </strong>-
          About Page</h2>
        <img className="image" src={AboutPage} alt=""/>
      </div>

      <img className="margin-bottom-160px image anchor-area" id="final-image" src={RechargeFinalImage}
           alt=""/>
      <RedirectLinks currentPage="recharge" category="playgroundPages"/>
    </div>
  )
}
import React, {useEffect} from 'react';
import {hideLoading, setPageToLightMode, setupScrollBar, turnAllMenuStatesOff} from "../../App";
import "../../Stylesheets/PlaygroundStylesheets/BookBuds.scss"
import BookBudsHeaderImage from '../../Assets/BookBudsPageAssets/BookBudsHeaderImage.png';
import BookBudsFinalImage from '../../Assets/BookBudsPageAssets/BookBudsFinalImage.png';
import UserFlows from '../../Assets/BookBudsPageAssets/UserFlows.png';
import StyleGuide1 from '../../Assets/BookBudsPageAssets/StyleGuide1.png';
import StyleGuide2 from '../../Assets/BookBudsPageAssets/StyleGuide2.png';
import StyleGuide3 from '../../Assets/BookBudsPageAssets/StyleGuide3.png';
import AnchorLinks from "../../Components/AnchorLinks";
import {RedirectLinks} from "../../Components/RedirectLinks";
import {Gallery} from "../../Components/Gallery";
import {LoadingPage} from "../../Components/LoadingPage";

export const BookBuds = () => {
  const bookbudsImages = [StyleGuide1, StyleGuide2, StyleGuide3];

  useEffect(() => {
    window.scrollTo(0, 0);

    setPageToLightMode();
    document.title = "Emma Li | BookBuds";
    setupScrollBar("#FF645F");
    turnAllMenuStatesOff();
    highlight();
    hideLoading();
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
    <div className="bookbuds-page">
      <LoadingPage/>
      <AnchorLinks callerType="bookbuds"/>
      <img className="image margin-bottom-40px anchor-area clickable" src={BookBudsHeaderImage} alt=""
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
        <p className="cs-body margin-bottom-80px"><strong className="highlight">“Design a mobile took to help
          communities host book-sharing events, safely, in a pandemic.</strong> No matter how large or small the event,
          it must introduce or increase access to new or used books to school-age children.”</p>

        <h3 className="cs-subtitle-2 margin-bottom-12px" id="the-solution-title">The Solution</h3>
        <p className="cs-body">
          <strong className="highlight">BookBuds is a platform for parents, teachers, and guardians
            to host virtual and in-person events for kids of all ages to share their love for stories and
            knowledge.</strong>
        </p>
        <p className="cs-body">Our unique offering is a virtual book matching system ("Book Buddies") where we
          automatically pair up kids and give them the space to recommend books to one another from a preference quiz
          and a personalized recommendation engine. Kind of like a "Secret Santa" system with books. Once they've
          received their book recommendations, they can discuss them live with their buddy (chat, call, or video). This
          can be hosted within the app, making it a convenient way to host and attend virtual events within one app.
        </p>
        <p className="cs-body margin-bottom-40px">Logging in as an adult, you can chat with other adults to discuss
          ideas and help one
          another host events.
        </p>

        <h2 className="cs-manrope margin-bottom-80px">
          We believe BookBuds can bring the joy and magic of reading together to kids of all ages and help adults
          organize book events that encourage engagement and passion.</h2>

        <h3 className="cs-subtitle-2 margin-bottom-12px" id="my-contributions-title">My Contributions</h3>
        <p className="cs-body">I was more in charge of the app's visual and UI design; however, my partner Cecilia and I
          collaborated on all aspects of the end-to-end design process. </p>

        <div className="three-column-row margin-bottom-0px">
          <div className="left-column margin-bottom-0px">
            <h3 className="cs-subtitle-2 margin-bottom-16px" id="project-timeline-title">Project Timeline</h3>
            <p className="cs-body margin-bottom-0px">2 weeks (Nov 2021)
            </p>
          </div>
          <div className="center-column margin-bottom-0px">
            <h3 className="cs-subtitle-2 margin-bottom-16px" id="project-type-title">Project Team</h3>
            <p className="cs-body margin-bottom-0px margin-top-0px"><a href="https://www.linkedin.com/in/cecilia-yue/"
                                                                       target="_blank">Cecilia
              Yue</a> (UX Design)</p>
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

      <div className="user-flows margin-bottom-160px anchor-area" id="user-flows-area">
        <h2 className="cs-title mid-align-title margin-bottom-40px" id="user-flows-title"><strong
          className="light-pink-text">01 </strong>-
          User Flows</h2>
        <img className="image" src={UserFlows} alt=""/>
      </div>

      <div className="style-guide margin-bottom-160px anchor-area" id="style-guide-area">
        <h2 className="cs-title mid-align-title margin-bottom-40px" id="style-guide-title"><strong
            className="light-pink-text">02 </strong>-
          Style Guide</h2>
        <Gallery uniquePrefix={"bookbuds"} images={bookbudsImages}/>
      </div>

      <div className="final-prototype margin-bottom-160px anchor-area" id="final-prototype-area">
        <h2 className="cs-title mid-align-title margin-bottom-80px" id="final-prototype-title"><strong
            className="light-pink-text">03 </strong>-
          Final Prototype</h2>
        <div className="figma-embed-wrapper" id="prototype-container">
          <iframe width="100%" height="100%"
                  src="https://xd.adobe.com/embed/d80521de-d8d7-4fa5-8c39-38de1135f830-8d56/?fullscreen" frameBorder="0"
                  allowFullScreen/>
        </div>
      </div>

      <img className="margin-bottom-160px image anchor-area" id="final-image" src={BookBudsFinalImage}
           alt=""/>

      <RedirectLinks currentPage="bookbuds" category="playgroundPages"/>
    </div>
  )
}
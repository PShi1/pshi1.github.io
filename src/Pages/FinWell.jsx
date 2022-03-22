import React, {useEffect} from 'react';
import '../Stylesheets/Finwell.scss';
import SamsungImage from '../Assets/Samsung.jpg'
import FinWellImage from '../Assets/Finwell.svg'
import iPhone1 from '../Assets/iPhone1.svg'
import iPhone2 from '../Assets/iPhone2.svg'
import iPhone3 from '../Assets/iPhone3.svg'
import iPhone4 from '../Assets/iPhone4.svg'
import IntelligentBudgetingBubbles from '../Assets/IntelligentBudgetingBubbles.svg';
import PurchaseTrackingBubbles from '../Assets/PurchaseTrackingBubbles.svg';
import ActionableInsightsBubbles from '../Assets/ActionableInsightsBubbles.svg';

export const FinWell = () => {

  useEffect(() => {
    // fadeInTesting();
    fadeInIntro();
    fadeInOnScroll();
  }, []);

  const fadeInTesting = () => {
    document.scrollingElement.addEventListener("wheel", (event) => {
      event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
      event.preventDefault();
    })

    window.addEventListener("scroll", () => {
      let elements = document.getElementsByClassName("left-box");
      if (window.scrollY > elements[0].offsetTop) {
        elements[0].classList.add("active");
      }
      let elements2 = document.getElementsByClassName("right-box");
      if (window.scrollY > elements2[0].offsetTop) {
        elements2[0].classList.add("active");
      }

      // if (window.scrollY - window.innerHeight > elements[0].offsetTop) {
      //   elements[0].classList.replace("active", "");
      // }
      // if (window.scrollY - window.innerHeight > elements2[0].offsetTop) {
      //   elements2[0].classList.replace("active", "");
      // }
    }, (e) => {e.preventDefault(); e.stopPropagation();})

  }

  const fadeInIntro = () => {
    let leftElements = document.getElementsByClassName("left-float");
    leftElements[0].classList.add("active");
    leftElements[1].classList.add("active");
    // for (const element in elements) {
    //   element.classList.add("active");
    // }

    let rightElements = document.getElementsByClassName("right-float");
    rightElements[0].classList.add("active");
    // for (const element in elements) {
    //   element.classList.add("active");
    // }
  }

  const fadeInOnScroll = () => {
    let elements = document.getElementsByClassName("appear-on-scroll");
    let scroll = window.scrollY;
    let innerHeight = window.innerHeight;
    window.addEventListener("scroll", () => {
      scroll = window.scrollY;
      console.log("scroll: " + scroll);

      for (const element of elements) {
        let pos = element.offsetTop;
        console.log(pos);
        if (scroll + innerHeight / 1.3 >= pos) {
          element.classList.add("active");
        }
      }
    })

  }

  return (
    <div className="finwell-page">
      {/*<div className="testing">*/}
      {/*  <div className="left-box">*/}

      {/*  </div>*/}
      {/*  <div className="right-box">*/}

      {/*  </div>*/}
      {/*</div>*/}

      <div className="intro-wrapper">
        <div className="left-column">
          <img id="finwell-logo" className="left-float" src={FinWellImage} alt="finwell logo"/>
          <p id="finwell-description" className="left-float">Using AI to build mindfulness and help control impulse spending by letting users reflect on their purchases over time.</p>
        </div>
        <div className="right-column">
          <img className="right-float" id="samsung-phones" src={SamsungImage} alt="samsung phones"/>
        </div>
      </div>

      <div className="overview appear-on-scroll">
        <h2 className="section-header">Overview</h2>
        <div className="left-column">
          <h3 className="section-subheader">Problem</h3>
          <p className="finwell-body-font">Budgeting and many other basic financial skills are not taught in school in this modern age, which in turn leads to
            a lot of people not knowing how to manage their finances and a general lack of financial guidance. One major example
            of this is the frequent purchase of items that collectively go over budget and later cause guilt and regret, also known as impulsive spending.</p>
          <h3 className="section-subheader">Solution</h3>
          <p className="finwell-body-font">FinWell leverages AI to help young adults develop good financial habits like simple budgeting and goal setting.
            It also helps its users track the way they feel about past purchases over time by prompting self-reflection entries at certain time intervals after a purchase.
            This encourages users to be more mindful and deliberate when it comes to making financial decisions to ensure their purchases retain their value as time goes by.</p>
        </div>
        <div className="right-column">
          <h3 className="section-subheader">Timeline</h3>
          <p className="finwell-body-font">Solo, UX Design, UX Research, Personal Project</p>

          <h3 className="section-subheader">Project Type</h3>
          <p className="finwell-body-font">Solo, Mobile, UX Design, UX Research, Wireframing, Usability Testing, Prototyping</p>

          <h3 className="section-subheader">Tools Used</h3>
          <p className="finwell-body-font">Figma, Google Forms, Miro, LucidSpark, Adobe Illustrator, Protopie</p>
        </div>
      </div>

      <div className="approaches appear-on-scroll">
        <h2 className="section-header">Approach</h2>
        <div className="column">
          <h3 className="section-subheader"><strong>01</strong> Discovery</h3>
          <ul>
            <li className="list-item finwell-body-font">Secondary Research</li>
            <li className="list-item finwell-body-font">Competitive Analysis</li>
            <li className="list-item finwell-body-font">Surveys/Interview</li>
            <li className="list-item finwell-body-font">Affinity Maps</li>
            <li className="list-item finwell-body-font">User Personas</li>
            <li className="list-item finwell-body-font">Empathy Maps</li>
            <li className="list-item finwell-body-font">Problem Statement</li>
          </ul>
        </div>
        <div className="column">
          <h3 className="section-subheader"><strong>02</strong> Design</h3>
          <ul>
            <li className="list-item finwell-body-font">User Flows</li>
            <li className="list-item finwell-body-font">User Stories</li>
            <li className="list-item finwell-body-font">Sketching</li>
            <li className="list-item finwell-body-font">Low Fidelity Wireframes</li>
            <li className="list-item finwell-body-font">Mood Board/Style Guide</li>
            <li className="list-item finwell-body-font">High Fidelity Wireframes</li>
            <li className="list-item finwell-body-font">Interactive Prototype</li>
          </ul>
        </div>
        <div className="column">
          <h3 className="section-subheader"><strong>03</strong> Test & Iterate</h3>
          <ul>
            <li className="list-item finwell-body-font">Usability Testing</li>
            <li className="list-item finwell-body-font">Iterations</li>
          </ul>
        </div>
        <div className="column">
          <h3 className="section-subheader"><strong>04</strong> Reflect</h3>
          <ul>
            <li className="list-item finwell-body-font">Concept Feedback</li>
            <li className="list-item finwell-body-font">Learnings</li>
            <li className="list-item finwell-body-font">Room for Improvement</li>
            <li className="list-item finwell-body-font">Future Considerations</li>
          </ul>
        </div>
      </div>

      <div className="designed-solution">
        <img id="intelligent-budgeting-bubbles" src={IntelligentBudgetingBubbles} alt=""/>
        <div className="appear-on-scroll">
          <h2 className="section-header">Designed Solution</h2>
          <div className="intelligent-budgeting">
            <div className="left-column">
              <img src={iPhone1} alt=""/>

            </div>
            <div className="right-column">
              <h1 className="solution-title">Intelligent Budgeting</h1>
              <h2 className="solution-subtitle">A financial tool that adapts to you.</h2>
              <p className="solution-text">A budget that adjusts based on spending habits which allows you to make adjustments to fit your life stage or life style.</p>
              <img src={iPhone2} alt=""/>
            </div>
          </div>
        </div>

        <img id="purchase-tracking-bubbles" src={PurchaseTrackingBubbles} alt=""/>
        <div className="appear-on-scroll">
          <div className="purchase-tracking">
            <div className="left-column">
              <img src={iPhone3} alt=""/>
            </div>
            <div className="right-column">
              <h1 className="solution-title">Purchase Tracking</h1>
              <h2 className="solution-subtitle">Track your thoughts and feelings towards a purchase over time.</h2>
              <p className="solution-text">FinWell helps you track how you feel about certain purchases over time to increase mindfulness and ensure
                you’re purchasing things that give the most value. </p>
            </div>
          </div>
        </div>

        <img id="actionable-insights-bubbles" src={ActionableInsightsBubbles} alt=""/>
        <div className="appear-on-scroll" id="actionable-insights-container">
          <div className="actionable-insights">
            <div className="left-column">
              <h1 className="solution-title">Actionable Insights</h1>
              <h2 className="solution-subtitle">Reflect and adapt to build better financial habits.</h2>
              <p className="solution-text">FinWell's AI produces actionable insights for reflection and let's you know any areas for improvements.</p>
            </div>
            <div className="right-column">
              <img src={iPhone4} alt=""/>
            </div>
          </div>
        </div>

        <div className="link-to-prototype-container">
          <div className="secondary-button">
            <p>Link to Prototype</p>
          </div>
        </div>
      </div>
    </div>
  )
}
import React, {useEffect} from 'react';
import '../Stylesheets/Finwell.scss';
import FinWellHeaderImage from '../Assets/FinWellPageImages/FinWellHeaderImage.svg';
import iPhone1 from '../Assets/iPhone1.svg'
import iPhone2 from '../Assets/iPhone2.svg'
import iPhone3 from '../Assets/iPhone3.svg'
import iPhone4 from '../Assets/iPhone4.svg'
import IntelligentBudgetingBubbles from '../Assets/FinWellPageImages/IntelligentBudgetingBubbles.svg';
import PurchaseTrackingBubbles from '../Assets/FinWellPageImages/PurchaseTrackingBubbles.svg';
import ActionableInsightsBubbles from '../Assets/FinWellPageImages/ActionableInsightsBubbles.svg';
import StressedEmoji from '../Assets/StressedEmoji.svg';
import Books from '../Assets/FinWellPageImages/Books.svg';
import CompetitiveAnalysis from '../Assets/FinWellPageImages/CompetitiveAnalysis.png';
import AffinityMap from '../Assets/FinWellPageImages/AffinityMap.svg';
import AnxiousAnnie from '../Assets/FinWellPageImages/AnxiousAnnie.png';
import ConfidentCarl from '../Assets/FinWellPageImages/ConfidentCarl.png';
import AnxiousAnnieEmpathyMap from '../Assets/FinWellPageImages/AnxiousAnnieEmpathyMap.png';
import ConfidentCarlEmpathyMap from '../Assets/FinWellPageImages/ConfidentCarlEmpathyMap.png';
import {setPageToLightMode, setupScrollBar, turnAllMenuStatesOff,} from "../App";
import ParentChildSign from '../Assets/FinWellPageImages/ParentChildSign.svg';
import Survey from '../Assets/FinWellPageImages/Survey.svg';
import UserInterviews from '../Assets/FinWellPageImages/UserInterviews.svg'
import Ideation from '../Assets/FinWellPageImages/Ideation.svg';
import GuerillaTesting1 from '../Assets/FinWellPageImages/GuerillaTesting1.png';
import GuerillaTesting2 from '../Assets/FinWellPageImages/GuerillaTesting2.png';
import UserStories from '../Assets/FinWellPageImages/UserStories.svg';
import InformationArchitecture from '../Assets/FinWellPageImages/InformationArchitecture.svg';
import StyleGuide0 from '../Assets/FinWellPageImages/StyleGuide0.svg';
import StyleGuide1 from '../Assets/FinWellPageImages/StyleGuide1.svg';
import StyleGuide2 from '../Assets/FinWellPageImages/StyleGuide2.svg';
import StyleGuide3 from '../Assets/FinWellPageImages/StyleGuide3.svg';
import StyleGuide4 from '../Assets/FinWellPageImages/StyleGuide4.svg';
import StyleGuide5 from '../Assets/FinWellPageImages/StyleGuide5.svg';
import StyleGuide6 from '../Assets/FinWellPageImages/StyleGuide6.svg';
import StyleGuide7 from '../Assets/FinWellPageImages/StyleGuide7.svg';
import StyleGuide8 from '../Assets/FinWellPageImages/StyleGuide8.svg';
import AnchorLinks from "../Components/AnchorLinks";
import FinalImage from '../Assets/FinWellPageImages/FinalImage.svg';
import {Gallery} from "../Components/Gallery";
import SketchingWireframes from "../Assets/FinWellPageImages/SketchingWireframes.svg";
import UserFlows1 from '../Assets/FinWellPageImages/UserFlows1.png';
import UserFlows2 from '../Assets/FinWellPageImages/UserFlows2.png';
import UserFlows3 from '../Assets/FinWellPageImages/UserFlows3.png';
import UserFlows4 from '../Assets/FinWellPageImages/UserFlows4.png';
import {RedirectLinks} from "../Components/RedirectLinks";
import Iterations1 from '../Assets/FinWellPageImages/Iterations1.png';
import Iterations2 from '../Assets/FinWellPageImages/Iterations2.png';

/**
 * FinWell page component
 */
export const FinWell = () => {
  const styleGuideImages = [StyleGuide0, StyleGuide1, StyleGuide2, StyleGuide3, StyleGuide4, StyleGuide5, StyleGuide6, StyleGuide7, StyleGuide8];
  const empathyMapImages = [AnxiousAnnieEmpathyMap, ConfidentCarlEmpathyMap];
  const userPersonasImages = [AnxiousAnnie, ConfidentCarl];
  const guerillaTestingImages = [GuerillaTesting1, GuerillaTesting2];
  const userFlowsImages = [UserFlows1, UserFlows2, UserFlows3, UserFlows4];
  const iterationsImages = [Iterations1, Iterations2];

  /**
   * Before page load, add an event listener that, when page is loaded will add in listeners for fade in components
   */
  useEffect(() => {
    window.scrollTo(0, 0);

    fadeInOnScroll();

    setPageToLightMode();
    document.title = "Emma Li | FinWell";
    setupScrollBar("#F0CA36");
    turnAllMenuStatesOff();
    highlight();
  }, []);

  /**
   * Adds a listener to the page's scroll, that will fade in (activate) objects as they appear on the screen
   */
  const fadeInOnScroll = () => {
    let elements = document.getElementsByClassName("appear-on-scroll");
    let scroll = window.scrollY;
    let innerHeight = window.innerHeight;
    window.addEventListener("scroll", () => {
      scroll = window.scrollY;

      for (const element of elements) {
        let pos = element.offsetTop;
        if (scroll + innerHeight / 1.3 >= pos) {
          element.classList.add("active");
        }
      }
    })
  }

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

  const redirectToPrototype = () => {
    let el = document.getElementById("final-prototype-title");
    if (el) {
      el.scrollIntoView({behavior: "smooth"});
    }
  }

  return (
    <div className="finwell-page">
      <AnchorLinks callerType="finwell"/>
      <div className="intro-wrapper margin-bottom-80px">
        <img src={FinWellHeaderImage} alt="" className="finwell-header" id="header-image"/>
      </div>

      <div className="overview margin-bottom-160px anchor-area" id="overview-area">
        <h3 className="cs-title margin-bottom-80px" id="overview-title">Overview</h3>
        <h2 className="cs-manrope-150-line-height margin-bottom-80px">FinWell is an app that <strong
          className="highlight">
          helps increase money mindfulness and
          prevent overspending
        </strong> by letting users track how they feel about their purchases over time.</h2>

        <h3 className="cs-subtitle-2 margin-bottom-12px" id="context-title">Context</h3>
        <p className="cs-body margin-bottom-80px">There is an evident lack of financial education in this modern age,
          which leads to many people not knowing how to manage their finances and a general lack of financial guidance.
          One prominent example of this is the frequent purchase of items that collectively go over budget and later
          cause guilt and regret, also known as impulsive spending. <strong className="highlight">FinWell leverages AI
            to help young adults develop
            good financial habits like simple budgeting and goal setting. It also allows its users to track the way they
            feel about past purchases over time by prompting self-reflection entries at certain time intervals after a
            purchase. This encourages users to be more mindful and deliberate when making financial decisions to ensure
            their purchases retain their value as time goes by.</strong></p>

        <p className="cs-body margin-bottom-0px"><strong className="highlight">FinWell is a solo course project I did
          as part of my UX/UI program.</strong> Some of my specific work on this project include:</p>
        <ul className="margin-bottom-80px margin-top-0px">

          <li className="cs-body">I brainstormed possible solutions and <strong className="highlight">conducted guerilla
            tests with sketch prototypes</strong> to test my hypothesis.
          </li>
          <li className="cs-body">I interviewed 8 end-users to gather insights to <strong className="highlight">create
            an affinity & empathy map.</strong></li>
          <li className="cs-body"><strong className="highlight">I designed high-fidelity screens</strong> and <strong
            className="highlight"> created interactive prototypes</strong>
            of the critical user flows.
          </li>
          <li className="cs-body"><strong
            className="highlight">I conducted usability tests</strong> with the prototypes and made iterations to my
            designs.
          </li>
        </ul>

        <h3 className="cs-subtitle-2 margin-bottom-12px" id="project-timeline-title">Project Timeline</h3>
        <p className="cs-body margin-bottom-80px"><strong className="highlight">6 weeks (Q2 2021)</strong>
        </p>

        <h3 className="cs-subtitle-2 margin-bottom-12px" id="project-type-title">Project Type</h3>
        <p className="cs-body margin-bottom-0px"><strong className="highlight">Sole Designer/Researcher, Course Project,
          Full Case Study,
          Mobile</strong></p>
        <p className="cs-body margin-bottom-80px margin-top-0px">User Research, Brainstorming, Solution Validation,
          Sketching,
          Wireframing, Style Guide, Prototyping, Usability Testing</p>

        <h3 className="cs-subtitle-2 margin-bottom-12px" id="project-tools-title">Project Tools</h3>
        <p className="cs-body margin-bottom-80px"><strong className="highlight">Figma, Google Forms, Miro, LucidSpark,
          Adobe Illustrator</strong></p>
      </div>

      <div className="process margin-bottom-160px anchor-area" id="process-area">
        <h2 className="cs-title margin-bottom-80px" id="process-title"><strong className="yellow-text">01</strong> -
          Process</h2>
        <div className="column">
          <h3 className="cs-subtitle">Discovery</h3>
          <ul>
            <li className="list-item cs-body">Secondary Research</li>
            <li className="list-item cs-body">Competitive Analysis</li>
            <li className="list-item cs-body">Screener Surveys</li>
            <li className="list-item cs-body">User Interviews</li>
            <li className="list-item cs-body">Affinity Maps</li>
            <li className="list-item cs-body">User Personas</li>
            <li className="list-item cs-body">Empathy Maps</li>
            <li className="list-item cs-body">Problem Statement</li>
          </ul>
        </div>
        <div className="column">
          <h3 className="cs-subtitle">Design</h3>
          <ul>
            <li className="list-item cs-body">Ideation</li>
            <li className="list-item cs-body">Guerilla Testing</li>
            <li className="list-item cs-body">User Stories</li>
            <li className="list-item cs-body">Information Architecture</li>
            <li className="list-item cs-body">User Flows</li>
            <li className="list-item cs-body">Sketches / Wireframes</li>
            <li className="list-item cs-body">Style Guide</li>
            <li className="list-item cs-body">High Fidelity Wireframes</li>
          </ul>
        </div>
        <div className="column">
          <h3 className="cs-subtitle">Test & Iterate</h3>
          <ul>
            <li className="list-item cs-body">Interactive Prototype</li>
            <li className="list-item cs-body">Usability Testing</li>
            <li className="list-item cs-body">Iterations</li>
          </ul>
        </div>
        <div className="column">
          <h3 className="cs-subtitle">Reflect</h3>
          <ul>
            <li className="list-item cs-body">Concept Feedback</li>
            <li className="list-item cs-body">Learnings</li>
            <li className="list-item cs-body">Room for Improvement</li>
            <li className="list-item cs-body">Future Considerations</li>
          </ul>
        </div>
      </div>

      <div className="designed-solution margin-bottom-240px anchor-area" id="final-solution-area">
        <h2 className="cs-title margin-bottom-80px" id="final-solution-title"><strong
          className="yellow-text">02</strong> -
          Final Solution</h2>

        <img id="intelligent-budgeting-bubbles" src={IntelligentBudgetingBubbles} alt=""/>
        <div className="appear-on-scroll">
          <div className="intelligent-budgeting">
            <div className="left-column">
              <img src={iPhone1} alt=""/>

            </div>
            <div className="right-column">
              <h1 className="solution-title" id="intelligent-budgeting-title">Intelligent Budgeting</h1>
              <h2 className="solution-subtitle">A financial tool that adapts to you.</h2>
              <p className="solution-text">A budget that adjusts based on spending habits which allows you to make
                adjustments to fit your life stage or life style.</p>
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
              <h1 className="solution-title" id="purchase-tracking-title">Purchase Tracking</h1>
              <h2 className="solution-subtitle">Track your thoughts and feelings towards a purchase over time.</h2>
              <p className="solution-text">FinWell helps you track how you feel about certain purchases over time to
                increase mindfulness and ensure
                you’re purchasing things that give the most value. </p>
            </div>
          </div>
        </div>

        <img id="actionable-insights-bubbles" src={ActionableInsightsBubbles} alt=""/>
        <div className="appear-on-scroll" id="actionable-insights-container">
          <div className="actionable-insights">
            <div className="left-column">
              <h1 className="solution-title" id="actionable-insights-title">Actionable Insights</h1>
              <h2 className="solution-subtitle">Reflect and adapt to build better financial habits.</h2>
              <p className="solution-text">FinWell's AI produces actionable insights for reflection and let's you know
                any areas for improvements.</p>
            </div>
            <div className="right-column">
              <img src={iPhone4} alt=""/>
            </div>
          </div>
        </div>

        <div className="link-to-prototype-container">
          <div className="prototype-button clickable" onClick={() => {
            redirectToPrototype()
          }}>
            <p className="cs-body"/>
          </div>
        </div>
      </div>

      <div className="discovery margin-bottom-120px anchor-area" id="discovery-area">
        <h2 className="cs-title margin-bottom-80px" id="discovery-title"><strong className="yellow-text">03</strong> -
          Discovery</h2>
        <h2 className="cs-manrope-150-line-height margin-bottom-80px">I started the project with a vague idea that I
          wanted to pursue a
          problem related to my financial background and help people be better at managing their finances. Initially, I
          wanted to create an educational app to teach basic financial lessons but later pivoted to <strong
            className="highlight">
            focusing on young adults and an app targeting overspending.
          </strong></h2>
        <h4 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="secondary-research-title">Secondary
          Research</h4>
        <p className="cs-body margin-bottom-80px margin-top-0px">Through reviewing literary papers and other secondary
          sources
          online, I learned that with student and credit debt rising, the average person’s ability to budget and save is
          diminishing from year to year. <strong className="highlight">
            This is especially prevalent in young adults since there is minimal exposure to financial literacy through
            school. Here are some key economic statistics I uncovered through secondary research:
          </strong>
        </p>

        <div className="secondary-research-row margin-bottom-40px">
          <div className="margin-bottom-12px">
            <div className="left-column">
              <img className="emoji margin-bottom-12px" src={StressedEmoji} alt=""/>
              <h4 className="large-number-font margin-bottom-12px">63%</h4>
              <p className="cs-body margin-top-0px">of Millennials feel anxious when thinking about their financial
                situation. <strong
                  className="grey-text no-bold">(</strong><u onClick={() => {
                  window.open('https://gflec.org/wp-content/uploads/2020/08/Millennials-and-Money-Technical-Report-August2020.pdf?x38887')
                }}
                                                             className="grey-text clickable">TIAA
                  Institute</u><strong className="grey-text no-bold">)</strong></p>
            </div>
            <div className="center-column">
              <img className="emoji margin-bottom-12px" src={ParentChildSign} alt=""/>
              <h4 className="large-number-font margin-bottom-12px">60%</h4>
              <p className="cs-body margin-top-0px">of parents report giving their kids financial help in the past
                year. <strong
                  className="grey-text no-bold">(</strong><u
                  className="grey-text clickable" onClick={() => {
                  window.open('https://www.pewresearch.org/social-trends/2019/10/23/majority-of-americans-say-parents-are-doing-too-much-for-their-young-adult-children/')
                }}>Pew Research
                  Center</u><strong className="grey-text no-bold">)</strong></p>
            </div>
            <div className="right-column">
              <img className="emoji margin-bottom-12px" src={Books} alt=""/>
              <h4 className="large-number-font margin-bottom-12px">Only 24%</h4>
              <p className="cs-body margin-top-0px">of Millennials demonstrate the ability to understand basic financial
                concepts.
                <strong
                  className="grey-text no-bold">(</strong><u
                  className="grey-text clickable" onClick={() => {
                  window.open('https://gflec.org/wp-content/uploads/2016/09/pwc-millenials-and-financial-literacy-3.pdf?x93521')
                }}>GFLEC</u><strong className="grey-text no-bold">)</strong></p>
            </div>
          </div>
        </div>

        <h2 className="cs-manrope-150-line-height margin-bottom-80px">The secondary research results motivated me to
          focus my solution
          on the user group of <strong className="highlight">young adults (18-30 years old)</strong> since they are the
          most impacted by this problem.
        </h2>

        <h4 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="competitive-analysis-title">Competitive
          Analysis</h4>
        <p className="cs-body margin-bottom-40px margin-top-0px">I wanted to create a product that offered more than
          current solutions
          already on the
          market. <strong
            className="highlight">
            To do this, I analyzed a list of current financial education/budgeting products and examined their
            heuristics
            and features.
          </strong></p>

        <img className="margin-bottom-40px" id="competitive-analysis-image" src={CompetitiveAnalysis} alt=""/>

        <p className="cs-subtitle-2 margin-bottom-0px">Main Takeaways:</p>
        <ul className="margin-bottom-80px">
          <li className="cs-body">Upon closely examining the negative app store reviews for these products, I
            discovered that many of the products struggle with simplifying financial concepts and making their
            functionality intuitive. <strong className="highlight">Many users reported these products as challenging
              to use consistently day-to-day.</strong>
          </li>
          <li className="cs-body">Even though there were many similar products on the market to help manage your
            money, many just settled for basic budgeting features. <strong className="highlight">Very few of them had
              any additional innovation to solve the pain points of why people struggled so much with managing their
              money in the first place.</strong>
          </li>
        </ul>

        <h3 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="primary-research-title">Primary Research</h3>
        <p className="cs-body margin-bottom-0px margin-top-0px"><strong className="highlight">I sent out a Google Forms
          screener survey
          to my network and
          anonymously online
          on Reddit to:</strong></p>

        <ul className="margin-bottom-40px margin-top-0px">
          <li className="cs-body">Validate the assumption that this was a problem most prevalent amongst young adults
            (18-30 years old)
          </li>
          <li className="cs-body"><strong className="highlight">Identify the main pain points that prevented people from
            saving money and making other responsible financial decisions
            I ended up receiving 58 responses, with over 70% from users in my target group of young adults.</strong>
          </li>
        </ul>

        <img className="image margin-bottom-60px" src={Survey} alt=""/>

        <div className="secondary-research-row margin-bottom-40px">
          <div className="margin-bottom-40px">
            <div className="left-column">
              <h4 className="large-number-font margin-bottom-12px">60%</h4>
              <p className="cs-body margin-top-0px">of respondents rated their own financial literacy a 3 or lower on a
                scale of
                1-5.</p>
            </div>
            <div className="center-column">
              <h4 className="large-number-font margin-bottom-12px">55%</h4>
              <p className="cs-body margin-top-0px">of respondents said that impulsive purchases made up the majority of
                their expenses
                outside of the necessities.</p>
            </div>
            <div className="right-column">
              <h4 className="large-number-font margin-bottom-12px">85%</h4>
              <p className="cs-body margin-top-0px">of respondents can recall "overspending" on a purchase in the last
                month due to an
                emotional trigger.</p>
            </div>
          </div>
        </div>

        <h4 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="user-interviews-title">User Interviews</h4>
        <p className="cs-body margin-bottom-0px margin-top-0px">Out of the respondents to the screener survey, <strong
          className="highlight">I chose 8
          respondents for in-depth follow-up interviews.</strong> These
          respondents were chosen based on four criteria:</p>
        <ul className="margin-bottom-40px margin-top-0px">
          <li className="cs-body">Fell into the target age group of 18 - 30 years old
          </li>
          <li className="cs-body">Expressed interest in learning more about financial literacy and using financial tools
            to help them reach financial goals
          </li>
          <li className="cs-body">Expressed issues with money stemming from a lack of experience with building good
            financial habits like planning or budgeting
          </li>
          <li className="cs-body">Self-identified as having lower financial literacy
          </li>
        </ul>
        <p className="cs-body margin-bottom-40px"><strong className="highlight">These interviews were conducted with the
          goal to talk more in-depth about the motivations behind some of their financial decisions and why it was so
          hard to build better financial habits.</strong></p>
        <img src={UserInterviews} alt="" className="margin-bottom-40px image"/>

        <h4 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="affinity-map-title">Affinity Map</h4>
        <p className="cs-body margin-bottom-60px margin-top-0px"><strong className="highlight">Afterwards, I organized
          my interview
          notes into sticky notes and did affinity mapping in Miro to discover shared insights.</strong></p>

        <img className="image margin-bottom-40px" src={AffinityMap} alt=""/>

        <h4 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="user-personas-title">User Personas</h4>
        <p className="cs-body margin-bottom-40px margin-top-0px">Based on the previous research, I discovered that the
          large user group
          of young adults
          can be further
          broken
          down. <strong className="highlight">
            I created the following personas/empathy maps to understand better the two distinct groups and their
            different pain points and motivations.
          </strong></p>
        <Gallery className="margin-bottom-80px" images={userPersonasImages} uniquePrefix={"user-personas"}/>

        <h4 className="cs-subtitle margin-bottom-40px sub-anchor-area" id="empathy-maps-title">Empathy Maps</h4>
        <Gallery className="margin-bottom-80px" images={empathyMapImages} uniquePrefix={"empathy-maps"}/>

        <h4 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="problem-statement-title">Problem
          Statement</h4>
        <p className="cs-body margin-bottom-0px margin-top-0px"><strong className="highlight">The main findings
          synthesized from
          research include:
        </strong></p>
        <ul className="margin-bottom-120px margin-top-0px">
          <li className="cs-body"><strong className="highlight">Budgeting and avoiding debt are the most prevalent
            financial topics that young adults struggle with.</strong>
          </li>
          <li className="cs-body">Young adults are interested in pursuing a healthier financial future, but there is a
            critical lack of financial education or guidance.
          </li>
          <li className="cs-body">Learning to budget early on is essential for building good financial habits, but the
            main thing holding many young adults back is uncertainty about how much to save and where to save their
            money.
          </li>
          <li className="cs-body"><strong className="highlight">Impulsive spending and a lack of budget were the main
            reasons surfacing why it wasn't easy to save their income.</strong>
          </li>
          <li className="cs-body">Many interviewees admitted to spending more than was required or was wise, especially
            in clothing, takeout, and entertainment categories.
          </li>
          <li className="cs-body"><strong className="highlight">Lots of impulsive spending is tied to emotional triggers
            such as feeling upset, something terrible happening or even a positive emotion like getting a good grade and
            wanting to splurge to celebrate. This leads to many purchases that don't retain their value.</strong>
          </li>
        </ul>

        <p className="cs-manrope-150-line-height margin-bottom-40px"><strong className="highlight">How might we help
          young adults (18-30
          years old) better control their impulsive spending habits and build better long-term financial
          habits?</strong></p>
      </div>

      <div className="design anchor-area margin-bottom-160px" id="design-area">
        <h2 className="cs-title margin-bottom-100px margin-top-0px" id="design-title"><strong
          className="yellow-text">04</strong> -
          Design</h2>
        <h3 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="ideation-title">Ideation</h3>
        <p className="cs-body margin-bottom-80px margin-top-0px">I wanted to ensure I covered as many areas as possible
          when
          brainstorming, so I took time to do various exercises to think outside the box, such as mind mapping and
          storyboarding. <strong className="highlight">I often referred back to the synthesized user research to make
            sure that every solution solves the problem statement and addresses at least one if not more of the pain
            points of the user group. I finally narrowed the solutions down to 4:</strong></p>

        <img className="image margin-bottom-80px" src={Ideation} alt=""/>

        <h3 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="guerilla-testing-title">Guerilla Testing</h3>
        <p className="cs-body margin-bottom-40px margin-top-0px"><strong className="highlight">Instead of arbitrarily
          choosing a
          solution out of the 4, I conducted some basic guerilla testing by approaching users in the target group at a
          coffee shop, presenting the different concepts to them, and gathering user feedback on all 4.</strong> I did
          this by presenting them with minimalistic wireframes alongside a short explanation of the proposed features
          and asking for feedback on the app's usefulness in solving their pain points. Here are some of the example
          wireframes used to present solution #1 and #2:
        </p>
        <Gallery className="margin-bottom-80px" images={guerillaTestingImages} uniquePrefix={"guerilla-testing"}/>

        <h3 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="testing-feedback-title">Testing Feedback</h3>
        <p className="cs-body margin-bottom-80px margin-top-0px"><strong className="highlight">After gathering the
          feedback from 10
          different target users, I decided to proceed with solution #4 as the primary solution while incorporating
          budgeting elements of solution #1 to retain users of the app.</strong> Most users were interested in solution
          #4 since it was something they hadn’t seen before, and many saw it as something they would use. Participants
          also expressed interest in solution #1. Still, they noted that there were many existing options in the market,
          and it would have to have some innovative features to be competitive. As for solutions #2 and #3, participants
          raised concerns about how it would be challenging to personalize the content based on the different users and
          how the app would have difficulty sustaining a long-term user base while providing value.</p>

        <p className="cs-manrope-150-line-height margin-bottom-80px">The app will be a budgeting app with the added
          functionality of
          allowing users to track how they feel about purchases and providing useful insights over time.</p>

        <h3 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="user-stories-title">User Stories</h3>
        <div className="user-stories-container margin-top-0px">
          <div className="left-column">
            <p className="cs-body margin-bottom-24px"><strong className="highlight">I created user stories based on the
              chosen solution and user pain points gathered from research.</strong></p>
          </div>
          <div className="right-column">
            <img src={UserStories} alt="" className="image margin-bottom-80px"/>
          </div>
        </div>


        <h3 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="information-architecture-title">Information
          Architecture</h3>
        <p className="cs-body margin-bottom-24px margin-top-0px">I wanted to organize the user stories in a way that
          made sense for
          users, so I <strong className="highlight">created this information architecture map based on familiar
            navigation and UX patterns.</strong></p>
        <img src={InformationArchitecture} alt="" className="image margin-bottom-80px"/>

        <h3 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="sketching-wireframes-title">Sketching /
          Wireframes</h3>
        <p className="cs-body margin-bottom-24px margin-top-0px"><strong className="highlight">Next, I proceeded to
          sketch out the most
          critical user flows and turn the sketches into low-fidelity wireframes.</strong> I focused on keeping the
          end-users in mind while designing by keeping elements simple to understand and using graphs/iconography
          wherever possible.</p>
        <img className="image margin-bottom-80px" src={SketchingWireframes} alt=""/>

        <h3 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="style-guide-title">Style Guide</h3>
        <p className="cs-body margin-bottom-24px margin-top-0px"><strong className="highlight">I created a style guide
          to narrow
          FinWell’s identity and kept its visual identity consistent throughout the different flows.</strong> Creating
          it also made me reflect on why I chose the visual elements I did and what they represent.</p>
        <Gallery className="margin-bottom-80px" images={styleGuideImages} uniquePrefix={"style-guide"}/>

        <h3 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="user-flows-title">User Flows</h3>
        <Gallery className="margin-bottom-80px" images={userFlowsImages} uniquePrefix={"user-flows"}/>
      </div>

      <div className="test-and-iterate margin-bottom-160px anchor-area" id="test-and-iterate-area">
        <h2 className="cs-title margin-bottom-120px" id="test-and-iterate-title"><strong
          className="yellow-text">05</strong> - Test & Iterate</h2>

        <h3 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="usability-testing-title">Usability
          Testing</h3>
        <p className="cs-body margin-bottom-40px margin-top-0px">While I had some research and heuristics to help guide
          my
          decision-making, I knew I needed to do testing with actual users to validate the solution. <strong
            className="highlight">I ran 15 users
            through a 30-minute extended usability test to test my solution using interactive prototypes on
            Figma.</strong> Using a
          series of tasks, I wanted to learn about their first impressions of the app, if they could navigate the app or
          find the location of the features, and observe their reactions and task completion time.
        </p>

        <p className="cs-body margin-bottom-0px"><strong className="highlight">I started the sessions by asking the
          testers a couple of questions to determine
          their demographic and general spending habits to see how well they would fit into my target user
          group.</strong> Questions included:</p>
        <ul className="margin-top-0px margin-bottom-40px">
          <li className="cs-body">How often have you bought something on an impulse?</li>
          <li className="cs-body">Describe the last time you remember yourself in a scenario making an impulsive
            purchase
          </li>
          <li className="cs-body">What are the main factors that influence your buying decisions?</li>
        </ul>

        <p className="cs-body margin-bottom-0px"><strong className="highlight">To test the design and functionality of
          FinWell, I asked
          testers to perform a series of tasks and observed how they performed and how long each task took
          them.</strong> The testers were instructed to think aloud, and I would only step in and gently guide them when
          they spent over 3 minutes stuck on a task. The tasks covered all of the main functionalities and included:</p>

        <ul className="margin-top-0px margin-bottom-40px">
          <li className="cs-body">Signing up for a new account and navigating to the home screen</li>
          <li className="cs-body">Creating a new monthly budget for $3000
          </li>
          <li className="cs-body">Creating a goal for a new cell phone that costs $900</li>
          <li className="cs-body">Creating a journal entry for the new MacBook they just purchased</li>
          <li className="cs-body">Finding a past journal entry about a blue dress and deleting it</li>
          <li className="cs-body">Viewing an insight on your spending habits and expanding it to view recommended
            actions items
          </li>
        </ul>

        <p className="cs-body margin-bottom-80px"><strong className="highlight">After the tasks, I ended the testing
          with a general qualitative feedback session, asking them questions about their opinion on the design,
          functionality, and usability (rate out of 10).</strong></p>

        <p className="cs-manrope-150-line-height margin-bottom-80px"><strong className="highlight">Subjectively, 14 out
          of 15 participants
          expressed that they enjoy the look and feel of the FinWell app. The average usability score was also high at
          8.8/10.</strong></p>

        <h3 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="iterations-title">Iterations</h3>
        <p className="cs-body margin-bottom-0px margin-top-0px">Some issues were noted and raised by multiple users;
          these include: </p>
        <ul className="margin-top-0px margin-bottom-0px">
          <li className="cs-body">Sometimes it’s hard to figure out precisely what I’m supposed to be doing and why
            (especially noticeable amongst users who had never used a similar app)
          </li>
          <li className="cs-body">The insights screen has way too much information, and I don’t know what is useful and
            not
          </li>
        </ul>
        <p className="cs-body margin-bottom-40px margin-top-0px"><strong className="highlight">
          The following are the edits I decided to make to the
          designs after
          reviewing the sessions and overall feedback:
        </strong></p>
        <Gallery className="margin-bottom-80px" images={iterationsImages} uniquePrefix={"iterations"}/>

        <h3 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="final-prototype-title">Final
          Prototype</h3>
        <p className="cs-body margin-bottom-24px margin-top-0px"><strong className="highlight">Try out the Figma
          prototype yourself and go through the flow of reviewing a product you just purchased!</strong></p>
        <div className="figma-embed-wrapper" id="prototype-container">
          <iframe width="100%" height="100%"
                  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FunLE9AKolaQI5LchZdZ30e%2FFinWell%3Fpage-id%3D72%253A0%26node-id%3D727%253A8448%26viewport%3D1682%252C7008%252C0.14%26scaling%3Dcontain%26starting-point-node-id%3D727%253A8448"
                  allowFullScreen/>
        </div>
      </div>

      <div className="reflection margin-bottom-80px anchor-area" id="reflection-area" key="reflection-group">
        <h2 className="cs-title margin-bottom-80px" id="reflection-title"><strong className="yellow-text">06 </strong>-
          Reflection</h2>

        <h3 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="concept-feedback-title">Concept Feedback</h3>
        <p className="cs-body margin-bottom-0px margin-top-0px">I shared the finished prototype of FinWell with a
          members of the online
          design community
          as well as other young adults in my network and received positive feedback. Here are a few quotes:</p>
        <p className="cs-body margin-top-0px margin-bottom-0px">“It’s a great idea and something I haven’t seen on the
          market yet.”
        </p>
        <p className="cs-body margin-top-0px margin-bottom-80px">“FinWell could be useful for me since it prompts me to
          reflect on purchases and be
          more mindful of what I’m spending money on.”
        </p>

        <h3 className="cs-subtitle margin-bottom-40px sub-anchor-area" id="what-did-i-learn-title">What Did I
          Learn?</h3>
        <p className="cs-subtitle-2 margin-bottom-12px">Levelling Up</p>
        <p className="cs-body margin-bottom-80px margin-top-0px"><strong className="highlight">On the technical side, I
          got to learn and explore mobile interaction patterns and specific guidelines to keep in mind when designing
          for mobile.</strong> Additionally, I got to spend a lot of time interviewing users through this project, and
          it slowly
          became a task I feel more comfortable doing. <strong className="highlight">The insights from these interviews
            drove a lot of my design
            decisions, and I wouldn’t have been able to reach the solution I did without them.</strong></p>

        <p className="cs-subtitle-2 margin-bottom-12px">Dive Deep</p>
        <p className="cs-body margin-bottom-80px margin-top-0px"><strong className="highlight">I learned the importance
          of diving deep into your problem space before settling on a solution to design.</strong> If I had stopped
          exploring different user research methods and just gone with my initial thoughts of helping people save money,
          the final result would be much less effective.</p>

        <h3 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="future-considerations-title">Future
          Considerations</h3>
        <p className="cs-body margin-bottom-0px margin-top-0px">Given more time, I would have loved to explore more
          in-depth other
          settings and personalization options FinWell can offer users to go the extra step in feeling like a customized
          solution to their problems.</p>
        <p className="cs-body margin-top-0px margin-bottom-40px">Additionally, I would have loved to do more research
          and learn more
          about the intricacies of UX writing in the
          context of an AI tool. For example, while designing the insights screen, I wanted to brainstorm more insight
          prompts and how to phrase them best to encourage users.</p>
      </div>

      <img src={FinalImage} alt="" className="image margin-bottom-160px" id="final-image"/>

      <RedirectLinks currentPage="finwell" prevCaseStudy="access" prevCaseStudyText="Access" nextCaseStudy="aprio"
                     nextCaseStudyText="Aprio"/>
    </div>
  )
}

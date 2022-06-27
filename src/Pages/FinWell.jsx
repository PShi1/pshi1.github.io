import React, {useEffect} from 'react';
import '../Stylesheets/Finwell.scss';
import FinWellHeaderImage from '../Assets/FinWellPageImages/FinWellHeaderImage.png';
import iPhone1 from '../Assets/FinWellPageImages/iPhone1.png'
import iPhone2 from '../Assets/FinWellPageImages/iPhone2.png'
import iPhone3 from '../Assets/FinWellPageImages/iPhone3.png'
import iPhone4 from '../Assets/FinWellPageImages/iPhone4.png'
import IntelligentBudgetingBubbles from '../Assets/FinWellPageImages/IntelligentBudgetingBubbles.png';
import PurchaseTrackingBubbles from '../Assets/FinWellPageImages/PurchaseTrackingBubbles.png';
import ActionableInsightsBubbles from '../Assets/FinWellPageImages/ActionableInsightsBubbles.png';
import StressedEmoji from '../Assets/StressedEmoji.svg';
import Books from '../Assets/FinWellPageImages/Books.svg';
import CompetitiveAnalysis from '../Assets/FinWellPageImages/CompetitiveAnalysis.png';
import AffinityMap from '../Assets/FinWellPageImages/AffinityMap.png';
import AnxiousAnnie from '../Assets/FinWellPageImages/AnxiousAnnie.png';
import ConfidentCarl from '../Assets/FinWellPageImages/ConfidentCarl.png';
import AnxiousAnnieEmpathyMap from '../Assets/FinWellPageImages/AnxiousAnnieEmpathyMap.png';
import ConfidentCarlEmpathyMap from '../Assets/FinWellPageImages/ConfidentCarlEmpathyMap.png';
import {setPageToLightMode, setupScrollBar, turnAllMenuStatesOff,} from "../App";
import ParentChildSign from '../Assets/FinWellPageImages/ParentChildSign.svg';
import Survey from '../Assets/FinWellPageImages/Survey.png';
import UserInterviews from '../Assets/FinWellPageImages/UserInterviews.png'
import Ideation from '../Assets/FinWellPageImages/Ideation.png';
import GuerillaTesting1 from '../Assets/FinWellPageImages/GuerillaTesting1.png';
import GuerillaTesting2 from '../Assets/FinWellPageImages/GuerillaTesting2.png';
import UserStories from '../Assets/FinWellPageImages/UserStories.png';
import InformationArchitecture from '../Assets/FinWellPageImages/InformationArchitecture.png';
import StyleGuide0 from '../Assets/FinWellPageImages/StyleGuide0.png';
import StyleGuide1 from '../Assets/FinWellPageImages/StyleGuide1.png';
import StyleGuide2 from '../Assets/FinWellPageImages/StyleGuide2.png';
import StyleGuide3 from '../Assets/FinWellPageImages/StyleGuide3.png';
import StyleGuide4 from '../Assets/FinWellPageImages/StyleGuide4.png';
import StyleGuide5 from '../Assets/FinWellPageImages/StyleGuide5.png';
import StyleGuide6 from '../Assets/FinWellPageImages/StyleGuide6.png';
import StyleGuide7 from '../Assets/FinWellPageImages/StyleGuide7.png';
import StyleGuide8 from '../Assets/FinWellPageImages/StyleGuide8.png';
import AnchorLinks from "../Components/AnchorLinks";
import FinalImage from '../Assets/FinWellPageImages/FinalImage.png';
import {Gallery} from "../Components/Gallery";
import SketchingWireframes from "../Assets/FinWellPageImages/SketchingWireframes.png";
import UserFlows1 from '../Assets/FinWellPageImages/UserFlows1.png';
import UserFlows2 from '../Assets/FinWellPageImages/UserFlows2.png';
import UserFlows3 from '../Assets/FinWellPageImages/UserFlows3.png';
import UserFlows4 from '../Assets/FinWellPageImages/UserFlows4.png';
import {RedirectLinks} from "../Components/RedirectLinks";
import Iteration1 from '../Assets/FinWellPageImages/Iteration1.png';
import Iteration2 from '../Assets/FinWellPageImages/Iteration2.png';
import Iteration3 from '../Assets/FinWellPageImages/Iteration3.png';
import Process from '../Assets/FinWellPageImages/Process.png';
import Insights from '../Assets/FinWellPageImages/Insights.png';
import DownArrow from "../Assets/ArrowDownBlack.svg";
import UpArrow from "../Assets/ArrowUpBlack.svg";
import TestingResult1 from '../Assets/FinWellPageImages/TestingResult1.png';
import TestingResult2 from '../Assets/FinWellPageImages/TestingResult2.png';

/**
 * FinWell page component
 */
export const FinWell = () => {
  const styleGuideImages = [StyleGuide0, StyleGuide1, StyleGuide2, StyleGuide3, StyleGuide4, StyleGuide5, StyleGuide6, StyleGuide7, StyleGuide8];
  const empathyMapImages = [AnxiousAnnieEmpathyMap, ConfidentCarlEmpathyMap];
  const userPersonasImages = [AnxiousAnnie, ConfidentCarl];
  const guerillaTestingImages = [GuerillaTesting1, GuerillaTesting2];
  const userFlowsImages = [UserFlows1, UserFlows2, UserFlows3, UserFlows4];

  /**
   * Before page load, add an event listener that, when page is loaded will add in listeners for fade in components
   */
  useEffect(() => {
    //window.scrollTo(0, 0);

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

  const scrollToOverview = () => {
    let el = document.getElementById("overview-area");
    if (el) {
      el.scrollIntoView({behavior: "smooth"});
    }
  }

  const handleCollapsible = (e) => {
    let id = e.target.id;
    let element = document.getElementById(id + "-item");
    let collapsibleHeader = document.getElementById(id);
    let arrow = document.getElementById(id + "-arrow");
    if (!element.classList.contains("active")) {
      if (element.classList.contains("closed")) {
        element.classList.replace("closed", "active");
        collapsibleHeader.classList.replace("closed", "active");
      } else {
        element.classList.add("active");
        collapsibleHeader.classList.add("active");
      }
      element.style.height = element.scrollHeight + "px";
      arrow.src = UpArrow;
      let h2 = document.getElementById("click-to-view-testing-process");
      if (h2) {
        h2.innerText = "Click to Hide Detailed Testing Process";
      }
    } else {
      element.classList.replace("active", "closed");
      collapsibleHeader.classList.replace("active", "closed");
      element.style.height = "0";
      arrow.src = DownArrow;
      let h2 = document.getElementById("click-to-view-testing-process");
      if (h2) {
        h2.innerText = "Click to View Detailed Testing Process";
      }
    }
  }

  return (
    <div className="finwell-page">
      <AnchorLinks callerType="finwell"/>
      <div className="intro-wrapper margin-bottom-80px">
        <img src={FinWellHeaderImage} alt="" className="finwell-header clickable" id="header-image" onClick={() => {
          scrollToOverview()
        }}/>
      </div>

      <div className="overview margin-bottom-160px anchor-area" id="overview-area">
        <h3 className="cs-title margin-bottom-40px mid-align-title" id="overview-title">Overview</h3>
        <h2 className="cs-manrope-150-line-height margin-bottom-80px">FinWell is an intelligent budgeting app that
          helps
          increase mindfulness and reduce overspending by prompting users to reflect on past purchases over time.
        </h2>

        <h3 className="cs-subtitle-2 margin-bottom-12px" id="context-title">Problem</h3>
        <p className="cs-body margin-bottom-80px">There is an evident lack of financial education in this modern age,
          which leads to many people not knowing how to manage their finances and a general lack of financial
          literacy. <strong className="highlight">One prominent example of this is the frequent purchase of items that
            collectively go over budget and later
            cause guilt and regret, also known as impulsive spending.</strong></p>

        <h3 className="cs-subtitle-2 margin-bottom-12px" id="context-title">Solution</h3>
        <p className="cs-body margin-bottom-80px"><strong className="highlight">FinWell is a
          budgeting app that leverages AI to help young adults develop good financial habits by introducing them to
          simple financial concepts like budgeting and goal setting.</strong> It also lets users track their feelings
          about past
          purchases by prompting self-reflection entries at specific time intervals after a purchase. This encourages
          users to
          be more mindful and deliberate when spending money to ensure their purchases retain their value.
        </p>

        <div className="three-column-row margin-bottom-0px">
          <div className="left-column margin-bottom-0px">
            <h3 className="cs-subtitle-2 margin-bottom-12px" id="project-timeline-title">Project Timeline</h3>
            <p className="cs-body">2 months (Q2 2021)
            </p>
          </div>
          <div className="center-column margin-bottom-0px">
            <h3 className="cs-subtitle-2 margin-bottom-12px" id="project-type-title">Project Type</h3>
            <p className="cs-body">Sole Designer/Researcher, Course
              Project,
              Full Case Study,
              Mobile</p>
          </div>
          <div className="right-column margin-bottom-0px">
            <h3 className="cs-subtitle-2 margin-bottom-12px" id="project-tools-title">Project Tools</h3>
            <p className="cs-body">Figma, Google Forms, Miro, LucidSpark, Google Meet, Loom, Fireflies, Typeform</p>
          </div>
        </div>
      </div>

      <div className="process margin-bottom-160px anchor-area" id="process-area">
        <h2 className="cs-title mid-align-title margin-bottom-80px" id="process-title"><strong
            className="yellow-text">01</strong> -
          Process</h2>
        <img src={Process} alt="" className="image"/>
      </div>

      <div className="designed-solution margin-bottom-240px anchor-area" id="final-solution-area">
        <h2 className="cs-title mid-align-title margin-bottom-160px" id="final-solution-title"><strong
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
              <p className="solution-text">FinWell makes smart adjustments and suggests budget allocations
                based on your spending habits.</p>
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
              <h1 className="solution-title" id="purchase-tracking-title">Expense Journal</h1>
              <h2 className="solution-subtitle">Keep track of your spending.</h2>
              <p className="solution-text">FinWell prompts users to reflect on their purchases to increase
                mindfulness and curb splurging.</p>
            </div>
          </div>
        </div>

        <img id="actionable-insights-bubbles" src={ActionableInsightsBubbles} alt=""/>
        <div className="appear-on-scroll" id="actionable-insights-container">
          <div className="actionable-insights">
            <div className="left-column">
              <h1 className="solution-title" id="actionable-insights-title">Actionable Insights</h1>
              <h2 className="solution-subtitle">Build better financial habits.</h2>
              <p className="solution-text">FinWell produces actionable insights based on identified patterns and
                highlights
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

      <div className="discovery margin-bottom-160px anchor-area" id="discovery-area">
        <h2 className="cs-title mid-align-title margin-bottom-40px" id="discovery-title"><strong
            className="yellow-text">03</strong> -
          Discovery</h2>
        <h2 className="cs-manrope-150-line-height margin-bottom-80px">I knew I wanted to explore the personal finance
          space, but I wanted to dive deeper by conducting generative research to pinpoint my problem statement and
          user
          group.
        </h2>
        <h4 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="secondary-research-title">Secondary
          Research</h4>
        <p className="cs-body margin-bottom-40px">Reviewing literary papers and other secondary sources
          taught me that with student and credit debt rising, the average person’s ability to budget and save is
          diminishing from year to year. <strong className="highlight">
            This issue is especially prevalent in young adults since there is minimal exposure to financial literacy
            through
            school.</strong> Here are some key economic statistics I uncovered through secondary research:
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
              <p className="cs-body margin-top-0px">of Millennials demonstrate the ability to understand basic
                financial
                concepts. <strong
                    className="grey-text no-bold">(</strong><u
                    className="grey-text clickable" onClick={() => {
                  window.open('https://gflec.org/wp-content/uploads/2016/09/pwc-millenials-and-financial-literacy-3.pdf?x93521')
                }}>GFLEC
                </u><strong className="grey-text no-bold">)</strong></p>
            </div>
          </div>
        </div>

        <h2 className="cs-manrope-150-line-height margin-bottom-80px">The secondary research results motivated me to
          focus my solution
          on the user group of young adults (18-30 years old) who are the
          ones struggling the most with this problem.
        </h2>

        <h4 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="competitive-analysis-title">Competitive
          Analysis</h4>
        <p className="cs-body margin-bottom-40px margin-top-0px">
          I analyzed existing personal finance/budgeting products and thoroughly reviewed their heuristics and
          features to uncover any strengths/weaknesses.
        </p>

        <img className="margin-bottom-40px" id="competitive-analysis-image" src={CompetitiveAnalysis} alt=""/>

        <p className="cs-subtitle-2 margin-bottom-0px">Main Takeaways:</p>
        <ul className="margin-bottom-80px">
          <li className="cs-body">Upon closely examining the negative app store reviews for these products, I
            discovered that many products struggle with simplifying financial concepts and making their
            functionality intuitive. <strong className="highlight">Many users reported these products as challenging
              to use consistently day-to-day.</strong>
          </li>
          <li className="cs-body">Even though there were many similar products on the market to help manage your
            money, many just settled for basic budgeting features. <strong className="highlight">Very few of them had
              any additional innovation to solve the pain points of why people struggled so much with managing their
              money in the first place.</strong>
          </li>
        </ul>

        <h3 className="cs-subtitle margin-bottom-40px sub-anchor-area" id="primary-research-title">Screener Surveys</h3>
        <h2 className="cs-manrope-150-line-height margin-bottom-40px">I shared a
          screener survey
          through my network and an online Reddit thread to recruit users for further research. I received 58
          responses (72% of them young adults).
        </h2>
        <p className="cs-body margin-bottom-0px margin-top-0px">
          <ul className="margin-bottom-40px margin-top-0px">
          </ul>
        </p>

        <img className="image margin-bottom-40px" src={Survey} alt=""/>

        <div className="secondary-research-row margin-bottom-0px">
          <div className="margin-bottom-40px">
            <div className="left-column">
              <h4 className="large-number-font margin-bottom-12px">60%</h4>
              <p className="cs-body margin-top-0px">of respondents rated their own financial literacy a 3 or lower on
                a
                scale of
                1-5.</p>
            </div>
            <div className="center-column">
              <h4 className="large-number-font margin-bottom-12px">55%</h4>
              <p className="cs-body margin-top-0px">of respondents said that impulsive purchases made up the majority
                of
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

        <h4 className="cs-subtitle margin-bottom-40px sub-anchor-area" id="user-interviews-title">User Interviews</h4>
        <p className="cs-body margin-bottom-0px margin-top-80px">
          <h2 className="cs-manrope-150-line-height margin-top-160px margin-bottom-80px">I selected 8
            survey
            respondents for a follow-up virtual interview to dive deep
            into
            how they made purchasing decisions and uncover their pain points when it comes to saving money.
          </h2>These
          respondents were chosen based on 5 main criteria:
        </p>
        <ul className="margin-bottom-40px margin-top-0px">
          <li className="cs-body">Fell into the target age group of 18 - 30 years old
          </li>
          <li className="cs-body">Responded "Yes" to giving a follow-up interview in their screener
          </li>
          <li className="cs-body">Expressed high interest in learning more about financial literacy or using
            financial
            tools
          </li>
          <li className="cs-body">Revealed money issues stemming from a lack of experience or good
            financial habits
          </li>
          <li className="cs-body">Indicated that they were likely to splurge on a purchase if the opportunity came up
          </li>
        </ul>
        <img src={UserInterviews} alt="" className="margin-bottom-80px image"/>

        <h4 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="affinity-map-title">Affinity Map</h4>
        <p className="cs-body margin-bottom-40px"><strong className="highlight">Afterwards, I organized
          my interview
          notes into sticky notes and did affinity mapping to discover shared insights.</strong></p>

        <img className="image margin-bottom-80px" src={AffinityMap} alt=""/>

        <h4 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="user-personas-title">User Personas</h4>
        <p className="cs-body margin-bottom-40px margin-top-0px">I further broke down the large user group of young
          adults into 2 distinct personas. <strong className="highlight"> Then, I created the following
            personas/empathy
            maps to understand how their
            pain points and motivations differ.
          </strong></p>
        <Gallery className="margin-bottom-80px" images={userPersonasImages} uniquePrefix={"user-personas"}/>

        <h4 className="cs-subtitle margin-bottom-40px sub-anchor-area" id="empathy-maps-title">Empathy Maps</h4>
        <Gallery className="margin-bottom-80px" images={empathyMapImages} uniquePrefix={"empathy-maps"}/>
        <h4 className="cs-subtitle margin-bottom-40px sub-anchor-area"
            id="problem-statement-title">Problem
          Statement</h4>
        <p className="cs-manrope-150-line-height  margin-bottom-80px">How might we help young adults control their
          impulsive spending while building better long-term financial habits?
        </p>
        <h4 className="cs-subtitle margin-bottom-40px sub-anchor-area" id="design-considerations-title">Design
          Considerations</h4>
        <img src={Insights} alt="" className="image"/>
      </div>

      <div className="design anchor-area margin-bottom-160px" id="design-area">
        <h2 className="cs-title mid-align-title margin-bottom-40px margin-top-0px" id="design-title"><strong
            className="yellow-text">04</strong> -
          Design</h2>
        <h3 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="ideation-title">Ideation</h3>
        <p className="cs-body margin-bottom-40px"><strong className="highlight">Through mind mapping, I
          came up with 4 unique solutions that addresses at least one if not more of the pain
          points uncovered during the discovery phase:</strong></p>

        <img className="image margin-bottom-80px" src={Ideation} alt=""/>

        <h3 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="guerilla-testing-title">Guerilla
          Testing</h3>
        <p className="cs-body margin-bottom-40px">Instead of arbitrarily
          choosing a
          solution out of the 4, <strong className="highlight"> I conducted quick guerilla testing by approaching
            target users at a
            coffee shop, presenting the different concepts, and gathering user feedback.</strong> I first showed
          them minimalistic wireframes, explained the proposed features, then asked for feedback the pros and cons of
          each solution.
        </p>
        <Gallery className="margin-bottom-80px" images={guerillaTestingImages} uniquePrefix={"guerilla-testing"}/>

        <h3 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="testing-feedback-title">Testing
          Feedback</h3>
        <p className="cs-body margin-bottom-40px margin-top-0px"><strong className="highlight">After gathering the
          feedback from 10
          different target users, I decided to proceed with solution #4 as the primary solution while incorporating
          budgeting elements of solution #1 to retain users of the app.</strong> Most users were interested in
          solution
          #4 since it was something they hadn’t seen before, and many saw it as something they would use. Participants
          also expressed interest in solution #1. Still, they noted that there were many existing options in the
          market,
          and it would have to have some innovative features to be competitive. As for solutions #2 and #3,
          participants
          raised concerns about how it would be challenging to personalize the content based on the different users
          and
          how the app would have difficulty sustaining a long-term user base while providing value.</p>

        <p className="cs-manrope-150-line-height margin-bottom-80px">I will be designing an intelligent budgeting app
          with the
          additional
          feature of
          allowing users to track how they feel about purchases over time.</p>

        <h3 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="user-stories-title">User Stories</h3>
        <div className="user-stories-container margin-top-0px">
          <div className="left-column">
            <p className="cs-body margin-bottom-24px"><strong className="highlight">I created user stories based on
              the
              chosen solution and user pain points gathered from research.</strong></p>
          </div>
          <div className="right-column">
            <img src={UserStories} alt="" className="image margin-bottom-80px"/>
          </div>
        </div>

        <h3 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="information-architecture-title">Information
          Architecture</h3>
        <p className="cs-body margin-bottom-40px">I wanted to organize the user stories in a way that
          made sense for
          users, so I <strong className="highlight">created this information architecture map based on familiar
            navigation and UX patterns.</strong></p>
        <img src={InformationArchitecture} alt="" className="image margin-bottom-80px"/>

        <h3 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="sketching-wireframes-title">Sketches /
          Wireframes</h3>
        <p className="cs-body margin-bottom-40px margin-top-0px"><strong className="highlight">Next, I proceeded to
          sketch out the most
          critical user flows and turn the sketches into low-fidelity wireframes.</strong> I focused on keeping the
          end-users in mind while designing by keeping elements simple to understand and using graphs/iconography
          wherever possible.</p>
        <img className="image margin-bottom-80px" src={SketchingWireframes} alt=""/>

        <h3 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="style-guide-title">Style Guide / Design
          System</h3>
        <p className="cs-body margin-bottom-40px margin-top-0px"><strong className="highlight">I created a style guide
          to narrow
          FinWell’s identity and kept its visual identity consistent throughout the different flows.</strong> Creating
          it also made me reflect on why I chose the visual elements I did and what they represent.</p>
        <Gallery className="margin-bottom-80px" images={styleGuideImages} uniquePrefix={"style-guide"}/>

        <h3 className="cs-subtitle margin-bottom-40px sub-anchor-area" id="user-flows-title">User Flows</h3>
        <Gallery className="margin-bottom-40px" images={userFlowsImages} uniquePrefix={"user-flows"}/>
      </div>

      <div className="test-and-iterate margin-bottom-160px anchor-area" id="testing-and-iteration-area">
        <h2 className="cs-title mid-align-title margin-bottom-40px" id="testing-and-iteration-title"><strong
          className="yellow-text">05</strong> - Testing & Iteration</h2>

        <h3 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="first-usability-test-title">First Usability
          Test</h3>
        <p className="cs-body margin-bottom-40px margin-top-0px">While I had some research and heuristics to help guide
          my
          decision-making, I knew I needed to do evaluative research with actual users to validate the solution. <strong
            className="highlight">I ran 12 users
            through a 30-minute unguided usability test using interactive prototypes on
            Figma.</strong> For the testing goals, I wanted to learn their first impressions of the app/features,
          how easily they can navigate the app, and observe their task completion time.
        </p>

        <div className="collapsibles-region margin-bottom-80px">
          <div className="collapsible-header" id="temp" onClick={(e) => handleCollapsible(e)}>
            <h2 id="click-to-view-testing-process">Click to View Testing Process</h2>
            <img src={DownArrow} alt="" id="temp-arrow"/>
          </div>
          <div className="collapsible-item" id="temp-item">
            <p className="cs-body margin-bottom-0px"><strong className="highlight">I started the sessions by asking
              the
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

            <p className="cs-body margin-bottom-0px"><strong className="highlight">To test the design and
              functionality of
              FinWell, I asked
              testers to perform a series of tasks and observed how they performed and how long each task took
              them.</strong> The testers were instructed to think aloud, and I would only step in and gently guide
              them
              when
              they spent over 3 minutes stuck on a task. The tasks covered all of the main functionalities and
              included:
            </p>

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

            <p className="cs-body margin-bottom-24px"><strong className="highlight">After the tasks, I ended the
              testing
              with a general qualitative feedback session, asking them questions about their opinion on the design,
              functionality, and usability (rate out of 10).</strong></p>
          </div>
        </div>

        <img className="image margin-bottom-80px" src={TestingResult1} alt=""/>

        <h3 className="cs-subtitle margin-bottom-40px sub-anchor-area" id="iterations-title">Iterations</h3>
        <img className="image margin-bottom-80px" src={Iteration1} alt=""/>
        <img className="image margin-bottom-80px" src={Iteration2} alt=""/>
        <img className="image margin-bottom-80px" src={Iteration3} alt=""/>

        <h3 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="second-usability-test-title">Second
          Usability Test</h3>
        <p className="cs-body margin-bottom-40px margin-top-0px"><strong
          className="highlight">I wanted to test the impact of my iterations so I recruited
          10 new users and conducted the the same 30-minute usability test.</strong>
        </p>
        <img className="image margin-bottom-80px" src={TestingResult2} alt=""/>
      </div>

      <div className="final-prototype margin-bottom-160px anchor-area" id="final-prototype-area">
        <h2 className="cs-title mid-align-title margin-bottom-40px" id="final-prototype-title"><strong
          className="yellow-text">06 </strong>-
          Final Prototype</h2>
        <p className="cs-body margin-bottom-40px margin-top-0px"><strong className="highlight">Try out the Figma
          prototype yourself and go through the flow of reviewing a product you just purchased!</strong></p>
        <div className="figma-embed-wrapper" id="prototype-container">
          <iframe width="100%" height="100%"
                  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FunLE9AKolaQI5LchZdZ30e%2FFinWell%3Fpage-id%3D72%253A0%26node-id%3D727%253A8448%26viewport%3D1682%252C7008%252C0.14%26scaling%3Dcontain%26starting-point-node-id%3D727%253A8448"
                  allowFullScreen/>
        </div>
      </div>

      <div className="reflection margin-bottom-160px anchor-area" id="reflection-area" key="reflection-group">
        <h2 className="cs-title mid-align-title margin-bottom-40px" id="reflection-title"><strong
          className="yellow-text">07 </strong>-
          Reflection</h2>

        <h3 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="concept-feedback-title">Concept
          Feedback</h3>
        <p className="cs-body"><strong className="highlight">I shared the finished
          prototype of FinWell with a
          members of the online
          design community
          as well as other young adults in my network and received positive feedback.</strong> Here are a few quotes:
        </p>
        <p className="cs-body">“It’s a great idea and something I haven’t seen on the
          market yet.”
        </p>
        <p className="cs-body margin-bottom-80px">“FinWell could be useful for me since it prompts me to
          reflect on purchases and be
          more mindful of what I’m spending money on.”
        </p>

        <h3 className="cs-subtitle margin-bottom-40px sub-anchor-area" id="what-did-i-learn-title">What Did I
          Learn?</h3>
        <p className="cs-subtitle-2 margin-bottom-12px">Levelling Up</p>
        <p className="cs-body margin-bottom-80px"><strong className="highlight">On the technical side,
          I
          got to explore mobile interaction patterns and specific guidelines to keep in mind when designing
          for mobile.</strong> For example, I spent a lot of time looking at mobile design systems like Google's
          Material Design or Apple's Human Interface Guidelines to learn the rationale and research behind concepts
          such
          as
          proper sizing for touch targets.</p>

        <h3 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="future-considerations-title">Future
          Considerations</h3>
        <p className="cs-body margin-bottom-0px margin-top-0px">Given more time, I would have loved to explore more
          in-depth what other
          settings and personalization options FinWell can offer users to go the extra step in feeling like a
          customized
          solution.</p>
        <p className="cs-body margin-top-0px margin-bottom-40px">Additionally, I would have loved to learn more
          about the intricacies of UX writing in the
          context of an AI tool, such as brainstorming more insight
          prompts and how to phrase them best to encourage users.</p>
      </div>

      <img src={FinalImage} alt="" className="image margin-bottom-160px" id="final-image"/>
      <RedirectLinks currentPage="finwell" prevCaseStudy="access" prevCaseStudyText="Access" nextCaseStudy="aprio"
                     nextCaseStudyText="Aprio"/>
    </div>
  )
}

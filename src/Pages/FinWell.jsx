import React, {useEffect} from 'react';
import '../Stylesheets/Finwell.scss';
import iPhone1 from '../Assets/iPhone1.svg'
import iPhone2 from '../Assets/iPhone2.svg'
import iPhone3 from '../Assets/iPhone3.svg'
import iPhone4 from '../Assets/iPhone4.svg'
import IntelligentBudgetingBubbles from '../Assets/IntelligentBudgetingBubbles.svg';
import PurchaseTrackingBubbles from '../Assets/PurchaseTrackingBubbles.svg';
import ActionableInsightsBubbles from '../Assets/ActionableInsightsBubbles.svg';
import StressedEmoji from '../Assets/StressedEmoji.svg';
import Books from '../Assets/FinWellPageImages/Books.svg';
import CompetitiveAnalysis from '../Assets/FinWellPageImages/CompetitiveAnalysis.png';
import AffinityMap from '../Assets/FinWellPageImages/AffinityMap.svg';
import AnxiousAnnie from '../Assets/FinWellPageImages/AnxiousAnnie.svg';
import ConfidentCarl from '../Assets/FinWellPageImages/ConfidentCarl.svg';
import AnxiousAnnieEmpathyMap from '../Assets/FinWellPageImages/AnxiousAnnieEmpathyMap.svg';
import ConfidentCarlEmpathyMap from '../Assets/FinWellPageImages/ConfidentCarlEmpathyMap.svg';
import {setPageToLightMode, setupScrollBar, turnAllMenuStatesOff,} from "../App";
import FinWellHeaderImage from '../Assets/FinWellPageImages/FinWellHeaderImage.png';
import ParentChildSign from '../Assets/FinWellPageImages/ParentChildSign.svg';
import Survey from '../Assets/FinWellPageImages/Survey.svg';
import UserInterviews from '../Assets/FinWellPageImages/UserInterviews.svg'
import Ideation from '../Assets/FinWellPageImages/Ideation.svg';
import GuerillaTesting from '../Assets/FinWellPageImages/GuerillaTesting.svg';
import UserStories from '../Assets/FinWellPageImages/UserStories.svg';
import InformationArchitecture from '../Assets/FinWellPageImages/InformationArchitecture.svg';
import StyleGuide from '../Assets/FinWellPageImages/StyleGuide.svg';

/**
 * FinWell page component
 */
export const FinWell = () => {
  /**
   * Before page load, add an event listener that, when page is loaded will add in listeners for fade in components
   */
  useEffect(() => {
    window.scrollTo(0, 0);

    window.addEventListener('load', () => {
      fadeInOnScroll();
      fadeInIntro();
    })

    setPageToLightMode();
    document.title = "Emma Li | FinWell";
    setupScrollBar("#F0CA36");
    turnAllMenuStatesOff();
    highlight();
  }, []);

  /**
   * Fades in the finwell intro part, by adding active class to all elements needed
   */
  const fadeInIntro = () => {
    let leftElements = document.getElementsByClassName("left-float");
    for (const element of leftElements) {
      element.classList.add("active");
    }

    let rightElements = document.getElementsByClassName("right-float");
    for (const element of rightElements) {
      element.classList.add("active");
    }
  }

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

  return (
    <div className="finwell-page">
      <div className="intro-wrapper margin-bottom-80px">
        <img src={FinWellHeaderImage} alt="" className="finwell-header" id="header-image"/>
      </div>

      <div className="overview anchor-area" id="overview-area">
        <h3 className="cs-title margin-bottom-80px" id="overview-title">Overview</h3>
        <h2 className="cs-manrope margin-bottom-80px">FinWell is an app that <strong className="highlight">
          helps increase money mindfulness and
          prevent overspending
        </strong> by letting users track how they feel about their purchases over time.</h2>

        <h3 className="cs-subtitle margin-bottom-16px sub-anchor-area" id="context-title">Context</h3>
        <p className="cs-body margin-bottom-40px">There is an evident lack of financial education in this modern age,
          which leads to many people not knowing how to manage their finances and a general lack of financial guidance.
          One prominent example of this is the frequent purchase of items that collectively go over budget and later
          cause guilt and regret, also known as impulsive spending. <strong className="highlight">FinWell leverages AI
            to help young adults develop
            good financial habits like simple budgeting and goal setting. It also allows its users to track the way they
            feel about past purchases over time by prompting self-reflection entries at certain time intervals after a
            purchase. This encourages users to be more mindful and deliberate when making financial decisions to ensure
            their purchases retain their value as time goes by.</strong></p>

        <h3 className="cs-subtitle margin-bottom-16px sub-anchor-area" id="what-did-i-do-title">What Did I Do?</h3>
        <p className="cs-body margin-bottom-40px"><strong className="highlight">FinWell is a solo course project I did
          as part of my UX/UI program.</strong> Some of my specific work on this project include:</p>
        <ul className="margin-bottom-40px">


          <li className="cs-body">I brainstormed possible solutions and <strong className="highlight">conducted guerilla
            tests with sketch prototypes</strong> to test my hypothesis.
          </li>
          <li className="cs-body">I interviewed 8 end-users to gather insights to <strong className="highlight">create
            an affinity & empathy map.</strong></li>
          <li className="cs-body"><strong className="highlight">I designed high-fidelity screens</strong> and <strong
            className="highlight">created interactive prototypes</strong>
            of the critical user flows.
          </li>
          <li className="cs-body"><strong
            className="highlight">I conducted usability tests</strong> with the prototypes and made iterations to my
            designs.
          </li>
        </ul>

        <h3 className="cs-subtitle margin-bottom-16px sub-anchor-area" id="project-timeline-title">Project Timeline</h3>
        <p className="cs-body margin-bottom-40px"><strong className="highlight">4 weeks (May 2021)</strong>
        </p>

        <h3 className="cs-subtitle margin-bottom-16px sub-anchor-area" id="project-type-title">Project Type</h3>
        <p className="cs-body"><strong className="highlight">Sole Designer, Course Project, Full Case Study,
          Mobile</strong></p>
        <p className="cs-body margin-bottom-40px">User Research, Brainstorming, Solution Validation, Sketching,
          Wireframing, Usability Testing, Prototyping, Branding</p>

        <h3 className="cs-subtitle margin-bottom-16px sub-anchor-area" id="project-tools-title">Project Tools</h3>
        <p className="cs-body margin-bottom-80px"><strong className="highlight">Figma, Google Forms, Miro, LucidSpark,
          Adobe Illustrator, Protopie</strong></p>
      </div>

      <div className="process margin-bottom-80px anchor-area" id="process-area">
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

      <div className="designed-solution margin-bottom-80px anchor-area" id="final-solution-area">
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

      <div className="discovery margin-bottom-80px anchor-area" id="discovery-area">
        <h3 className="cs-title margin-bottom-80px" id="discovery-title"><strong className="yellow-text">03</strong> -
          Discovery</h3>
        <h2 className="cs-manrope margin-bottom-80px">I started the project with a vague idea that I wanted to pursue a
          problem related to my financial background and help people be better at managing their finances. Initially, I
          wanted to create an educational app to teach basic financial lessons but later pivoted to <strong
            className="highlight">
            focusing on young adults and an app targeting overspending.
          </strong></h2>
        <h4 className="cs-subtitle margin-bottom-40px sub-anchor-area" id="secondary-research-title">Secondary
          Research</h4>
        <p className="body-font margin-bottom-40px">Through reviewing literary papers and other secondary sources
          online, I learned that with student and credit debt rising, the average person’s ability to budget and save is
          diminishing from year to year. <strong className="highlight">
            This is especially prevalent in young adults since there is minimal exposure to financial literacy through
            school. Here are some key economic statistics I uncovered through secondary research:
          </strong>
        </p>

        <div className="secondary-research-row margin-bottom-80px">
          <div className="spacing-div margin-bottom-80px">
            <div className="left-column">
              <img src={StressedEmoji} alt=""/>
              <h4 className="cs-subtitle-2">63%</h4>
              <p className="cs-body">of Millennials feel anxious when thinking about their financial situation. (TIAA
                Institute)</p>
            </div>
            <div className="center-column">
              <img src={ParentChildSign} alt=""/>
              <h4 className="cs-subtitle-2">60%</h4>
              <p className="cs-body">of parents report giving their kids financial help in the past year. (Pew Research
                Center)</p>
            </div>
            <div className="right-column">
              <img src={Books} alt=""/>
              <h4 className="cs-subtitle-2">Only 24%</h4>
              <p className="cs-body">of Millennials demonstrate the ability to understand basic financial concepts.
                (GFLEC)</p>
            </div>
          </div>
        </div>

        <h2 className="cs-manrope margin-bottom-80px">The secondary research results motivated me to focus my solution
          on the user group of <strong className="highlight">young adults (18-30 years old)</strong> since they are the
          most impacted by this problem.
        </h2>

        <h4 className="cs-subtitle margin-bottom-12px" id="competitive-analysis-title">Competitive Analysis</h4>
        <p className="cs-body margin-bottom-12px">I wanted to create a product that offered more than current solutions
          already on the
          market. <strong
            className="highlight">
            To do this, I analyzed a list of current financial education/budgeting products and examined their
            heuristics
            and features.
          </strong></p>

        <img id="competitive-analysis-image" src={CompetitiveAnalysis} alt=""/>

        <p className="cs-subtitle-2">Main Takeaways:</p>
        <ul>
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
        <p><strong className="highlight">I sent out a Google Forms screener survey to my network and anonymously online
          on Reddit to:</strong></p>

        <ul>
          <li className="cs-body">Validate the assumption that this was a problem most prevalent amongst young adults
            (18-30 years old)
          </li>
          <li className="cs-body"><strong className="highlight">Identify the main pain points that prevented people from
            saving money and making other responsible financial decisions
            I ended up receiving 58 responses, with over 70% from users in my target group of young adults.</strong>
          </li>
        </ul>

        <img className="image margin-bottom-40px" src={Survey} alt=""/>

        <div className="secondary-research-row margin-bottom-60px">
          <div className="spacing-div margin-bottom-80px">
            <div className="left-column">
              <h4 className="cs-subtitle-2">60%</h4>
              <p className="cs-body">of respondents rated their own financial literacy a 3 or lower on a scale of
                1-5.</p>
            </div>
            <div className="center-column">
              <h4 className="cs-subtitle-2">55%</h4>
              <p className="cs-body">of respondents said that impulsive purchases made up the majority of their expenses
                outside of the necessities.</p>
            </div>
            <div className="right-column">
              <h4 className="cs-subtitle-2">85%</h4>
              <p className="cs-body">of respondents can recall "overspending" on a purchase in the last month due to an
                emotional trigger.</p>
            </div>
          </div>
        </div>

        <h4 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="user-interviews-title">User Interviews</h4>
        <p className="cs-body">Out of the respondents to the screener survey, <strong className="highlight">I chose 8
          respondents in-depth for follow-up interviews.</strong> These
          respondents were chosen based on four criteria:</p>
        <ul className="margin-bottom-40px">
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
        <p className="cs-body margin-bottom-24px"><strong className="highlight">These interviews were conducted with the
          goal to talk more in-depth about the motivations behind some of their financial decisions and why it was so
          hard to build better financial habits.</strong></p>
        <img src={UserInterviews} alt="" className="margin-bottom-80px image"/>

        <h4 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="affinity-map-title">Affinity Map</h4>
        <p className="cs-body margin-bottom-40px"><strong className="highlight">Afterwards, I organized my interview
          notes into sticky notes and did affinity mapping in Miro to discover shared insights.</strong></p>

        <img className="image" src={AffinityMap} alt=""/>

        <h4 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="user-personas-title">User Personas</h4>
        <p className="cs-body">Based on the previous research, I discovered that the large user group of young adults
          can be further
          broken
          down. <strong className="highlight">
            I created the following personas/empathy maps to understand better the two distinct groups and their
            different pain points and motivations.
          </strong></p>
        <img className="image margin-bottom-40px" src={AnxiousAnnie} alt=""/>
        <img className="image margin-bottom-40px" src={ConfidentCarl} alt=""/>

        <h4 className="cs-subtitle margin-bottom-40px sub-anchor-area" id="empathy-maps-title">Empathy Maps</h4>
        <img src={AnxiousAnnieEmpathyMap} alt="" className="image margin-bottom-40px"/>
        <img src={ConfidentCarlEmpathyMap} alt="" className="image margin-bottom-40px"/>

        <h4 className="cs-subtitle margin-bottom-40px sub-anchor-area" id="problem-statement-title">Problem
          Statement</h4>
        <p className="cs-body margin-bottom-12px"><strong className="highlight">The main findings synthesized from
          research include:
        </strong></p>
        <ul className="margin-bottom-40px">
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

        <p className="cs-manrope margin-bottom-80px"><strong className="highlight">How might we help young adults (18-30
          years old) better control their impulsive spending habits and build better long-term financial
          habits?</strong></p>
      </div>

      <div className="design anchor-area" id="design-area">
        <h3 className="cs-title margin-bottom-40px" id="design-title"><strong className="yellow-text">04</strong> -
          Design</h3>
        <h3 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="ideation-title">Ideation</h3>
        <p className="cs-body margin-bottom-80px">I wanted to ensure I covered as many areas as possible when
          brainstorming, so I took time to do various exercises to think outside the box, such as mind mapping and
          storyboarding. <strong className="highlight">I often referred back to the synthesized user research to make
            sure that every solution solves the problem statement and addresses at least one if not more of the pain
            points of the user group. I finally narrowed the solutions down to 4:</strong></p>

        <img className="image margin-bottom-80px" src={Ideation} alt=""/>

        <h3 className="cs-subtitle margin-bottom-40px sub-anchor-area" id="guerilla-testing-title">Guerilla Testing</h3>
        <p className="cs-body margin-bottom-40px"><strong className="highlight">Instead of arbitrarily choosing a
          solution out of the 4, I conducted some basic guerilla testing by approaching users in the target group at a
          coffee shop, presenting the different concepts to them, and gathering user feedback on all 4.</strong> I did
          this by presenting them with minimalistic wireframes alongside a short explanation of the proposed features
          and asking for feedback on the app's usefulness in solving their pain points. Here are some of the example
          wireframes used to present solution #1 and #2:
        </p>
        <img src={GuerillaTesting} alt="" className="image margin-bottom-80px"/>

        <h3 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="testing-feedback-title">Testing Feedback</h3>
        <p className="cs-body margin-bottom-80px"><strong className="highlight">After gathering the feedback from 10
          different target users, I decided to proceed with solution #4 as the primary solution while incorporating
          budgeting elements of solution #1 to retain users of the app.</strong> Most users were interested in solution
          #4 since it was something they hadn’t seen before, and many saw it as something they would use. Participants
          also expressed interest in solution #1. Still, they noted that there were many existing options in the market,
          and it would have to have some innovative features to be competitive. As for solutions #2 and #3, participants
          raised concerns about how it would be challenging to personalize the content based on the different users and
          how the app would have difficulty sustaining a long-term user base while providing value.</p>

        <p className="cs-manrope margin-bottom-80px">The app will be a budgeting app with the added functionality of
          allowing users to track how they feel about purchases and providing useful insights over time.</p>

        <h3 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="user-stories-title">User Stories</h3>
        <p className="cs-body margin-bottom-24px"><strong className="highlight">I created user stories based on the
          chosen solution and user pain points gathered from research.</strong></p>
        <img src={UserStories} alt="" className="image margin-bottom-80px"/>

        <h3 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="information-architecture-title">Information
          Architecture</h3>
        <p className="cs-body margin-bottom-24px">I wanted to organize the user stories in a way that made sense for
          users, so I <strong className="highlight">created this information architecture map based on familiar
            navigation and UX patterns.</strong></p>
        <img src={InformationArchitecture} alt="" className="image margin-bottom-80px"/>

        <h3 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="user-flows-title">User Flows</h3>
        <div className="margin-bottom-80px"/>

        <h3 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="sketching-wireframes-title">Sketching /
          Wireframes</h3>
        <p className="cs-body margin-bottom-24px"><strong className="highlight">Next, I proceeded to sketch out the most
          critical user flows and turn the sketches into low-fidelity wireframes.</strong></p>
        <div className="margin-bottom-80px"/>

        <h3 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="style-guide-title">Style Guide</h3>
        <p className="cs-body margin-bottom-80px"><strong className="highlight">I created a style guide to narrow
          FinWell’s identity and kept its visual identity consistent throughout the different flows.</strong> Creating
          it
          also made me reflect on why I chose the visual elements I did and what they represent.</p>
        <img src={StyleGuide} alt="" className="image margin-bottom-80px"/>
      </div>
    </div>
  )
}

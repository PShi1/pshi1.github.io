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
import Coin from '../Assets/Coin.svg';
import StressedEmoji from '../Assets/StressedEmoji.svg';
import TeddyBear from '../Assets/TeddyBear.svg';
import Books from '../Assets/Books.svg';
import CompetitiveAnalysis from '../Assets/CompetitiveAnalysis.svg';
import AffinityMap from '../Assets/AffinityMap.svg';
import AnxiousAnnie from '../Assets/AnxiousAnnie.png';
import ConfidentCarl from '../Assets/ConfidentCarl.png';
import EmpathyMap1 from '../Assets/EmpathyMap1.png';
import EmpathyMap2 from '../Assets/EmpathyMap2.png';
import DownArrowWhite from '../Assets/downArrowSmallWhite.gif';
import {
  setPageToLightMode,
} from "../App";

/**
 * FinWell page component
 */
export const FinWell = () => {
  /**
   * Before page load, add an event listener that, when page is loaded will add in listeners for fade in components
   */
  useEffect(() => {
    window.addEventListener('load', () => {
      fadeInOnScroll();
      fadeInIntro();
      removeDownArrow();
    })

    setPageToLightMode();
    document.title = "Emma Li | FinWell";
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

  const removeDownArrow = () => {
    let element = document.getElementById("down-arrow-second");
    let scroll = window.scrollY;
    let innerHeight = window.innerHeight;
    window.addEventListener("scroll", () => {
      scroll = window.scrollY;

      let pos = element.offsetTop;
      if ((scroll + innerHeight) / 1.3 >= pos) {
        element.classList.add("active");
      }
    })
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

  return (
    <div className="finwell-page">
      <div className="intro-wrapper foreground">
        <div className="left-column">
          <img id="finwell-logo" className="left-float" src={FinWellImage} alt="finwell logo"/>
          <p id="finwell-description" className="left-float">Using AI to build mindfulness and help control impulse spending by letting users reflect on their purchases over time.</p>
        </div>
        <div className="right-column">
          <img className="right-float" id="samsung-phones" src={SamsungImage} alt="samsung phones"/>
        </div>
        {/*<img className="down-arrow" id="down-arrow-second" src={DownArrowWhite} alt=""/>*/}
      </div>

      <div className="overview">
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

      <div className="approaches">
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

      <div className="discovery">
        <div className="large-margins">
          <h3><strong>01</strong> Discovery</h3>
          <h4>Secondary Research</h4>
          <p className="body-font">I discovered through secondary research that the way young adults make financial decisions is very intertwined
            with both their emotional state and lifestyle choices. In addition, there is very limited exposure to financial
            literacy through school. With student debt and credit debt on the rise, the average person’s ability to budget
            and save is diminishing. Here are some key statistics I discovered from online sources about young adults living in America:
          </p>

          <div className="row">
            <div className="left-column">
              <img src={Coin} alt=""/>
              <p className="no-bottom-margin">Young adults who receive financial education are less likely to carry credit card debt, and more likely to apply to and receive grants and financial aid.</p>
              <ul>
                <li className="grey-text">Council for Economic Education</li>
              </ul>
            </div>
            <div className="right-column">
              <img src={StressedEmoji} alt=""/>
              <p className="no-bottom-margin"><strong>59%</strong> of adults in the U.S. admitted to living paycheck to paycheck in 2019.</p>
              <ul>
                <li className="grey-text">Schwab</li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="left-column">
              <img src={TeddyBear} alt=""/>
              <p className="no-bottom-margin"><strong>One in four</strong> parents reported that they never or almost never talk to their kids about household finances.</p>
              <ul>
                <li className="grey-text">Guidant</li>
              </ul>
            </div>
            <div className="right-column">
              <img src={Books} alt=""/>
              <p className="no-bottom-margin"><strong>54%</strong> of student loan holders didn’t attempt to figure out their future monthly payments before taking out their loans.</p>
              <ul>
                <li className="grey-text">GFLEC</li>
              </ul>
            </div>
          </div>

          <h4 id="competitive-analysis-header">Competitive Analysis</h4>
          <p>I wanted to create a product that offered more than current solutions already on the market, to do this,
            I went through a list of current financial/budgeting products and did an analysis of their heuristics along with their features.</p>
        </div>
        <img id="competitive-analysis-image" src={CompetitiveAnalysis} alt=""/>
        <div className="large-margins">
          <p><strong>Main takeaways:</strong></p>
          <ol>
            <li className="body-font-18px">Many of the existing products struggled with simplifying financial concepts and making their functionality
              intuitive, which is why many users in my target group of young adults don’t really want to use these products
              on a day-to-day basis.
            </li>
            <li className="body-font-18px">Even though there were many similar products on the market to help manage your money, none had any additional
              innovative features to really solve the pain points of why people struggled so much with managing their money in the first place.</li>
          </ol>
        </div>

        <div className="large-margins">
          <h4>User Surveys</h4>
          <p>I sent out a Google forms screener survey and collected <strong>36 responses</strong> to validate the
            primary research and quickly identify the main pain points when it comes to making better financial decisions.
            I decided to focus on the age group of young adults (18-30) because that was the group where the issue was
            the most prevalent according to the primary research.</p>
          <div className="left-column">
            <h1>85%</h1>
            <p>of respondents can recall "overspending" on a purchase in the last month due to an emotional trigger</p>
          </div>
          <div className="right-column">
            <h1>60%</h1>
            <p>of respondents said that impulsive purchases made up the majority of their expenses outside of the necessities.</p>
          </div>
          <h4>User Interviews</h4>
          <p>Out of the respondents to the screener survey, I chose 8 respondents for follow-up interviews. These respondents were chosen based on four criteria:</p>
          <ul>
            <li className="body-font-18px">The target age group of 18 - 30 years old</li>
            <li className="body-font-18px">Expressed interest in learning more about financial literacy and using financial tools to help them reach financial goals</li>
            <li className="body-font-18px">Expressed issues with money stemming from a lack of experience with building good financial habits like planning or budgeting</li>
            <li className="body-font-18px">Self-identified as having lower financial literacy</li>
          </ul>
          <p>These interviews were conducted with the goal to talk more in-depth about the motivations behind some of their
            financial decisions and why it was so hard to stick to basic budgets and build better financial habits in the first place.</p>
          <h4>Affinity Map</h4>
          <p>Afterwards, I organized my interview notes into sticky notes and did affinity mapping to discover common insights.</p>
          <p>My main takeaways from all of my secondary research methods validated my primary research and also showed that:</p>
          <ul>
            <li className="body-font-18px">Impulsive spending and a lack of budget were the two main reasons that kept surfacing for why it was difficult to save their income.</li>
            <p>“Sometimes it’s so hard to stop myself from buying something I really want at the moment.”</p>
            <li className="body-font-18px">Lots of impulsive spending was tied to emotional triggers such as feeling upset,
              something bad happening or even a positive emotion like getting a good grade and wanting to splurge to celebrate. This leads to many purchases that don’t retain their value.</li>
            <p>“When I’m in a bad mood or something bad happens to me, spending money on a night out or new clothes actually
              makes me feel better. However, lots of things I’ve purchased over the years have just sat in my house forgotten.”</p>
            <li className="body-font-18px">Lots of interviewees admitted to spending more than was required or was wise, especially in categories such as clothing, takeout, and entertainment.</li>
            <p>“The biggest offenders are definitely takeout and shopping, those two categories make up around 30% of my expenses every month.”</p>
          </ul>
        </div>
        <img className="image" src={AffinityMap} alt=""/>

        <div className="large-margins">
          <h4>User Personas</h4>
          <p>Based on the previous research, I discovered that the large user group of young adults can be further broken
            down into two distinct groups with separate pain points and motivations.</p>
        </div>
        <div className="medium-margins">
          <img className="image" src={AnxiousAnnie} alt=""/>
          <img className="image" src={ConfidentCarl} alt=""/>
        </div>
        <div className="large-margins">
          <h4>Empathy Maps</h4>
          <p>Based on the previous research, I discovered that the large user group of young adults can be further
            broken down into two distinct groups with separate pain points and motivations.</p>
        </div>
        <img src={EmpathyMap1} alt="" className="image"/>
        <img src={EmpathyMap2} alt="" className="image"/>
      </div>
  </div>
  )
}
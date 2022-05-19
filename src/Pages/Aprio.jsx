import React, {useEffect} from 'react';
import {setPageToLightMode, setupScrollBar, turnAllMenuStatesOff} from "../App";
import "../Stylesheets/Aprio.scss"
import AprioHeaderImage from "../Assets/AprioPageImages/AprioHeaderImage.png";
import AprioProcess from '../Assets/AprioPageImages/AprioProcess.png';
import FemaleDev from '../Assets/AprioPageImages/FemaleDev.svg';
import Woman from '../Assets/AprioPageImages/Woman.svg';
import Target from '../Assets/AprioPageImages/Target.svg';
import Easy from '../Assets/AprioPageImages/1234.svg';
import PuzzlePiece from '../Assets/AprioPageImages/PuzzlePiece.svg';
import Dashboard from '../Assets/AprioPageImages/Dashboard.png'
import ClientProfiles from '../Assets/AprioPageImages/ClientProfiles.png';
import ListOfUsers from '../Assets/AprioPageImages/ListOfUsers.png';
import TaskPage from '../Assets/AprioPageImages/TaskPage.png';
import PinkBox from '../Assets/AprioPageImages/PinkBox.png';
import AprioFinalImage from '../Assets/AprioPageImages/AprioFinalImage.png';

export const Aprio = () => {
  useEffect(() => {
    setPageToLightMode();
    document.title = "Emma Li | Aprio";
    setupScrollBar("#FF6D00");
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

  return (
    <div className="aprio-page">
      <img className="full-width-image margin-bottom-80px" src={AprioHeaderImage} alt=""/>

      <div className="overview">
        <h3 className="cs-title margin-bottom-80px">Overview</h3>
        <h2 className="cs-manrope margin-bottom-80px">I led the ideation and design of a brand new client management portal for a top 50 US accounting firm.</h2>

        <h3 className="cs-subtitle margin-bottom-16px">Context</h3>
        <p className="cs-body margin-bottom-40px">Aprio is a top private accounting firm headquartered in Atlanta with a massive problem. <strong className="highlight">It was exponentially growing in size and revenue every quarter, but its employees were stuck  using external software
          that was decades old. It was slow, inefficient, and heavily outdated.</strong> My employer at the time, Moken Agency, was hired
          to fix this problem and tasked me with creating their first internal software application. <strong className="highlight">The objective was to start
          the foundation of an entirely new software ecosystem that would digitize the accounting experience and help launch
          the firm into the future.</strong></p>

        <h3 className="cs-subtitle margin-bottom-16px">What Did I Do?</h3>
        <p className="cs-body">This was my most challenging project to date, but it also allowed me to work on something
          extraordinarily impactful and grow tremendously as a product designer. Some of my greatest achievements on the Aprio project are:</p>
        <ul>
          <li className="cs-body"><strong className="highlight">I outlined a detailed design process to follow for building this software from the ground up.</strong></li>
          <li className="cs-body">I combined Aprio’s current branding with their need to constantly innovate to <strong className="highlight"> create a visual identity and design system for the new software suite.</strong></li>
          <li className="cs-body"><strong className="highlight">I conducted several different rounds of usability tests with multiple groups of end-users</strong> to discover any user experience issues and room for improvement.</li>
          <li className="cs-body"><strong className="highlight">I collaborated with software developers, product owners, and product managers</strong> to design, prototype, test, and launch the first MVP of the product.</li>
        </ul>

        <h3 className="cs-subtitle margin-bottom-16px">Project Timeline</h3>
        <p className="cs-body margin-bottom-40px"><strong className="highlight">3 months (Q1 2022 -> Q2 2022)</strong></p>

        <h3 className="cs-subtitle margin-bottom-16px">Project Type</h3>
        <p className="cs-body"><strong className="highlight">Sole Designer, Client Project, Partial (Confidential) Case Study, Web</strong></p>
        <p className="cs-body margin-bottom-40px">User Research, Usability Testing, Prototyping, Branding, Design System</p>

        <h3 className="cs-subtitle margin-bottom-16px">Project Tools</h3>
        <p className="cs-body margin-bottom-40px"><strong className="highlight">Figma, Miro, Jira, Confluence, Optimal Workshop, Userback, Maze</strong></p>

        <h3 className="cs-subtitle margin-bottom-16px">Privacy Disclaimer</h3>
        <p className="cs-body margin-bottom-80px"><strong className="highlight">To protect Aprio’s extremely classified information, I am not allowed to display the entirety of my work.</strong> Specific
          details and photos in this case study have been simplified, altered, or omitted entirely. The data used in the mockups below are meant to be placeholders and are not accurate
          to the attributes and data used in the actual product. <strong className="highlight">If you would like to learn more in-depth about my work for Aprio, feel free to contact me directly.</strong></p>
      </div>

      <div className="process margin-bottom-80px">
        <h2 className="cs-title margin-bottom-80px"><strong className="orange-text">01 </strong>- Process</h2>
        <img className="full-width-image" src={AprioProcess} alt=""/>
        <h3 className="cs-subtitle margin-bottom-40px">Introduction</h3>

        <p className="cs-body margin-bottom-80px"><strong className="highlight">My task was to create the MVP of their internal software. This project is called AMP (Aprio Management Portal).</strong> AMP
          allowed Aprio employees to see the data collected on their clients, manage task assignments, and change client information. The ultimate goal is to create a centralized information
          hub and consolidate many complex tasks currently performed by outdated external software. <strong className="highlight">In the end, I successfully designed and helped ship the
            first of many software that will later combine to form the Aprio ecosystem.</strong></p>
        <h2 className="cs-manrope margin-bottom-80px">Once shipped, AMP would affect over 1,000 Aprio employees and over 10,000 Aprio clients all around the globe.</h2>

        <div className="row margin-bottom-80px">
          <h3 className="cs-subtitle margin-bottom-40px">What Are Users Experiencing?</h3>
          <div className="left-column">
            <img className="emoji margin-bottom-24px" src={FemaleDev} alt=""/>
            <h3 className="cs-subtitle-2 margin-bottom-12px">Employees</h3>
            <p className="cs-body">“I always need at least three programs open to do my job.”</p>
            <p className="cs-body">“I spend a lot of my day chasing people for information.”</p>
            <p className="cs-body">“Who else is my client working with?”</p>
          </div>
          <div className="right-column">
            <img className="emoji margin-bottom-24px" src={Woman} alt=""/>
            <h3 className="cs-subtitle-2 margin-bottom-12px">Clients</h3>
            <p className="cs-body">“How do I update my information?”</p>
            <p className="cs-body">“What is the status of my ongoing tasks?”</p>
            <p className="cs-body">“It takes a long time to get into contact for help.”</p>
          </div>
        </div>

        <h3 className="cs-subtitle margin-bottom-12px">My North Star</h3>
        <p className="cs-body margin-bottom-36px"><div className="highlight">The following are the guiding philosophies I kept in mind throughout the process:</div></p>

        <div className="north-star-row margin-bottom-80px">
          <div className="spacing-div margin-bottom-80px">
            <div className="left-column">
              <img src={Target} alt=""/>
              <h4 className="cs-subtitle-2">Design for Target Audience</h4>
              <p className="cs-body">This was my first time designing software for an enterprise client, so <strong className="highlight">I took the time to learn about the target audience's many personal needs and preferences.</strong></p>
            </div>
            <div className="center-column">
              <img src={Easy} alt=""/>
              <h4 className="cs-subtitle-2">Simplification</h4>
              <p className="cs-body">I wanted to make sure that every function or feature was boiled down to the easiest and fastest possible execution. <strong className="highlight">This software should save time, not waste it.</strong></p>
            </div>
            <div className="right-column">
              <img src={PuzzlePiece} alt=""/>
              <h4 className="cs-subtitle-2">Utilize Familiar Patterns</h4>
              <p className="cs-body">Utilizing familiar UI/UX patterns is crucial to <strong className="highlight">increasing the adoption rate and decreasing the time it would take users to learn the software and integrate it into their workflows.</strong></p>
            </div>
          </div>
        </div>
      </div>

      <div className="design-mockups margin-bottom-80px">
        <h2 className="cs-title margin-bottom-80px"><strong className="orange-text">02 </strong>- Design Mockups</h2>

        <p className="cs-subtitle margin-bottom-12px">Dashboard</p>
        <p className="cs-body"><strong className="highlight">The dashboard is a customized home screen depending on the user’s role and responsibilities. Users can view their action items and an overview of their assigned clients and tasks.</strong></p>
        <ul className="margin-bottom-40px">
          <li className="cs-body">I conducted user interviews and usability testing with different user groups, from company directors to regular employees, to determine how to best design the dashboard to fit their specific needs.</li>
          <li className="cs-body margin-bottom-40px"><strong className="highlight">Design considerations - ensuring that all action items can be resolved straight from the dashboard, and simple component behaviours such as the first line item in a list are always being automatically expanded to save time.</strong></li>
        </ul>
        <img className="full-width-image" src={Dashboard} alt=""/>

        <p className="cs-subtitle margin-bottom-12px">Client Profiles</p>
        <p className="cs-body">
          <strong className="highlight">The client profile is a page sorted into tabs with all the information collected about a specific client.</strong>
        </p>
        <ul className="margin-bottom-40px">
          <li className="cs-body"><strong className="highlight">I conducted company-wide card sorting to determine the most intuitive way to group sensitive information.</strong></li>
          <li className="cs-body">I consolidated and integrated multiple entity-relationship diagrams to determine what information was essential to display from the massive amount of information collected and stored in the Azure database.</li>
        </ul>
        <img src={ClientProfiles} alt="" className="full-width-image"/>

        <p className="cs-subtitle margin-bottom-12px">List of Users</p>
        <p className="cs-body">
          <strong className="highlight">The list of users gives a view of all the company employees and their critical information.</strong>
        </p>
        <ul className="margin-bottom-40px">
          <li className="cs-body"><strong className="highlight">I conducted user interviews and testing to determine line items and order of importance for information architecture.</strong></li>
          <li className="cs-body">After testing with users, I added quality of life changes such as local time zone for each user.</li>
          <li className="cs-body">Design consideration - adding search and filter functionality to speed up finding a specific user.</li>
        </ul>
        <img src={ListOfUsers} alt="" className="full-width-image"/>

        <p className="cs-subtitle margin-bottom-12px">Task Page</p>
        <p className="cs-body">
          <strong className="highlight">The task page is a detailed view of a specific task and all related data such as assignments and associated tasks.</strong>
        </p>
        <ul className="margin-bottom-40px">
          <li className="cs-body"><strong className="highlight">I conducted workshops and meetings to discuss the nomenclature and how to keep naming conventions consistent.</strong></li>
          <li className="cs-body">Design consideration - split-screen view allows users to reference and keep the most crucial information on the screen.</li>
        </ul>
        <img src={TaskPage} alt="" className="full-width-image"/>

        <p className="cs-subtitle margin-bottom-12px">User Flow: Task Assignment</p>
        <p className="cs-body">
          <strong className="highlight">The following is an example user flow of the feature to allow managers to assign tasks to their team members.</strong>
        </p>
        <ul className="margin-bottom-40px">
          <li className="cs-body">Design consideration - I wanted to reference existing task assignment UX patterns used in popular tools such as
            Jira when designing this feature since that would be a familiar pattern with the Aprio user groups.</li>
        </ul>
        <img src={PinkBox} alt="" className="full-width-image"/>

        <p className="cs-subtitle margin-bottom-12px">User Flow: Global Search</p>
        <p className="cs-body">
          <strong className="highlight">The following is an example user flow of the global search functionality featured in the top navigation bar.</strong>
        </p>
        <ul className="margin-bottom-40px">
          <li className="cs-body"><strong className="highlight">I conducted user interviews to find out the most common items searched and how to best group search results.</strong></li>
          <li className="cs-body">Design consideration - search results are split into groups through tabs to speed up lookup time.</li>
        </ul>
        <img src={PinkBox} alt="" className="full-width-image"/>
      </div>

      <div className="impact margin-bottom-80px">
        <div className="impact-inner">
          <p className="cs-title margin-bottom-80px"><strong className="orange-text">03</strong> - Impact</p>
          <div className="margin-bottom-40px">
            <div className="impact-left">
              <p className="cs-title margin-bottom-32px">Before</p>
              <ul>
                <li className="cs-body margin-bottom-24px"><p className="impact-number">10</p> different software needed to accomplish tasks</li>
                <li className="cs-body margin-bottom-24px"><p className="impact-number">6</p> different sources of client information</li>
                <li className="cs-body margin-bottom-24px"><p className="impact-number">Countless</p> time spent on the phone chasing information</li>
              </ul>

            </div>
            <div className="impact-right">
              <p className="cs-title margin-bottom-32px">After</p>
              <ul>
                <li className="cs-body margin-bottom-24px"><p className="impact-number">1</p> unified Aprio portal</li>
                <li className="cs-body margin-bottom-24px"><p className="impact-number">1</p> single source of truth for client information</li>
                <li className="cs-body margin-bottom-24px"><p className="impact-number">Significantly less</p> time spent on the phone chasing information</li>
              </ul>
            </div>
          </div>

          <p className="cs-body margin-bottom-40px">Although AMP still had not been fully released when I wrote this case study, I was able to see the MVP perform
            in a small-scale implementation across many departments. The feedback I gathered from everyone at Aprio was extremely positive, and I will continue to
            shape the future of the Aprio suite of products. Countless hours of design thinking and iterations were necessary to get to the core of the user pain
            points and create a product that would become the very first software launch for the 70-year-old accounting firm Aprio.</p>
          <p className="cs-subtitle margin-bottom-12px">Next Steps</p>
          <p className="cs-body margin-bottom-80px">I will continue testing and discovering bugs in the QA process and collaborate closely with the development
            team on the massive task of connecting to the Azure database by identifying what information we need and how we need it. Additionally, I will begin
            planning the design of the following Aprio software, which will function as the counterpart of AMP -- a client portal.</p>
        </div>
      </div>

      <div className="reflection margin-bottom-80px">
        <h2 className="cs-title margin-bottom-80px"><strong className="orange-text">04 </strong>- Reflection</h2>
        <p className="cs-subtitle margin-bottom-12px">Always Validate User Assumptions</p>
        <p className="cs-body margin-bottom-40px">Throughout the process of creating AMP, I had the pleasure and opportunity to talk to employees at all different
          levels within Aprio. <strong className="highlight">This helped me confirm the importance of validating user assumptions. Through the conversations, I
            realized that higher-level employees such as directors or managers often miss the mark or are entirely incorrect in identifying the problems lower-level
            employees such as associates struggle with.</strong></p>
        <p className="cs-subtitle margin-bottom-12px">Advocate for UX</p>
        <p className="cs-body">When working in an agency setting, you will often find yourself in a room filled with people who are very used to thinking about
          problems from the business or development perspective. It is vital in those situations to educate and inform them as to the rationale behind your design
          decisions and why it will be better for users in the long run. <strong className="highlight">Through this project, I learned a lot about how to advocate
            for proper design, the importance of user research, and how to articulately present to stakeholders.</strong></p>
      </div>

      <img className="margin-bottom-160px" id="access-final-image" src={AprioFinalImage} alt=""/>
    </div>
  )
}
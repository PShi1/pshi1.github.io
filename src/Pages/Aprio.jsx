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
import AprioFinalImage from '../Assets/AprioPageImages/AprioFinalImage.png';
import Video1 from '../Assets/AprioPageImages/Video1.mkv';
import Video2 from '../Assets/AprioPageImages/Video2.mkv';
import AnchorLinks from "../Components/AnchorLinks";
import {
  cursorDefaultColor,
  cursorLightModeColor,
  cursorLightModeInnerOpacity,
  cursorLightModeOuterOpacity
} from "../Components/AnimatedCursor";
import {RedirectLinks} from "../Components/RedirectLinks";

export const Aprio = () => {
  useEffect(() => {
   // window.scrollTo(0, 0);

    setPageToLightMode();
    document.title = "Emma Li | Aprio";
    setupScrollBar("#FF6D00");
    turnAllMenuStatesOff();
    highlight();
    setImpactAreaToHaveReversedCursorColours();
  }, []);

  /**
   * This is done so that when the cursor hovers over the impact area (black area), the cursor is still viewable
   */
  const setImpactAreaToHaveReversedCursorColours = () => {
    let el = document.getElementById("impact-area");
    el.addEventListener("mouseover", () => {
      // Set cursor colors
      let innerCursor = document.getElementById("inner-cursor");
      let outerCursor = document.getElementById("outer-cursor");
      if (innerCursor) {
        innerCursor.style.backgroundColor = `rgba(${cursorDefaultColor + "," + cursorLightModeInnerOpacity})`;
      }
      if (outerCursor) {
        outerCursor.style.backgroundColor = `rgba(${cursorDefaultColor + "," + cursorLightModeOuterOpacity})`;
      }

      el.addEventListener("mouseleave", () => {
        let innerCursor = document.getElementById("inner-cursor");
        let outerCursor = document.getElementById("outer-cursor");
        if (innerCursor) {
          innerCursor.style.backgroundColor = `rgba(${cursorLightModeColor + "," + cursorLightModeInnerOpacity})`;
        }
        if (outerCursor) {
          outerCursor.style.backgroundColor = `rgba(${cursorLightModeColor + "," + cursorLightModeOuterOpacity})`;
        }
      })
    }, false)
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

  const scrollToOverview = () => {
    let el = document.getElementById("overview-area");
    if (el) {
      el.scrollIntoView({behavior: "smooth"});
    }
  }

  return (
    <div className="aprio-page">
      <AnchorLinks callerType="aprio"/>
      <img className="full-width-image margin-bottom-40px anchor-area clickable" src={AprioHeaderImage} alt=""
           id="header-image"
           onClick={() => {
             scrollToOverview()
           }}/>

      <div className="overview anchor-area margin-bottom-160px" id="overview-area">
        <h3 className="cs-title mid-align-title margin-bottom-40px" id="overview-title">Overview</h3>

        <h3 className="cs-subtitle-2 margin-bottom-12px" id="privacy-disclaimer-title">Privacy
          Disclaimer</h3>
        <p className="cs-body margin-bottom-40px"><strong className="highlight">To protect Aprio’s extremely
          classified
          information, I am not allowed to display the entirety of my work.</strong> Specific
          details and photos in this case study have been simplified, altered, or omitted entirely. The data used in the
          mockups below are meant to be placeholders and are not accurate
          to the attributes and data used in the actual product. If you would like to
          learn more in-depth about my work for Aprio, feel free to contact me directly.</p>

        <h2 className="cs-manrope margin-bottom-80px">
          I led the end-to-end design process of a client management
          portal
          for a top 50 US accounting firm.</h2>

        <h3 className="cs-subtitle-2 margin-bottom-12px" id="context-title">Problem</h3>
        <p className="cs-body margin-bottom-80px"> Aprio is an elite accounting firm with
          a massive problem. It was exponentially growing in size and revenue every quarter,
          but its employees were stuck using external software
          that was decades old. It was slow, inefficient, and heavily outdated. <strong className="highlight"> My
            objective was to
            create a client management portal that would digitize the client experience and help launch the firm
            into the future.</strong></p>

        <h3 className="cs-subtitle-2 margin-bottom-12px" id="context-title">Solution</h3>
        <p className="cs-body margin-bottom-40px"> The internal software, later named AMP (Aprio
          Management Portal),
          allowed Aprio employees to see the data collected on their clients, manage task assignments, and change client
          information. Ultimately, <strong className="highlight"> I successfully designed and shipped a centralized
            information
            hub that consolidated many complex tasks and reduced resolution times while improving existing workflows'
            efficacy.</strong></p>

        <h2 className="cs-manrope margin-bottom-80px">Once shipped, AMP would impact over
          1,000 Aprio employees and over
          10,000 Aprio clients all around the globe.</h2>

        <h3 className="cs-subtitle-2 margin-bottom-12px" id="my-contributions-title">What Did I Do?</h3>
        <p className="cs-body">This was my most challenging project to date, but it also allowed me to work on
          something
          impactful and grow tremendously as a product designer. With guidance and support from senior
          designers: </p>
        <ul className="margin-bottom-80px">
          <li className="cs-body"><strong className="highlight"> I developed a detailed design process and product
            roadmap for
            the preliminary releases of AMP. </strong></li>
          <li className="cs-body">I overhauled the company's visual identity and created a standardized design system.
          </li>
          <li className="cs-body">I advocated for and led multiple workshops with stakeholders, such as card sorting to
            narrow down the information
            architecture.
          </li>
          <li className="cs-body">I conducted numerous rounds of usability tests
            with multiple groups of end-users to validate and evaluate the solution.
          </li>
          <li className="cs-body"><strong className="highlight">I collaborated with developers
            and product managers to design, prototype, test, and launch the first MVP.</strong>
          </li>
        </ul>

        <div className="three-column-row margin-bottom-0px">
          <div className="left-column margin-bottom-0px">
            <h3 className="cs-subtitle-2 margin-bottom-16px" id="project-timeline-title">Project Timeline</h3>
            <p className="cs-body margin-bottom-0px">4 months from project start to
              development start (Q1 2022 -> Q2 2022)
            </p>
          </div>
          <div className="center-column margin-bottom-0px">
            <h3 className="cs-subtitle-2 margin-bottom-16px" id="project-type-title">Project Type</h3>
            <p className="cs-body margin-bottom-0px margin-top-0px">Sole Designer/Researcher, Work
              Project, Partial Case
              Study, Web</p>
          </div>
          <div className="right-column margin-bottom-0px">
            <h3 className="cs-subtitle-2 margin-bottom-16px" id="project-tools-title">Project Tools</h3>
            <p className="cs-body margin-bottom-0px">Figma, FigJam, Miro, Lucidspark, Jira, Confluence, Optimal
              Workshop, Maze</p>
          </div>
        </div>
      </div>

      <div className="process margin-bottom-160px anchor-area" id="process-area">
        <h2 className="cs-title mid-align-title margin-bottom-40px" id="process-title"><strong
          className="orange-text">01 </strong>-
          Process</h2>
        <img className="full-width-image" src={AprioProcess} alt=""/>
      </div>

      <div className="ideation margin-bottom-160px anchor-area" id="ideation-area">
        <h2 className="cs-title mid-align-title margin-bottom-40px" id="ideation-title"><strong
            className="orange-text">02 </strong>-
          Ideation</h2>
        <div className="row margin-bottom-80px">
          <h3 className="cs-subtitle margin-bottom-40px sub-anchor-area" id="what-are-users-experiencing-title">What Are
            Users Experiencing?</h3>
          <div className="left-column">
            <img className="emoji margin-bottom-24px" src={FemaleDev} alt=""/>
            <h3 className="cs-subtitle-2 margin-bottom-12px">Employees</h3>
            <p className="cs-body">“I always need at least 3 software programs open to do my job.”</p>
            <p className="cs-body">“I spend a lot of my day chasing people for information.”</p>
            <p className="cs-body">“Who else is my client working with?”</p>
          </div>
          <div className="right-column">
            <img className="emoji margin-bottom-24px" src={Woman} alt=""/>
            <h3 className="cs-subtitle-2 margin-bottom-12px">Clients</h3>
            <p className="cs-body">“How do I update my information?”</p>
            <p className="cs-body">“What is the status of my ongoing tasks?”</p>
            <p className="cs-body">“It takes so long to contact a real person for help.”</p>
          </div>
        </div>

        <h3 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="design-north-star-title">Design North
          Star</h3>
        <p className="cs-body margin-bottom-40px">
          After several discovery meetings and user interviews, I started ideating with these
          guiding principles in mind:
        </p>

        <div className="north-star-row margin-bottom-40px">
          <div className="spacing-div">
            <div className="left-column">
              <img src={Target} alt=""/>
              <h4 className="cs-subtitle-2">Target Audience</h4>
              <p className="cs-body">This was my first time designing for an enterprise audience, so I took the
                extra
                time to
                learn about their many personalized needs and
                preferences during the discovery stage. </p>
            </div>
            <div className="center-column">
              <img src={Easy} alt=""/>
              <h4 className="cs-subtitle-2">Simplification</h4>
              <p className="cs-body">I wanted to boil down every feature or interaction to the
                easiest
                and fastest form. AMP should save time, not waste
                it.</p>
            </div>
            <div className="right-column">
              <img src={PuzzlePiece} alt=""/>
              <h4 className="cs-subtitle-2">Utilize Familiar Patterns</h4>
              <p className="cs-body">Utilizing familiar UI/UX patterns is crucial to increasing
                the adoption rate and decreasing the time users would take to learn the software and integrate it
                into their daily workflows. </p>
            </div>
          </div>
        </div>
      </div>

      <div className="design-mockups margin-bottom-100px anchor-area" id="design-mockups-area">
        <h2 className="cs-title mid-align-title margin-bottom-40px sub-anchor-area" id="design-mockups-title"><strong
          className="orange-text">03 </strong>- Design Mockups</h2>

        <p className="cs-subtitle margin-bottom-12px sub-anchor-area" id="dashboard-title">Dashboard</p>
        <p className="cs-body margin-bottom-0px">The dashboard is a home screen where
          users can view their action items and an overview of their assigned clients
          and tasks.</p>
        <ul className="margin-bottom-40px margin-top-0px">
          <li className="cs-body"><strong className="highlight">I conducted user interviews and usability testing with
            different user groups, from
            company directors to regular employees, to determine how to design the dashboard to fit their specific
            needs. This work resulted in a personalized dashboard experience customized
            depending on the
            user’s role and job responsibilities.</strong>
          </li>
          <li className="cs-body margin-bottom-40px">Design considerations - ensuring that
            all action items can be resolved straight from the dashboard and adding simple component behaviours such as
            automatically expanding the
            first line item in a list to save time.
          </li>
        </ul>
        <img className="full-width-image margin-bottom-80px" src={Dashboard} alt=""/>

        <p className="cs-subtitle margin-bottom-12px sub-anchor-area" id="client-profiles-title">Client Profiles</p>
        <p className="cs-body margin-bottom-0px">
          The client profile is a page sorted into tabs with all the information collected
          about a specific client.
        </p>
        <ul className="margin-bottom-40px margin-top-0px">
          <li className="cs-body"><strong className="highlight">I organized company-wide card sorting to determine the
            most intuitive way to group sensitive information.</strong></li>
          <li className="cs-body">I consolidated and integrated multiple entity-relationship diagrams to determine what
            information was essential to display.
          </li>
        </ul>
        <img src={ClientProfiles} alt="" className="full-width-image margin-bottom-80px"/>

        <p className="cs-subtitle margin-bottom-12px sub-anchor-area" id="list-of-users-title">List of Users</p>
        <p className="cs-body margin-bottom-0px">
          The list of users gives a view of all the company employees and their critical
          information.
        </p>
        <ul className="margin-bottom-40px margin-top-0px">
          <li className="cs-body"><strong className="highlight">I orchestrated tree sorting workshops to determine
            line items and order of importance for an intuitive information architecture.</strong></li>
          <li className="cs-body">After user testing, I added small quality of life changes such as local time zone for
            each user.
          </li>
          <li className="cs-body">Design consideration - adding search and filter functionality to speed up finding a
            specific user.
          </li>
        </ul>
        <img src={ListOfUsers} alt="" className="full-width-image margin-bottom-80px"/>

        <p className="cs-subtitle margin-bottom-12px sub-anchor-area" id="task-page-title">Task Page</p>
        <p className="cs-body margin-bottom-0px">
          The task page is a detailed view of a specific task and all related data, such as
          assignments and associated tasks.
        </p>
        <ul className="margin-bottom-40px margin-top-0px">
          <li className="cs-body"><strong className="highlight">I organized workshops and meetings to discuss the
            nomenclature and how to keep naming conventions consistent.</strong></li>
          <li className="cs-body">Design consideration - split-screen view allows users to reference and retain the most
            crucial information on the screen.
          </li>
        </ul>
        <img src={TaskPage} alt="" className="full-width-image margin-bottom-80px"/>

        <p className="cs-subtitle margin-bottom-12px sub-anchor-area" id="user-flow-task-assignment-title">User Flow:
          Task Assignment</p>
        <p className="cs-body margin-bottom-0px">
          The following is an example user flow of the feature to allow managers to assign
          tasks to their team members.
        </p>
        <ul className="margin-bottom-40px margin-top-0px">
          <li className="cs-body"><strong className="highlight">Design consideration - referencing existing task
            assignment UX patterns used
            in popular tools such as
            Jira and testing to make sure it was a pattern the users are familiar with.</strong>
          </li>
        </ul>
        <video autoPlay muted loop={true} src={Video1} className="full-width-image margin-bottom-80px"/>

        <p className="cs-subtitle margin-bottom-12px sub-anchor-area" id="user-flow-global-search-title">User Flow:
          Global Search</p>
        <p className="cs-body margin-bottom-0px">
          The following is an example user flow of the global search functionality
          featured in the top navigation bar.
        </p>
        <ul className="margin-bottom-40px margin-top-0px">
          <li className="cs-body"><strong className="highlight">I conducted user research to determine the most common
            items searched and how to best group search results.</strong></li>
          <li className="cs-body">Design consideration - splitting search results into groups through tabs to speed up
            lookup time.
          </li>
        </ul>
        <video autoPlay muted loop={true} src={Video2} className="full-width-image"/>
      </div>

      <div className="impact margin-bottom-80px anchor-area" id="impact-area">
        <div className="impact-inner">
          <p className="cs-title mid-align-title margin-bottom-40px sub-anchor-area" id="impact-title"><strong
            className="orange-text">04</strong> - Impact</p>
          <div className="margin-bottom-12px">
            <div className="impact-left">
              <p className="cs-title margin-bottom-40px">Before AMP</p>
              <ul>
                <li className="cs-body margin-bottom-24px"><p className="impact-number">8</p> different software needed
                  to accomplish tasks
                </li>
                <li className="cs-body margin-bottom-24px"><p className="impact-number">6</p> different sources of
                  client information
                </li>
                <li className="cs-body margin-bottom-40px"><p className="impact-number split">28 minutes</p> average
                  time to resolve a client support ticket
                </li>
              </ul>

            </div>
            <div className="impact-right">
              <p className="cs-title margin-bottom-40px">After AMP</p>
              <ul>
                <li className="cs-body margin-bottom-24px"><p className="impact-number">1</p> unified Aprio portal</li>
                <li className="cs-body margin-bottom-24px"><p className="impact-number">1</p> single source of truth for
                  client information
                </li>
                <li className="cs-body margin-bottom-40px"><p className="impact-number split">11 minutes</p> average
                  time to resolve a client support ticket
                </li>
              </ul>
            </div>
          </div>

          <p className="cs-body margin-bottom-40px">Although AMP still had not been fully released when I wrote this
            case study, I was able to see the MVP perform
            in a small-scale implementation across many departments. The feedback from the Aprio team was
            extremely positive.
          </p>
          <h2 className="cs-manrope margin-bottom-0px off-white-text">
            AMP successfully reduced average support ticket resolution times by 61% in
            the
            small-scale implementation.</h2>
        </div>
      </div>

      <div className="reflection margin-bottom-80px anchor-area" id="reflection-area">
        <h2 className="cs-title mid-align-title margin-bottom-40px sub-anchor-area" id="reflection-title"><strong
          className="orange-text">05 </strong>- Reflection</h2>
        <p className="cs-subtitle margin-bottom-40px sub-anchor-area" id="what-did-i-learn-title">What Did I Learn?</p>
        <p className="cs-subtitle-2 margin-bottom-12px" id="always-validate-user-assumptions-title">Always
          Validate User Assumptions</p>
        <p className="cs-body margin-bottom-40px">Throughout this project, I had the pleasure to talk to employees at
          all different
          levels within Aprio. <strong className="highlight">This opportunity helped me confirm the importance of
            validating user
            assumptions, even when the users are from the same company or demographic.</strong> Through the
          conversations, I
          realized that higher-level employees such as directors or managers often miss the mark or are entirely
          incorrect in identifying the struggles of lower-level
          employees such as associates.</p>
        <p className="cs-subtitle-2 margin-bottom-12px" id="advocate-for-ux-title">Advocate for UX</p>
        <p className="cs-body margin-bottom-80px">During this project, I often found myself in a
          room with
          people very used to thinking about
          problems from a business perspective. In those situations, educating and defending the rationale behind your
          design decisions with facts and data is crucial to the project's success. <strong
              className="highlight"> I learned a lot about how to advocate
            for a proper design process and how to articulately present to
            stakeholders.</strong></p>
        <p className="cs-subtitle margin-bottom-0px sub-anchor-area" id="next-steps-title">Next Steps</p>
        <p className="cs-body margin-bottom-80px">I will continue testing and discovering bugs in the QA process and
          collaborate closely with the development
          team on the massive task of connecting to the internal database. Additionally, I will start planning the
          future
          roadmap releases of AMP by reprioritizing the features we had to cut from the MVP due to resource/time
          constraints.</p>
      </div>

      <img className="margin-bottom-160px full-width-image anchor-area" id="final-image" src={AprioFinalImage}
           alt=""/>

      <RedirectLinks currentPage="aprio" prevCaseStudy="finwell" prevCaseStudyText="FinWell" nextCaseStudy="access"
                     nextCaseStudyText="Access"/>
    </div>
  )
}
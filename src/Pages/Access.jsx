import React, {useEffect} from 'react';
import AccessHeader from '../Assets/AccessPageImages/AccessHeader.svg';
import '../Stylesheets/Access.scss';
import FemaleArtist from '../Assets/FemaleArtist.svg';
import MaleArtist from '../Assets/MaleArtist.svg';
import Developer from '../Assets/Developer.svg';
import EndUser from '../Assets/EndUser.svg';
import Documentation from '../Assets/Documentation.svg';
import Eyes from '../Assets/Eyes.svg';
import Cog from '../Assets/Cog.svg';
import DesignSystem from '../Assets/AccessPageImages/DesignSystem.svg';
import Iconography from '../Assets/AccessPageImages/Iconography.svg';
import Icons from '../Assets/AccessPageImages/Icons.svg';
import TextFields from '../Assets/AccessPageImages/TextFields.png';
import ComponentCategorization from '../Assets/AccessPageImages/ComponentCategorization.svg';
import Patterns from '../Assets/AccessPageImages/Patterns.svg';
import FlowChart from '../Assets/AccessPageImages/FlowChart.svg';
import FileOrganization1 from '../Assets/AccessPageImages/FileOrganization1.svg';
import FileOrganization2 from '../Assets/AccessPageImages/FileOrganization2.svg';
import Onboarding from '../Assets/AccessPageImages/Onboarding.svg';
import AccessFinalImage from '../Assets/AccessPageImages/AccessIcons.png';
import OldDesignSpecs from '../Assets/AccessPageImages/OldDesignSpecs.png';
import NewDesignSpec1 from '../Assets/AccessPageImages/NewDesignSpec1.png';
import NewDesignSpec2 from '../Assets/AccessPageImages/NewDesignSpec2.svg';
import {setPageToLightMode, setupScrollBar, turnAllMenuStatesOff} from "../App";
import AnchorLinks from "../Components/AnchorLinks";
import {
  cursorDefaultColor,
  cursorLightModeColor,
  cursorLightModeInnerOpacity,
  cursorLightModeOuterOpacity
} from "../Components/AnimatedCursor";
import {RedirectLinks} from "../Components/RedirectLinks";

export const Access = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    setPageToLightMode();
    document.title = "Emma Li | Access";
    setupScrollBar("#1E48CE");

    // Highlights
    highlight();

    turnAllMenuStatesOff();
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

  return (
    <div className="access-page">
      <div className="access-header-wrapper margin-bottom-80px anchor-area">
        <img className="access-header" src={AccessHeader} alt="" id="header-image"/>
      </div>

      <AnchorLinks callerType="access"/>
      <div className="overview anchor-area" id="overview-area" key="overview-group">
        <h3 className="cs-title margin-bottom-80px" id="overview-title">Overview</h3>
        <h2 className="cs-manrope margin-bottom-80px">I led a team to build and maintain a design system for an entire
          ecosystem
          of software products.</h2>

        <h3 className="cs-subtitle-2 margin-bottom-16px" id="context-title">Context</h3>
        <p className="cs-body margin-bottom-80px"><strong className="highlight">The design team at Moken Agency was
          designing
          and launching a suite of tools designed to digitize the agency experience and help various user groups in
          the
          startup
          ecosystem.</strong> The business roadmap had a planned two digital products launching in 2021 and six more
          in
          the backlog.
          With the sheer number of designs we were creating every day, the inconsistencies between design components
          became more
          and more apparent. <strong className="highlight">We decided we needed to develop a company-wide design
            system
            to
            support the scalability and consistency of our designs.</strong></p>

        <h3 className="cs-subtitle-2 margin-bottom-16px" id="my-contributions-title">My Contributions</h3>
        <ul className="margin-bottom-80px">
          <li className="cs-body"><strong className="highlight">I led the entire design system project as a product
            designer.</strong></li>
          <li className="cs-body"><strong className="highlight">I defined our design system's preliminary structure,
            language, and process.</strong></li>
          <li className="cs-body"><strong className="highlight">I designed and launched the first published version of
            the design system,</strong> which is the bedrock of the design system still being used today company-wide
            at
            Moken Agency.
          </li>
          <li className="cs-body">I tested with several different end-user groups to make sure <strong
            className="highlight">the design system benefits not only the design team but also anyone else who would
            be
            using it.</strong></li>
        </ul>

        <h3 className="cs-subtitle-2 margin-bottom-16px" id="project-timeline-title">Project Timeline</h3>
        <p className="cs-body margin-bottom-80px"><strong className="highlight">6 months (Q2 2021 -> Q4 2021)</strong>
        </p>

        <h3 className="cs-subtitle-2 margin-bottom-16px" id="project-type-title">Project Type</h3>
        <p className="cs-body">Collaborative (sub-team of 6), Work Project, Full Case Study, Web</p>
        <p className="cs-body margin-bottom-80px">User Research, Usability Testing, Prototyping, Design System</p>

        <h3 className="cs-subtitle-2 margin-bottom-16px" id="project-tools-title">Project Tools</h3>
        <p className="cs-body margin-bottom-80px"><strong className="highlight">Figma, Jira, Confluence,
          Slack</strong></p>
      </div>

      <div className="ideation margin-bottom-80px anchor-area" id="ideation-area" key="ideation-group">
        <h2 className="cs-title margin-bottom-80px" id="ideation-title"><strong className="blue-text">01 </strong>-
          Ideation</h2>
        <h3 className="cs-subtitle margin-bottom-40px sub-anchor-area" id="what-are-users-experiencing-title">What Are
          Users
          Experiencing?</h3>

        <div className="row">
          <div className="left-column">
            <img className="emoji margin-bottom-24px" src={FemaleArtist} alt=""/>
            <h3 className="cs-subtitle-2 margin-bottom-12px">Designers</h3>
            <p className="cs-body">“This component needs to be tweaked slightly.”</p>
            <p className="cs-body">“Where do I document this new component I just made?”</p>
            <p className="cs-body">“Is there already an icon that exists for this?”</p>
          </div>
          <div className="right-column">
            <img className="emoji margin-bottom-24px" src={MaleArtist} alt=""/>
            <h3 className="cs-subtitle-2 margin-bottom-12px">New Designers</h3>
            <p className="cs-body">“How do I find what I am looking for?”</p>
            <p className="cs-body">“Does this component already exist?”</p>
            <p className="cs-body">“How do I add a new component?”</p>
          </div>
        </div>

        <div className="row margin-bottom-80px">
          <div className="left-column">
            <img className="emoji margin-bottom-24px" src={Developer} alt=""/>
            <h3 className="cs-subtitle-2 margin-bottom-12px">Developers</h3>
            <p className="cs-body">“I feel like I’ve developed the same component 3 times.”</p>
            <p className="cs-body">“What has changed in this design?”</p>
            <p className="cs-body">“What does interacting with this component look like?”</p>
          </div>
          <div className="right-column">
            <img className="emoji margin-bottom-24px" src={EndUser} alt=""/>
            <h3 className="cs-subtitle-2 margin-bottom-12px">End Users</h3>
            <p className="cs-body">“The product should have a consistent look and feel.”</p>
            <p className="cs-body">“I want to stick to certain colours and font.”</p>
            <p className="cs-body">“The designs need to be scalable for the future.”</p>
          </div>
        </div>

        <h3 className="cs-manrope margin-bottom-80px">We needed to create a design system that would bring structure
          and organization to the entire design process.</h3>
        <h3 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="stakeholder-buy-in-title">Stakeholder Buy
          In</h3>

        <p className="cs-body">
          To ensure the success of this project, <strong className="highlight">it was crucial to get stakeholders
          fully on board before we started.</strong> We did this by:
        </p>

        <ul className="margin-bottom-80px">
          <li className="cs-body">
            <strong className="highlight">Organizing a company-wide meeting with all stakeholders</strong> present
            where we presented the long-term benefits of adopting
            a design system and how it would address all of their pain points individually.
          </li>
          <li className="cs-body">
            <strong className="highlight">Involving other teams early on in monthly meetings</strong> to get their
            input and make sure they feel included and understood.
          </li>
        </ul>

        <h3 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="our-north-star-title">Our North Star</h3>
        <p className="cs-body margin-bottom-36px"><strong className="highlight">The following are the guiding
          philosophies we kept in mind throughout the process:</strong></p>

        <div className="north-star-row margin-bottom-80px">
          <div className="spacing-div margin-bottom-80px">
            <div className="left-column">
              <img src={Documentation} alt=""/>
              <h4 className="cs-subtitle-2">Documentation</h4>
              <p className="cs-body">We should create as much documentation as possible so that other users
                like <strong className="highlight">developers and new team members can quickly get on the same
                  page.</strong></p>
            </div>
            <div className="center-column">
              <img src={Eyes} alt=""/>
              <h4 className="cs-subtitle-2">Consistency</h4>
              <p className="cs-body">The new design system should be <strong className="highlight">the single source
                of truth</strong> for all components and design elements.</p>
            </div>
            <div className="right-column">
              <img src={Cog} alt=""/>
              <h4 className="cs-subtitle-2">Process</h4>
              <p className="cs-body">We should take the time to create a workflow and process so that <strong
                className="highlight">the design system is scalable into the future regardless of project or team
                size.</strong></p>
            </div>
          </div>

          <h3 className="cs-subtitle-2 margin-bottom-12px">Preliminary Research</h3>
          <p className="cs-body">This was the first design system any of us had ever built, so we relied on research
            and followed the
            examples of some of the most recognized design systems such as Shopify’s <a className="cs-body"
                                                                                        href="https://polaris.shopify.com/">Polaris</a>,
            IBM’s <a className="cs-body" href="https://carbondesignsystem.com/">Carbon</a>, or Saleforce’s <a
              className="cs-body" href="https://www.salesforce.com/ca/campaign/lightning/">Lightning</a>. <strong
              className="highlight">We
              noted all the standard practices and methods for how the systems were organized and brainstormed on how
              those examples could best serve our purposes.</strong></p>
        </div>
      </div>

      <div className="creation margin-bottom-80px anchor-area" id="creation-area" key="creation-group">
        <h2 className="cs-title margin-bottom-80px" id="creation-title"><strong className="blue-text">02 </strong>-
          Creation</h2>
        <h3 className="cs-manrope margin-bottom-80px">We started by breaking down the existing design elements into
          three categories.</h3>
        <div className="row-42-58">
          <div className="left-column-42 right-padding-28px">
            <p className="cs-subtitle margin-bottom-12px sub-anchor-area" id="foundation-title">Foundation</p>
            <p className="cs-body">
              These are the <strong className="highlight">fundamental visual elements that can't be broken down into
              smaller elements</strong> and
              serve as the foundation for the existance of all other components.
            </p>
          </div>
          <div className="right-column-58">
            <img src={DesignSystem} alt=""/>
          </div>
        </div>

        <div className="row-42-58 margin-bottom-80px">
          <div className="left-column-42 right-padding-28px">
            <p className="cs-body">
              <strong className="highlight">We unified how our icons look by ensuring they all take up the same space
                in a grid and have the same weight.</strong> We
              also determined a new icon naming convention to make it easier to find the icon you are looking for in a
              simple Figma search.
            </p>
          </div>
          <div className="right-column-58">
            <img src={Iconography} alt=""/>
            <img src={Icons} alt=""/>
          </div>
        </div>

        <div className="row-42-58 margin-bottom-80px">
          <div className="left-column-42 right-padding-28px">
            <p className="cs-subtitle margin-bottom-12px sub-anchor-area" id="components-title">Components</p>
            <p className="cs-body">
              <strong className="highlight">These are the relatively simple UI elements reused from design to
                design.</strong> We placed these on individual artboards and made sure that each component is:
            </p>

            <ul>
              <li className="cs-body">Made up of elements from the foundation</li>
              <li className="cs-body">Following the 4px rule</li>
              <li className="cs-body">Grouped with other similar components</li>
              <li className="cs-body">Linked to accompanying documentation</li>
            </ul>
          </div>
          <div className="right-column-58">
            <img src={TextFields} alt=""/>
          </div>
        </div>

        <div className="row-42-58 margin-bottom-80px">
          <div className="left-column-42 right-padding-28px">
            <p className="cs-body">
              <strong className="highlight">I unified the way components are categorized and named so that anyone can
                easily find the component and variant they are looking for from the assets panel.</strong>
            </p>
          </div>
          <div className="right-column-58">
            <img id="component-categorization" src={ComponentCategorization} alt=""/>
          </div>
        </div>

        <div className="row-42-58 margin-bottom-80px">
          <div className="left-column-42 right-padding-28px">
            <h3 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="patterns-title">Patterns</h3>
            <p className="cs-body"><strong className="highlight">These are standard layouts that get reused in many
              different designs
              with slight variations to individual components.</strong> For each pattern, we made sure that it is:</p>
            <ul>
              <li className="cs-body">Made up of components already in the design system</li>
              <li className="cs-body">Optimized for reusability</li>
              <li className="cs-body">Following the margin and spacing rules laid out in the design system</li>
            </ul>
          </div>
          <div className="right-column-58">
            <img src={Patterns} alt=""/>
          </div>
        </div>

        <h2 className="cs-manrope margin-bottom-80px">
          Once we had organized the existing chaos, we knew we needed to document a standard process for adding to and
          maintaining the design system in the future.
        </h2>
        <img className="margin-bottom-80px" id="creation-flowchart" src={FlowChart} alt=""/>

        <p className="cs-body">
          With the new process in place, <strong className="highlight"> everyone on the team was on the same page and
          new team members joining the team noted how much less daunting the giant design system was.</strong>
        </p>
      </div>

      <div className="iteration margin-bottom-80px anchor-area" id="iteration-area" key="iteration-group">
        <h2 className="cs-title margin-bottom-80px" id="iteration-title"><strong className="blue-text">03 </strong>-
          Iteration</h2>
        <p className="cs-body margin-bottom-40px">
          From the beginning, <strong className="highlight"> we wanted to involve other parallel teams as early on as
          possible</strong> since
          the design system had to be optimized for everyone to be considered a success. To achieve this, <strong
          className="highlight">I
          conducted team and individual interviews with the development, product, and marketing teams</strong> to see
          how we can improve
          our current design handoffs and what they thought about our current design system process.
        </p>
        <p className="cs-subtitle margin-bottom-12px sub-anchor-area" id="what-i-learned-title">What I Learned</p>
        <ul className="margin-bottom-24px">
          <li className="cs-body"><strong className="highlight">The greatest pain point for the development team was
            figuring out how the screens were connected and the behaviour of the different components used in each
            design.</strong></li>
          <li className="cs-body"><strong className="highlight">The greatest pain point for the marketing team was
            figuring out which assets in the design system were meant for them and how to make edits to the components
            to use them for marketing purposes.</strong></li>
          <li className="cs-body"><strong className="highlight">The greatest pain point for the product team was
            finding
            what they were looking for in a fast and efficient manner, especially when checking in on progress on
            specific tasks or designs.</strong></li>
          <li className="cs-body">All the teams enjoyed the constant updates in the #designsystem slack channel, which
            made them feel included.
          </li>
        </ul>

        <p className="cs-subtitle margin-bottom-12px sub-anchor-area" id="iterations-title">Iterations</p>
        <p className="cs-body margin-bottom-40px">Starting with the design specs, <strong className="highlight">we
          wanted to redesign the designer -> developer handoff experience
          by addressing the specific pain points of the development team.</strong> We spent some time iterating and
          testing through multiple versions of the design specs before
          arriving at the final version, which got very positive reviews from the developers.
        </p>

        <p className="cs-subtitle margin-bottom-40px no-bold">Old Design Specs</p>
        <img className="margin-bottom-40px" id="old-design-specs" src={OldDesignSpecs} alt=""/>

        <p className="cs-subtitle margin-bottom-40px no-bold">New Design Specs</p>
        <img className="margin-bottom-40px" id="new-design-specs" src={NewDesignSpec1} alt=""/>

        <p className="cs-body margin-bottom-40px">In one iteration of the design specs, we included redlines to
          indicate
          the spacing of and in between components;
          however, after several rounds of testing, we learned that all of them were very familiar with Figma and
          could find the distances themselves with the inspecting
          feature. Instead, they stated that they would prefer to be able to see a visual representation of the
          behaviour of some of the more complicated components like
          text fields. <strong className="highlight">Therefore, we scrapped the redlines idea and instead redirected
            that time to creating clickable mini prototypes of
            component behaviours and linking those to our design specs.</strong></p>

        <p className="cs-subtitle margin-bottom-40px no-bold">Iteration With Redlines</p>
        <img className="margin-bottom-40px" id="new-design-specs" src={NewDesignSpec2} alt=""/>

        <p className="cs-subtitle margin-bottom-40px no-bold">Mini Prototypes of Component Behaviour</p>
        <div className="figma-embed-wrapper">
          <iframe width="100%" height="100%"
                  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FnJaUw4Tyxn7GOpUglOlAmQ%2FField-Behaviour-Mini-Prototype%3Fpage-id%3D0%253A1%26node-id%3D4%253A6186%26viewport%3D-975%252C-27%252C1%26scaling%3Dcontain%26starting-point-node-id%3D4%253A6186%26hotspot-hints%3D0"
                  allowFullScreen></iframe>
        </div>
      </div>

      <div className="organization margin-bottom-80px anchor-area" id="organization-area" key="organization-group">
        <h2 className="cs-title margin-bottom-80px" id="organization-title"><strong className="blue-text">04 </strong>-
          Organization</h2>

        <div className="row-42-58 margin-bottom-60px">
          <div className="left-column-42 right-padding-28px">
            <h3 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="file-organization-title">File
              Organization</h3>
            <p className="cs-body">
              <strong className="highlight">To improve lookup for product owners and managers, I came up with a new
                system
                to use covers to organize Figma files</strong> so it was easy to tell what the file was about and the
              status from a glance.
            </p>
          </div>
          <div className="right-column-58">
            <img src={FileOrganization1} alt=""/>
          </div>
        </div>

        <div className="row-42-58 margin-bottom-80px">
          <div className="left-column-42 right-padding-28px">
            <p className="cs-body">
              To further organize our design system's enormous file, <strong className="highlight">I separated the
              three categories identified
              above into pages</strong> and added additional pages for workspaces or other visual elements such as
              illustrations—<strong className="highlight">this way, other teams like marketing can easily find the
              assets they need.</strong>
            </p>
          </div>
          <div className="right-column-58">
            <img id="file-organization-2" src={FileOrganization2} alt=""/>
          </div>
        </div>

        <h3 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="onboarding-title">Onboarding</h3>
        <p className="cs-body margin-bottom-40px">
          <strong className="highlight">I came up with a way to onboard new team members by creating a guide in
            Confluence introducing the
            design system and the established process.</strong> I also included a welcome page in the design system
          Figma file to introduce
          new users to the system and <strong className="highlight">highlighted answers to common questions so anyone
          could pick up using
          the design system quickly!</strong>
        </p>
        <img className="margin-bottom-40px" id="onboarding" src={Onboarding} alt=""/>
      </div>

      <div className="impact margin-bottom-80px anchor-area" id="impact-area" key="impact-group">
        <div className="impact-inner">
          <p className="cs-title margin-bottom-80px" id="impact-title"><strong className="blue-text">05</strong> -
            Impact</p>
          <div className="margin-bottom-40px">
            <div className="impact-left">
              <p className="cs-title margin-bottom-32px">Before</p>
              <ul>
                <li className="cs-body margin-bottom-24px"><p className="impact-number">0</p> published
                  components
                </li>
                <li className="cs-body margin-bottom-24px"><p className="impact-number">0</p> published
                  styles
                </li>
                <li className="cs-body margin-bottom-24px"><p className="impact-number">0</p> pages of
                  component
                  documentation
                </li>
              </ul>

            </div>
            <div className="impact-right">
              <p className="cs-title margin-bottom-32px">After</p>
              <ul>
                <li className="cs-body margin-bottom-24px"><p className="impact-number">620</p> published components
                </li>
                <li className="cs-body margin-bottom-24px"><p className="impact-number">86</p> published styles</li>
                <li className="cs-body margin-bottom-24px"><p className="impact-number">124</p> pages of component
                  documentation
                </li>
              </ul>
            </div>
          </div>

          <p className="cs-body margin-bottom-40px">After we published the first version of the system and process, we
            conducted a
            company-wide review meeting; the response was astoundingly positive to all of our work and results. The
            work we started
            will continue to serve as the foundation for the future versions of the Moken Agency design system.</p>
          <p className="cs-subtitle margin-bottom-12px sub-anchor-area" id="next-steps-title">Next Steps</p>
          <p className="cs-body margin-bottom-80px">We’re planning to continue conducting monthly design system
            meetings with all the
            stakeholders to ensure the system is evolving at the same rate we are and so we can continue to find room
            for improvement.</p>
        </div>
      </div>

      <div className="reflection margin-bottom-160px anchor-area" id="reflection-area" key="reflection-group">
        <h2 className="cs-title margin-bottom-80px" id="reflection-title"><strong className="blue-text">06 </strong>-
          Reflection</h2>
        <p className="cs-subtitle margin-bottom-12px sub-anchor-area" id="it-takes-two-to-tango-title">It Takes Two (And
          A Lot More) To
          Tango</p>
        <p className="cs-body margin-bottom-40px"><strong className="highlight">Creating and maintaining a design
          system is a constant back
          and forth conversation between all the users involved.</strong> Open communication and feedback should
          involve the input of everyone
          to ensure that it is serving its overall purpose. </p>
        <p className="cs-subtitle margin-bottom-12px sub-anchor-area" id="rome-wasn't-built-in-one-day-title">Rome
          Wasn't Built In One
          Day</p>
        <p className="cs-body"><strong className="highlight">Design systems are constantly evolving and changing with
          every new design and idea.</strong> We’re
          proud of creating the system’s foundation, and the long process helped me realize what a constant work in
          progress a design system is and should be.</p>
      </div>

      <img className="anchor-area" id="final-image" src={AccessFinalImage} alt=""/>

      <RedirectLinks currentPage="access" prevCaseStudy="aprio" prevCaseStudyText="Aprio" nextCaseStudy="finwell"
                     nextCaseStudyText="FinWell"/>
    </div>
  )
}
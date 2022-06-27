import React, {useEffect} from 'react';
import AccessHeader from '../Assets/AccessPageImages/AccessHeader.png';
import '../Stylesheets/Access.scss';
import FemaleArtist from '../Assets/FemaleArtist.svg';
import MaleArtist from '../Assets/MaleArtist.svg';
import Developer from '../Assets/Developer.svg';
import EndUser from '../Assets/EndUser.svg';
import Documentation from '../Assets/Documentation.svg';
import Eyes from '../Assets/Eyes.svg';
import Cog from '../Assets/Cog.svg';
import DesignSystem from '../Assets/AccessPageImages/DesignSystem.png';
import Iconography from '../Assets/AccessPageImages/Iconography.png';
import TextFields from '../Assets/AccessPageImages/TextFields.png';
import ComponentCategorization from '../Assets/AccessPageImages/ComponentCategorization.png';
import Patterns from '../Assets/AccessPageImages/Patterns.png';
import FlowChart from '../Assets/AccessPageImages/FlowChart.png';
import FileOrganization1 from '../Assets/AccessPageImages/FileOrganization1.png';
import FileOrganization2 from '../Assets/AccessPageImages/FileOrganization2.png';
import Onboarding from '../Assets/AccessPageImages/Onboarding.png';
import AccessFinalImage from '../Assets/AccessPageImages/AccessFinalImage.png';
import OldDesignSpecs from '../Assets/AccessPageImages/OldDesignSpecs.png';
import NewDesignSpec1 from '../Assets/AccessPageImages/NewDesignSpecs.png';
import NewDesignSpec2 from '../Assets/AccessPageImages/NewDesignSpecs2.png';
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

  const scrollToOverview = () => {
    let el = document.getElementById("overview-area");
    if (el) {
      el.scrollIntoView({behavior: "smooth"});
    }
  }

  return (
      <div className="access-page">
        <div className="access-header-wrapper margin-bottom-80px anchor-area">
          <img className="access-header clickable" src={AccessHeader} alt="" id="header-image" onClick={() => {
            scrollToOverview()
          }}/>
        </div>

        <AnchorLinks callerType="access"/>
      <div className="overview anchor-area margin-bottom-160px" id="overview-area" key="overview-group">
        <h3 className="cs-title mid-align-title margin-bottom-80px" id="overview-title">Overview</h3>
        <h2 className="cs-manrope-150-line-height margin-bottom-80px">I led a small team to build and
          maintain an agency-wide design system for an entire
          ecosystem
          of software products.</h2>

        <h3 className="cs-subtitle-2 margin-bottom-12px" id="context-title">Context</h3>
        <p className="cs-body margin-bottom-80px">Our design team was
          designing
          and launching a suite of tools designed to digitize the agency experience and help various user groups in
          the
          startup
          ecosystem.
          With the sheer number of designs we were creating every day, the inconsistencies between design components
          became increasingly apparent.</p>

        <h2 className="cs-manrope-150-line-height margin-bottom-80px">As a team, we decided we needed to develop a
          robust design system to support our designs' long-term scalability and consistency.
        </h2>

        <h3 className="cs-subtitle-2 margin-bottom-12px" id="my-contributions-title">My Contributions</h3>
        <ul className="margin-bottom-40px">
          <li className="cs-body"><strong className="highlight">I spearheaded the entire design system project as the
            lead product
            designer.</strong></li>
          <li className="cs-body">I defined our design system's preliminary structure,
            language, and process.
          </li>
          <li className="cs-body">I organized and launched the first published version of
            the design system
          </li>
          <li className="cs-body">I tested with several other parallel teams to make sure the system would
            also benefit others members using it.
          </li>
        </ul>

        <div className="three-column-row margin-bottom-0px">
          <div className="left-column margin-bottom-0px">
            <h3 className="cs-subtitle-2 margin-bottom-12px" id="project-timeline-title">Project Timeline</h3>
            <p className="cs-body margin-bottom-0px">3 months (Q2 2021 -> Q3 2021)
            </p>
          </div>
          <div className="center-column margin-bottom-0px">
            <h3 className="cs-subtitle-2 margin-bottom-12px" id="project-type-title">Project Type</h3>
            <p className="cs-body margin-bottom-0px">Collaborative (sub-team of 3), Work Project, Full Case
              Study, Web</p>
          </div>
          <div className="right-column margin-bottom-0px">
            <h3 className="cs-subtitle-2 margin-bottom-12px" id="project-tools-title">Project Tools</h3>
            <p className="cs-body margin-bottom-0px">Figma, Jira, Confluence,
              Slack</p>
          </div>
        </div>
      </div>

        <div className="ideation margin-bottom-160px anchor-area" id="ideation-area" key="ideation-group">
          <h2 className="cs-title mid-align-title margin-bottom-40px" id="ideation-title"><strong
            className="blue-text">01 </strong>-
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
              <h3 className="cs-subtitle-2 margin-bottom-12px">Users</h3>
              <p className="cs-body">“The product should have a consistent look and feel.”</p>
              <p className="cs-body">“I want to stick to certain colours and font.”</p>
              <p className="cs-body">“The designs need to be scalable for the future.”</p>
            </div>
          </div>

          <h3 className="cs-manrope-150-line-height margin-bottom-80px">We needed to
            bring structure and organization to the entire design process.</h3>
          <h3 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="stakeholder-buy-in-title">Stakeholder
            Buy-In</h3>

          <p className="cs-body">
            <strong className="highlight"> To ensure the success of this project, it was crucial to get stakeholders
              fully on board before we started.</strong> We did this by:
          </p>

          <ul className="margin-bottom-40px">
            <li className="cs-body">
              Organizing a company-wide meeting with all stakeholders present
              where we presented the long-term benefits of adopting
              a design system and how it would address all of their pain points individually.
            </li>
            <li className="cs-body">
              Involving other teams early in monthly meetings to get their input and ensure they feel included in the
              process.
            </li>
          </ul>

          <h3 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="our-north-star-title">Our North Star</h3>
          <p className="cs-body margin-bottom-36px">The following are the guiding
            philosophies we defined and outlined to keep in mind throughout the process:</p>

          <div className="north-star-row margin-bottom-40px">
            <div className="spacing-div margin-bottom-40px">
              <div className="left-column">
                <img className="margin-bottom-24px" src={Documentation} alt=""/>
                <h4 className="cs-subtitle-2 margin-bottom-24px">Documentation</h4>
                <p className="cs-body">Prioritize necessary documentation so that other users
                  like developers and new team members can quickly get on the same
                  page.</p>
              </div>
              <div className="center-column">
                <img className="margin-bottom-24px" src={Eyes} alt=""/>
                <h4 className="cs-subtitle-2 margin-bottom-24px">Consistency</h4>
                <p className="cs-body">The new design system should be the single source
                  of truth for all components and design elements.</p>
              </div>
              <div className="right-column">
                <img className="margin-bottom-24px" src={Cog} alt=""/>
                <h4 className="cs-subtitle-2 margin-bottom-24px">Process</h4>
                <p className="cs-body">We should take the time to create a workflow and process so that the design
                  system
                  is scalable into the future regardless of project or team
                  size.</p>
              </div>
            </div>

            <h3 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="preliminary-research-title">Preliminary
              Research</h3>
            <p className="cs-body">This was the first design system we had ever built from scratch, so we relied on
              research
              and followed the
              examples of some of the most recognized design systems such as Shopify’s <a className="cs-body"
                                                                                          href="https://polaris.shopify.com/">Polaris</a>,
              IBM’s <a className="cs-body" href="https://carbondesignsystem.com/">Carbon</a>, or Saleforce’s <a
                className="cs-body" href="https://www.salesforce.com/ca/campaign/lightning/">Lightning</a>. <strong
                className="highlight">We took notes of all the standard practices and methods for
                classification/presentation
                and brainstormed how those examples could best serve our purposes.</strong></p>
          </div>
      </div>

      <div className="creation margin-bottom-160px anchor-area" id="creation-area" key="creation-group">
        <h2 className="cs-title mid-align-title margin-bottom-80px" id="creation-title"><strong
            className="blue-text">02 </strong>-
          Creation</h2>
        <h3 className="cs-manrope-150-line-height margin-bottom-80px">We started by breaking down the existing design
          elements into
          3 main categories.</h3>
        <div className="row-42-58">
          <div className="left-column-42 right-padding-28px">
            <p className="cs-subtitle margin-bottom-12px sub-anchor-area" id="foundation-title">Foundation</p>
            <p className="cs-body">
              These fundamental visual elements can't be broken down into smaller elements and serve as the foundation
              for the existence of all other components.
            </p>
          </div>
          <div className="right-column-58">
            <img src={DesignSystem} alt=""/>
          </div>
        </div>

        <div className="row-42-58 margin-bottom-80px">
          <div className="left-column-42 right-padding-28px">
            <p className="cs-body">
              <strong className="highlight">I unified how our icons look by ensuring they all take up the same space
                in a grid and have the same weight.</strong> I
              also implemented a new icon naming convention to make it easier to find the icon you are looking for in
              the asset panel.
            </p>
          </div>
          <div className="right-column-58">
            <img src={Iconography} alt=""/>
          </div>
        </div>

        <div className="row-42-58 margin-bottom-80px">
          <div className="left-column-42 right-padding-28px">
            <p className="cs-subtitle margin-bottom-12px sub-anchor-area" id="components-title">Components</p>
            <p className="cs-body">
              These are the relatively simple UI elements reused from design to
              design. We placed these on individual artboards and made sure that each component is:
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
              <strong className="highlight">I also unified the way components are categorized and named</strong> so
              that anyone can
              easily find the component and variant they are looking for from the assets panel.
            </p>
          </div>
          <div className="right-column-58">
            <img id="component-categorization" src={ComponentCategorization} alt=""/>
          </div>
        </div>

        <div className="row-42-58 margin-bottom-80px">
          <div className="left-column-42 right-padding-28px">
            <h3 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="patterns-title">Patterns</h3>
            <p className="cs-body">These standard layouts are reused in many different designs with slight variations to
              individual components. For each pattern, we ensured that it is:</p>
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

        <h3 className="cs-subtitle margin-bottom-80px sub-anchor-area" id="process-documentation-title">Process
          Documentation</h3>
        <h2 className="cs-manrope-150-line-height margin-bottom-80px">
          Once we had organized the existing chaos, we knew we needed to document a
          standard process for adding to and
          maintaining the design system in the future.
        </h2>
        <img className="margin-bottom-0px" id="creation-flowchart" src={FlowChart} alt=""/>

        <p className="cs-body">
          <strong className="highlight"> With the new process in place, everyone on the team was on the same page and
            new hires joining the design team noted that the process/classification made it easier to familiarize
            themselves with the system and how it
            functioned.</strong>
        </p>
      </div>

        <div className="iteration margin-bottom-80px anchor-area" id="iteration-area" key="iteration-group">
          <h2 className="cs-title mid-align-title margin-bottom-40px" id="iteration-title"><strong
            className="blue-text">03 </strong>-
            Iteration</h2>
          <h3 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="user-feedback-title">User Feedback</h3>
          <p className="cs-body margin-bottom-40px">
            From the beginning, we wanted to involve other parallel teams as early on as
            possible since
            the design system had to be optimized for everyone to be considered a success. To achieve this, <strong
            className="highlight">I
            conducted team and individual interviews with the development, product, and marketing teams to discover
            how we could improve
            our current design handoffs and what their thoughts about our new design system/process. </strong>
          </p>
          <p className="cs-subtitle margin-bottom-12px sub-anchor-area" id="design-considerations-title">Design
            Considerations</p>
          <ul className="margin-bottom-40px">
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

          <p className="cs-subtitle margin-bottom-12px sub-anchor-area" id="iterations-for-developers-title">Iterations
            for
            Developers</p>
          <p className="cs-body margin-bottom-40px">Starting with the design specs, we
            wanted to redesign the designer -> developer handoff experience
            by addressing the specific pain points of the development team. <strong className="highlight">We spent some
              time iterating and
              testing multiple versions of the design specs before
              arriving at the final version, which got very positive reviews from the developers.</strong>
          </p>

          <p className="cs-subtitle margin-bottom-12px no-bold">Old Design Specs for Handoff</p>
          <img className="margin-bottom-40px" id="old-design-specs" src={OldDesignSpecs} alt=""/>

          <p className="cs-subtitle margin-bottom-12px no-bold">New Design Specs for Handoff</p>
          <img className="margin-bottom-40px" id="new-design-specs" src={NewDesignSpec1} alt=""/>
          <p className="cs-subtitle margin-bottom-12px no-bold">Reprioritization</p>
          <p className="cs-body margin-bottom-40px">In one early iteration, we included redlines to
            indicate
            the spacing of and in between components;
            however, after several rounds of testing, we learned that all of the developers were very familiar with
            Figma
            and
            could find the distances themselves with the inspecting
            feature. Instead, they stated that they would prefer to be able to see a visual representation of the
            behaviour of some of the more complicated components like
            text fields. <strong className="highlight">Therefore, we scrapped the redlines and redirected
              that time to creating clickable mini prototypes of
              component behaviours and linking those to our design specs for handoff.</strong></p>

          <p className="cs-subtitle margin-bottom-12px no-bold">Scrapped Iteration With Redlines</p>
          <img className="margin-bottom-40px" id="new-design-specs" src={NewDesignSpec2} alt=""/>

          <p className="cs-subtitle margin-bottom-12px no-bold">Reprioritized Mini Prototypes of Component Behaviour</p>
          <div className="figma-embed-wrapper margin-bottom-40px">
            <iframe width="100%" height="100%"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FnJaUw4Tyxn7GOpUglOlAmQ%2FField-Behaviour-Mini-Prototype%3Fpage-id%3D0%253A1%26node-id%3D4%253A6186%26viewport%3D-975%252C-27%252C1%26scaling%3Dcontain%26starting-point-node-id%3D4%253A6186%26hotspot-hints%3D0"
                    allowFullScreen></iframe>
          </div>

          <div className="row-42-58 margin-bottom-40px">
            <div className="left-column-42 right-padding-28px">
              <h3 className="cs-subtitle margin-bottom-12px sub-anchor-area"
                  id="iterations-for-product-managers-owners-title">Iterations for
                Product Managers/Owners</h3>
              <p className="cs-body">
                To improve lookup for product owners and managers,<strong className="highlight"> I engineered a new
                system
                to use coloured covers and status tags to organize the existing Figma files</strong> so it was easy to
                tell what the file was about
                and the
                project's status from a quick glance.
              </p>
            </div>
            <div className="right-column-58">
              <img id="file-organization-1" src={FileOrganization1} alt=""/>
            </div>
          </div>

          <div className="row-42-58 margin-bottom-40px">
            <div className="left-column-42 right-padding-28px">
              <h3 className="cs-subtitle margin-bottom-12px sub-anchor-area"
                  id="iterations-for-marketers-designers-title">Iterations for
                Marketers/Designers</h3>
              <p className="cs-body">
                To improve lookup for marketers and graphic designers, <strong className="highlight">I separated the
                3 categories identified
                above into pages and added additional pages for workspaces or other visual elements such as
                illustrations.</strong>
              </p>
            </div>
            <div className="right-column-58">
              <img id="file-organization-2" src={FileOrganization2} alt=""/>
            </div>
          </div>

          <h3 className="cs-subtitle margin-bottom-12px sub-anchor-area" id="iterations-for-new-hires-title">Iterations
            for New
            Hires</h3>
          <p className="cs-body margin-bottom-40px">
            <strong className="highlight"> To improve and ease the onboarding experience, I established a short
              guide in
              Confluence introducing the
              design system and the established process.</strong> I also included a welcome page as the first page in
            the
            design system
            Figma file to introduce
            new users to the system and highlighted answers to common questions so anyone
            could pick up using
            the design system quickly!
          </p>
          <img id="onboarding" src={Onboarding} alt=""/>
        </div>

        <div className="impact margin-bottom-80px anchor-area" id="impact-area" key="impact-group">
          <div className="impact-inner">
            <p className="cs-title margin-bottom-40px mid-align-title" id="impact-title"><strong
              className="blue-text">04</strong> -
              Impact</p>
            <div className="margin-bottom-40px">
              <div className="impact-left">
                <p className="cs-title margin-bottom-32px">Before Design System</p>
                <ul>
                  <li className="cs-body margin-bottom-24px"><p className="impact-number">0</p> published
                    components & variants
                  </li>
                  <li className="cs-body margin-bottom-24px"><p className="impact-number">0</p> published styles
                  </li>
                  <li className="cs-body margin-bottom-24px"><p className="impact-number">0</p> pages of component
                    documentation
                  </li>
                </ul>

              </div>
              <div className="impact-right">
                <p className="cs-title margin-bottom-32px">After Design System</p>
                <ul>
                  <li className="cs-body margin-bottom-24px"><p className="impact-number">620</p> published components &
                    variants
                  </li>
                  <li className="cs-body margin-bottom-24px"><p className="impact-number">86</p> published styles
                    documentation
                  </li>
                  <li className="cs-body margin-bottom-24px"><p className="impact-number">124</p> pages of component
                    documentation
                  </li>
                </ul>
              </div>
            </div>

            <p className="cs-body margin-bottom-40px">After we published the first version of the system and process, we
              conducted a
              company-wide review meeting; members of other teams praised our design considerations, and the response to
              all of our hard work was astoundingly positive.
            </p>
            <h2 className="cs-manrope margin-bottom-0px off-white-text">
              Finally, we took a look at the design-related Jira tickets created by designers during QA for 4
              similarly sized
              projects. Comparing the numbers before and after the design system implementation, we found an average
              decrease of
              46%.
            </h2>
          </div>
        </div>

        <div className="reflection margin-bottom-80px anchor-area" id="reflection-area" key="reflection-group">
          <h2 className="cs-title mid-align-title margin-bottom-40px" id="reflection-title"><strong
            className="blue-text">05 </strong>-
            Reflection</h2>
          <p className="cs-subtitle margin-bottom-40px sub-anchor-area" id="what-did-i-learn-title">What Did I
            Learn?</p>

          <p className="cs-subtitle-2 margin-bottom-12px" id="it-takes-two-to-tango-title">It Takes Two (And
            A Lot More) To
            Tango</p>
          <p className="cs-body margin-bottom-40px"><strong className="highlight">Creating and maintaining a design
            system is a constant back-and-forth conversation between all the users involved.</strong> Open communication
            and feedback should
            involve the input of all stakeholders
            to ensure that it serves its overall purpose. </p>
          <p className="cs-subtitle-2 margin-bottom-12px" id="rome-wasn't-built-in-one-day-title">Rome
            Wasn't Built In One
            Day</p>
          <p className="cs-body margin-bottom-80px"><strong className="highlight">Design systems are constantly evolving
            and changing with
            every new design and idea.</strong> We’re
            proud of creating the system’s foundation, and the long process helped me realize what a constant
            work-in-progress a design system is and should always be.</p>

          <p className="cs-subtitle margin-bottom-12px sub-anchor-area" id="next-steps-title">Next Steps</p>
          <p className="cs-body margin-bottom-80px">We plan to continue conducting monthly design system meetings with
            all
            the necessary stakeholders to ensure the system is evolving at the same rate as our designs and continue
            finding room
            for optimizations down the line.</p>
        </div>

      <img className="anchor-area" id="final-image" src={AccessFinalImage} alt=""/>

      <RedirectLinks currentPage="access" prevCaseStudy="aprio" prevCaseStudyText="Aprio" nextCaseStudy="finwell"
                     nextCaseStudyText="FinWell"/>
    </div>
  )
}
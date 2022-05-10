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
import AccessFinalImage from '../Assets/AccessPageImages/accessFinalImage.svg';
import OldDesignSpecs from '../Assets/AccessPageImages/OldDesignSpecs.svg';
import NewDesignSpec1 from '../Assets/AccessPageImages/NewDesignSpec1.svg';
import NewDesignSpec2 from '../Assets/AccessPageImages/NewDesignSpec2.svg';

export const Access = () => {
  useEffect(() => {
    // window.scrollTo(0,0);

    // Change header and footer to light mode if needed
    if (!document.getElementById("nav-wrapper").classList.contains("light-mode")) {
      document.getElementById("nav-wrapper").classList.add("light-mode");
    }

    if (!document.getElementById("footer").classList.contains("light-mode")) {
      document.getElementById("footer").classList.add("light-mode");
    }

    // Highlights
      highlight();
  }, []);

  /**
   * Highlights words that are preset, when they're visible on the screen
   */
  const highlight = () => {
    let scroll = window.scrollY;
    let innerHeight = window.innerHeight;

    let elements = document.getElementsByClassName("highlight");
    let delay = 500;

    window.addEventListener("scroll", () => {
      scroll = window.scrollY;

      if ((scroll + innerHeight) >= elements[0].offsetTop) {
        for (const element of elements) {
          if ((scroll + innerHeight) >= elements[0].offsetTop) {
            setTimeout(() => {
              element.classList.add("active");
            }, delay);
          }
          // delay += 1400;
        }
      }
    })
  }

  return (
    <div className="access-page">
      <img className="access-header margin-bottom-80px" src={AccessHeader} alt=""/>

      <div className="overview">
        <h3 className="cs-title margin-bottom-80px">Overview</h3>
        <h2 className="cs-inter margin-bottom-80px">i led a team to build and maintain a design system for an entire ecosystem
          of software products.</h2>

        <h3 className="cs-subtitle margin-bottom-16px">Context</h3>
        <p className="cs-body margin-bottom-40px"><div className="highlight">The Access team at Moken Agency was in the process of designing and launching a suite of tools designed to
          digitize the agency experience and help various user</div><div className="highlight"> groups in the startup ecosystem.</div> The business roadmap had
          a planned two digital products launching in 2021 and six more in the backlog. With the sheer amount of designs
          we were creating every day, the inconsistencies between components was becoming more and more apparent. <div className="highlight">We decided we needed to create a</div><div className="highlight"> company wide
            design system to support the scalability and consistency of our designs.</div></p>

        <h3 className="cs-subtitle margin-bottom-16px">What did I do?</h3>
        <ul>
          <li className="cs-body">I <div className="highlight">defined our design system's preliminary structure, language, and process.</div></li>
          <li className="cs-body">I <div className="highlight">designed and launched the first published version of the design system.</div> This is the bedrock of the design system that is still being used today company wide at Moken Agency.</li>
          <li className="cs-body margin-bottom-40px">I also also tested with several different groups of end users to
            make sure the <div className="highlight">design system benefit not only the design team, but everyone that would be</div>
            <div className="highlight"> using it.</div></li>
        </ul>

        <h3 className="cs-subtitle margin-bottom-16px">Project Timeline</h3>
        <p className="cs-body margin-bottom-40px">The process to establish the first version of the design system and process took place over <div className="highlight">6 months in 2021.</div></p>

        <h3 className="cs-subtitle margin-bottom-16px">Project Type</h3>
        <p className="cs-body margin-bottom-40px">Collaborative (sub-team of 3), Web,  User Research, Design System</p>

        <h3 className="cs-subtitle margin-bottom-16px">Project Tools</h3>
        <p className="cs-body margin-bottom-80px">Figma, Confluence, Slack</p>
      </div>

      <div className="ideation margin-bottom-80px">
        <h2 className="cs-title margin-bottom-80px"><strong className="blue-text">01 </strong>- Ideation</h2>
        <h3 className="cs-subtitle margin-bottom-40px">What are users experiencing?</h3>

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
            <p className="cs-body">“I feel like I’ve developed the same component 3 times”</p>
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

        <h3 className="cs-inter margin-bottom-80px">We needed to create a design system that would bring structure and organization to the entire design process.</h3>
        <h3 className="cs-subtitle margin-bottom-12px">Stakeholder Buy In</h3>

        <p className="cs-body">
          In order to ensure the success of this project, <div className="highlight">it was important to get stakeholders on board</div> before we start
          building our design system. We did this in many ways:
        </p>

        <ul className="margin-bottom-80px">
          <li className="cs-body">
            <div className="highlight">Organized a company wide meeting with all stakeholders</div> present where we presented the
            long-term benefits of adopting a design system and how it was going to individually address all of their pain points.
          </li>
          <li className="cs-body">
            <div className="highlight">Involve engineering early on</div> in monthly meetings to get their input
            and make sure they feel included as well as understood in the process.
          </li>
        </ul>

        <h3 className="cs-subtitle margin-bottom-12px">Our North Star</h3>
        <p className="cs-body margin-bottom-36px"><div className="highlight">Guiding principles we kept in mind all throughout the process.</div></p>

        <div className="north-star-row margin-bottom-80px">
          <div className="spacing-div margin-bottom-80px">
            <div className="left-column">
              <img src={Documentation} alt=""/>
              <h4 className="cs-subtitle-2">Documentation</h4>
              <p className="cs-body">Make sure everything is documented
                so that other users like developers and even new designers can get on the same page quickly.</p>
            </div>
            <div className="center-column">
              <img src={Eyes} alt=""/>
              <h4 className="cs-subtitle-2">Consistency</h4>
              <p className="cs-body">The new design system should be the single source of truth for all components and design elements.</p>
            </div>
            <div className="right-column">
              <img src={Cog} alt=""/>
              <h4 className="cs-subtitle-2">Process</h4>
              <p className="cs-body">Take the time to create a workflow and process now so that the design system is
                scalable no matter the project or team size.</p>
            </div>
          </div>

          <h3 className="cs-subtitle-2 margin-bottom-12px">Preliminary Research</h3>
          <p className="cs-body">This was the first design system any of us had ever built, so we relied on research and following the
            examples of some of the most recognized design systems out there such as Shopify’s <u>Polaris</u>,
            IBM’s <u>Carbon</u>, or Saleforce’s <u>Lightning</u>. We <div className="highlight">took note of all the common practices and methods for
              how the systems were</div> <div className="highlight">organized and brainstormed on how those examples could serve our purposes best.</div></p>
        </div>
      </div>

      <div className="creation margin-bottom-80px">
        <h2 className="cs-title margin-bottom-80px"><strong className="blue-text">02 </strong>- Creation</h2>
        <h3 className="cs-inter margin-bottom-80px">We started by breaking down the existing design elements into groups and categories.</h3>
        <div className="row-42-58">
          <div className="left-column-42 right-padding-28px">
            <p className="cs-subtitle margin-bottom-12px">Foundation</p>
            <p className="cs-body">
              These are the <div className="highlight">fundamental visual elements that can't be</div> <div className="highlight"> broken down into smaller elements</div> and serve as the foundation for the existance of all other components.
            </p>
          </div>
          <div className="right-column-58">
            <img src={DesignSystem} alt=""/>
          </div>
        </div>

        <div className="row-42-58 margin-bottom-80px">
          <div className="left-column-42 right-padding-28px">
            <p className="cs-body">
              We unified the way our icons look by <div className="highlight"> making sure the icons take </div><div className="highlight"> up the same space in a grid and have the same weight. </div> We also determined a new icon naming convention.
            </p>
          </div>
          <div className="right-column-58">
            <img src={Iconography} alt=""/>
            <img src={Icons} alt=""/>
          </div>
        </div>

        <div className="row-42-58 margin-bottom-80px">
          <div className="left-column-42 right-padding-28px">
            <p className="cs-subtitle margin-bottom-12px">Components</p>
            <p className="cs-body">
              These are the <div className="highlight"> relatively simple UI elements that are reused </div><div className="highlight"> from design to design. </div> We placed these on individual artboards and made sure that:
            </p>

            <ul>
              <li className="cs-body">Each component is made up of elements from the foundation</li>
              <li className="cs-body">Each component is named properly</li>
              <li className="cs-body">Each component follows the 4px rule</li>
              <li className="cs-body">Each component had variants to switch between the different states</li>
            </ul>
          </div>
          <div className="right-column-58">
            <img src={TextFields} alt=""/>
          </div>
        </div>

        <div className="row-42-58 margin-bottom-80px">
          <div className="left-column-42 right-padding-28px">
            <p className="cs-body">
              I <div className="highlight"> unified the way components are categorized and named so that </div>
              <div className="highlight"> each component can be easily found in the assets panel </div> and it’s easy to switch to the variant you are looking for.
            </p>
          </div>
          <div className="right-column-58">
            <img id="component-categorization" src={ComponentCategorization} alt=""/>
          </div>
        </div>

        <div className="row-42-58 margin-bottom-80px">
          <div className="left-column-42 right-padding-28px">
            <h3 className="cs-subtitle margin-bottom-12px">Patterns</h3>
            <p className="cs-body">These are <div className="highlight">common layouts that get reused in many different </div><div className="highlight"> designs with
              slight variations to the components. </div> We created these making sure that:</p>
            <ul>
              <li className="cs-body">Each pattern is made up of components already in the design system</li>
              <li className="cs-body">Each pattern is optimized for reusability</li>
              <li className="cs-body">Each pattern follows the margin and spacing rules laid out in the design system</li>
            </ul>
          </div>
          <div className="right-column-58">
            <img src={Patterns} alt=""/>
          </div>
        </div>

        <h2 className="cs-inter margin-bottom-80px">
          Once we had organized the chaos, we knew we needed to document a standard process moving forward.
        </h2>
        <img className="margin-bottom-80px" id="creation-flowchart" src={FlowChart} alt=""/>

       <p className="cs-body">
          With the new process in place, <div className="highlight"> everyone on the team was on the same page and new designers joining the
         team noted how much less daunting the design system </div> <div className="highlight">was</div>.
        </p>
      </div>

      <div className="iteration margin-bottom-80px">
        <h2 className="cs-title margin-bottom-80px"><strong className="blue-text">03 </strong>- Iteration</h2>
        <p className="cs-body margin-bottom-40px">
          From the beginning, we wanted to <div className="highlight"> involve other parallel teams as early on as possible </div> since
          the design system had to be optimized for everyone in order to be considered a success. To achieve
          this, <div className="highlight">I conducted team and individual interviews with the engineering, product, and marketing teams </div> in order to see how we can improve our current design handoffs and what they thought about our current design system process.
        </p>
        <p className="cs-subtitle margin-bottom-12px">What I learned:</p>
        <ul className="margin-bottom-24px">
          <li className="cs-body">The biggest pain point for engineering was <div className="highlight"> figuring out how screens were connected and the different states of the components used in each design.</div></li>
          <li className="cs-body">The biggest pain point for marketing was <div className="highlight">figuring out which assets in the design system were meant for them and how to made edits to the components </div> <div className="highlight">when turning them into variants. </div></li>
          <li className="cs-body">The biggest pain point for product was <div className="highlight">finding what they were looking for in a fast and efficient manner, especially when checking in on progress on specific </div><div className="highlight"> tasks. </div></li>
          <li className="cs-body">The teams <div className="highlight"> enjoyed the new process and the constant updates in the #designsystem slack channel made them feel included and involved. </div></li>
        </ul>

        <p className="cs-body margin-bottom-40px">
          <div className="highlight"> We spent some time iterating through different versions of the design specs before arriving at the final version, which got very positive reviews from the </div><div className="highlight">engineers on review. </div>
        </p>

        <p className="cs-subtitle margin-bottom-40px">Old Design Specs</p>
        <img className="margin-bottom-40px" id="old-design-specs" src={OldDesignSpecs} alt=""/>

        <p className="cs-subtitle margin-bottom-40px">New Design Specs</p>
        <img className="margin-bottom-40px" id="new-design-specs" src={NewDesignSpec1} alt=""/>
        <img className="margin-bottom-40px" id="new-design-specs" src={NewDesignSpec2} alt=""/>
      </div>

      <div className="organization margin-bottom-80px">
        <h2 className="cs-title margin-bottom-80px"><strong className="blue-text">04 </strong>- Organization</h2>

        <div className="row-42-58 margin-bottom-60px">
          <div className="left-column-42 right-padding-28px">
            <h3 className="cs-subtitle margin-bottom-12px">File Organization</h3>
            <p className="cs-body">
              <div className="highlight"> To improve lookup for product owners and managers, I came up </div>
              <div className="highlight"> with a new system to use covers to organize new Figma files </div> so it was easy to tell what the file was about from one glance.
            </p>
          </div>
          <div className="right-column-58">
            <img src={FileOrganization1} alt=""/>
          </div>
        </div>

        <div className="row-42-58 margin-bottom-80px">
          <div className="left-column-42 right-padding-28px">
            <p className="cs-body">
              Also, to organize the enormous file containing our design system, I started off <div className="highlight"> organizing the artboards in the three </div>
              <div className="highlight"> categories identified above and added additional pages </div> for work spaces and other visual elements such as illustrations. This way
              <div className="highlight"> parallel teams like marketing would be able to easily find the </div> <div className="highlight"> assets they are looking for. </div>
            </p>
          </div>
          <div className="right-column-58">
            <img id="file-organization-2" src={FileOrganization2} alt=""/>
          </div>
        </div>

        <h3 className="cs-subtitle margin-bottom-12px">Onboarding</h3>
        <p className="cs-body margin-bottom-40px">
          I came up with a way to <div className="highlight"> onboard new designers by creating a guide in Confluence introducing the design system along with the established process. </div> I also
          went the extra step of including a page in the Figma file to introduce new users to the system and <div className="highlight"> highlighted answers to common questions so even new members </div>
          <div className="highlight"> to the other teams would be able to pick up using the design system quickly! </div>
        </p>
        <img className="margin-bottom-40px" id="onboarding" src={Onboarding} alt=""/>
      </div>

      <div className="impact margin-bottom-80px">
        <div className="impact-inner">
          <p className="cs-title margin-bottom-80px">05 - Impact</p>
          <div className="margin-bottom-40px">
            <div className="impact-left">
              <p className="cs-title margin-bottom-32px">Before</p>
              <ul>
                <li className="cs-body margin-bottom-24px"><p className="impact-number">0</p> published components</li>
                <li className="cs-body margin-bottom-24px"><p className="impact-number">0</p> component variants</li>
                <li className="cs-body margin-bottom-24px"><p className="impact-number">0</p> pages of component documentation</li>
              </ul>

            </div>
            <div className="impact-right">
              <p className="cs-title margin-bottom-32px">After</p>
              <ul>
                <li className="cs-body margin-bottom-24px"><p className="impact-number">824</p> published components</li>
                <li className="cs-body margin-bottom-24px"><p className="impact-number">1432</p> component variants</li>
                <li className="cs-body margin-bottom-24px"><p className="impact-number">224</p> pages of component documentation</li>
              </ul>
            </div>
          </div>

          <p className="cs-body margin-bottom-40px">After we published the first version of the system and process, we conducted a review meeting
            with all the managers and got an astoundingly positive response to all of our work and results. The work we started
            will continue to serve as the foundation for the future versions of the Moken Design System.</p>
          <p className="cs-subtitle margin-bottom-12px">Next Steps</p>
          <p className="cs-body margin-bottom-80px">We’re planning to continue conducting monthly design system meetings with all the stakeholders
            so we can ensure the system is evolving at the same rate we are and so we can continue to constantly look for spots to improve on.</p>
        </div>
      </div>

      <div className="reflection margin-bottom-80px">
        <h2 className="cs-title margin-bottom-80px"><strong className="blue-text">06 </strong>- Reflection</h2>
        <p className="cs-subtitle margin-bottom-12px">It takes two (and a lot more) to tango</p>
        <p className="cs-body margin-bottom-40px">Creating and maintaining a design system is a <div className="highlight"> constant back and forth conversation </div> between all the users involved. Open communication and feedback should involve the input of everyone to
          ensure that it it serving its overall purpose. </p>
        <p className="cs-subtitle margin-bottom-12px">Rome wasn't built in one day</p>
        <p className="cs-body"><div className="highlight">Design system are constantly evolving and changing with every new design and idea. </div> We’re proud of creating the first version and foundation of the system but the process helped me realize
          what a constant work in progress a design system is and should be.</p>
      </div>

      <img className="margin-bottom-160px" id="access-final-image" src={AccessFinalImage} alt=""/>
    </div>
  )
}
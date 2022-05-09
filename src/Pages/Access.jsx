import React from 'react';
import AccessHeader from '../Assets/AccessHeader.svg';
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

export const Access = () => {
  return (
    <div className="access-page">
      <img className="access-header" src={AccessHeader} alt=""/>

      <div className="overview">
        <h3 className="cs-title">Overview</h3>
        <h2 className="cs-inter">i led a team to build and maintain a design system for an entire ecosystem
          of software products.</h2>

        <h3 className="cs-subtitle">Context</h3>
        <p className="cs-body">The Access team at Moken Agency was in the process of designing and launching a suite of tools designed to
          digitize the agency experience and help various user groups in the startup ecosystem. The business roadmap had
          a planned two digital products launching in 2021 and six more in the backlog. With the sheer amount of designs
          we were creating every day, the inconsistencies between components was becoming more and more apparent.
          We decided we needed to create a company wide design system to support the scalability and consistency of our designs.</p>

        <h3 className="cs-subtitle">What did I do?</h3>
        <ul>
          <li className="cs-body">I defined our design system's preliminary structure, language, and process.</li>
          <li className="cs-body">I designed and launched the first published version of the design system.
            This is the bedrock of the design system that is still being used today company wide at Moken Agency.</li>
          <li className="cs-body">I also also tested with several different groups of end users to make sure the design system benefit not
            only the design team, but everyone that would be using it.</li>
        </ul>

        <h3 className="cs-subtitle">Project Timeline</h3>
        <p className="cs-body">The process to establish the first version of the design system and process took place over 6 months in 2021.</p>

        <h3 className="cs-subtitle">Project Type</h3>
        <p className="cs-body">Collaborative (sub-team of 3), Web,  User Research, Design System</p>

        <h3 className="cs-subtitle">Project Tools</h3>
        <p className="cs-body">Figma, Confluence, Slack</p>
      </div>

      <div className="ideation">
        <h2 className="cs-title"><strong className="blue-text">01 </strong>- Ideation</h2>
        <h3 className="cs-subtitle">What are users experiencing?</h3>

        <div className="row">
          <div className="left-column">
            <img className="emoji" src={FemaleArtist} alt=""/>
            <h3 className="cs-subtitle-2">Designers</h3>
            <p className="cs-body">“This component needs to be tweaked slightly.”</p>
            <p className="cs-body">“Where do I document this new component I just made?”</p>
            <p className="cs-body">“Is there already an icon that exists for this?”</p>
          </div>
          <div className="right-column">
            <img className="emoji" src={MaleArtist} alt=""/>
            <h3 className="cs-subtitle-2">New Designers</h3>
            <p className="cs-body">“How do I find what I am looking for?”</p>
            <p className="cs-body">“Does this component already exist?”</p>
            <p className="cs-body">“How do I add a new component?”</p>
          </div>
        </div>

        <div className="row">
          <div className="left-column">
            <img className="emoji" src={Developer} alt=""/>
            <h3 className="cs-subtitle-2">Developers</h3>
            <p className="cs-body">“I feel like I’ve developed the same component 3 times”</p>
            <p className="cs-body">“What has changed in this design?”</p>
            <p className="cs-body">“What does interacting with this component look like?”</p>
          </div>
          <div className="right-column">
            <img className="emoji" src={EndUser} alt=""/>
            <h3 className="cs-subtitle-2">End Users</h3>
            <p className="cs-body">“The product should have a consistent look and feel.”</p>
            <p className="cs-body">“I want to stick to certain colours and font.”</p>
            <p className="cs-body">“The designs need to be scalable for the future.”</p>
          </div>
        </div>

        <h3 className="cs-inter">We needed to create a design system that would bring structure and organization to the entire design process.</h3>
        <h3 className="cs-subtitle">Stakeholder Buy In</h3>

        <p className="cs-body">
          In order to ensure the success of this project, it was important to get stakeholders on board before we start
          building our design system. We did this in many ways:
        </p>

        <ul>
          <li className="cs-body">
            <strong>Organized a company wide meeting with all stakeholders </strong>present where we presented the
            long-term benefits of adopting a design system and how it was going to individually address all of their pain points.
          </li>
          <li className="cs-body">
            <strong>Involve engineering early on </strong>in monthly meetings to get their input
            and make sure they feel included as well as understood in the process.
          </li>
        </ul>

        <h3 className="cs-subtitle">Our North Star</h3>
        <p className="cs-body">Guiding principles we kept in mind all throughout the process.</p>

        <div className="north-star-row">
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

          <h3 className="cs-subtitle-2">Preliminary Research</h3>
          <p className="cs-body">This was the first design system any of us had ever built, so we relied on research and following the
            examples of some of the most recognized design systems out there such as Shopify’s <u>Polaris</u>,
            IBM’s <u>Carbon</u>, or Saleforce’s <u>Lightning</u>. We <strong>took note of all the common practices and methods for
            how the systems were organized and brainstormed on how those examples could serve our purposes best.</strong></p>
        </div>
      </div>

      <div className="creation">
        <h2 className="cs-title"><strong className="blue-text">02 </strong>- Creation</h2>
        <h3 className="cs-inter">We started by breaking down the existing design elements into groups and categories.</h3>
        <div className="row-33-67">
          <div className="left-column-33">
            <p className="cs-subtitle">Foundation</p>
            <p className="cs-body">
              These are the fundamental visual elements that can't be broken down into smaller elements
              and serve as the foundation for the existance of all other components.
            </p>
          </div>
          <div className="right-column-67">
            <img src={DesignSystem} alt=""/>
          </div>
        </div>

        <div className="row-33-67">
          <div className="left-column-33">
            <p className="cs-body">
              We unified the way our icons look by making sure the icons are take up the same space in a grid and
              have the same weight. We also determined a new icon naming convention.
            </p>
          </div>
          <div className="right-column-67">
            <img src={Iconography} alt=""/>
            <img src={Icons} alt=""/>
          </div>
        </div>

        <div className="row-33-67">
          <div className="left-column-33">
            <p className="cs-subtitle">Components</p>
            <p className="cs-body">
              These are the relatively simple UI elements that are reused from design to design.
              We placed these on individual artboards and made sure that:
            </p>

            <ul>
              <li className="cs-body">Each component is made up of elements from the foundation</li>
              <li className="cs-body">Each component is named properly</li>
              <li className="cs-body">Each component follows the 4px rule</li>
              <li className="cs-body">Each component had variants to switch between the different states</li>
            </ul>
          </div>
          <div className="right-column-67">
            <img src={TextFields} alt=""/>
          </div>
        </div>

        <div className="row-33-67">
          <div className="left-column-33">
            <p className="cs-body">
              I unified the way components are categorized and named so that each component can be easily found
              in the assets panel and it’s easy to switch to the variant you are looking for.
            </p>
          </div>
          <div className="right-column-67">
            <img id="component-categorization" src={ComponentCategorization} alt=""/>
          </div>
        </div>

        <div className="row-33-67">
          <div className="left-column-33">
            <h3 className="cs-subtitle">Patterns</h3>
            <p className="cs-body">These are common layouts that get reused in many different designs with
              slight variations to the components. We created these making sure that:</p>
            <ul>
              <li className="cs-body">Each pattern is made up of components already in the design system</li>
              <li className="cs-body">Each pattern is optimized for reusability</li>
              <li className="cs-body">Each pattern follows the margin and spacing rules laid out in the design system</li>
            </ul>
          </div>
          <div className="right-column-67">
            <img src={Patterns} alt=""/>
          </div>
        </div>

        <h2 className="cs-inter">
          Once we had organized the chaos, we knew we needed to document a standard process moving forward.
        </h2>

        <img src={FlowChart} alt=""/>
        <p className="cs-body">
          With the new process in place, everyone on the team was on the same page and new designers joining the
          team noted how much less daunting the design system was.
        </p>
      </div>

      <div className="communication">
        <h2 className="cs-title"><strong className="blue-text">03 </strong>- Communication</h2>
        <p className="cs-body">
          With the new process in place, everyone on the team was on the same page and new designers joining the
          team noted how much less daunting the design system was.
        </p>
      </div>

      <div className="organization">
        <h2 className="cs-title"><strong className="blue-text">04 </strong>- Organization</h2>

        <div className="row-33-67">
          <div className="left-column-33">
            <h3 className="cs-subtitle">File Organization</h3>
            <p className="cs-body">I came up with a new system to use covers to organize new Figma files so it was easy
              to tell what the file was about from one glance.</p>
          </div>
          <div className="right-column-67">
            <img src={FileOrganization1} alt=""/>
          </div>
        </div>

        <div className="row-33-67">
          <div className="left-column-33">
            <p className="cs-body">To organize the enormous file containing our design system, I started off organizing
              the artboards in the three categories identified above and added additional pages for work spaces and
              other visual elements such as illustrations.</p>
          </div>
          <div className="right-column-67">
            <img id="file-organization-2" src={FileOrganization2} alt=""/>
          </div>
        </div>

        <h3 className="cs-subtitle">Onboarding</h3>
        <p className="cs-body">I came up with a way to onboard new designers by creating a guide in Confluence
          introducing the design system along with the established process. I also went the extra step of including a
          page in the Figma file to introduce new users to the system and highlighted answers to common questions.</p>
        <img id="onboarding" src={Onboarding} alt=""/>
      </div>

      <div className="impact">
        <div className="impact-inner">
          <p className="cs-title" id="impact-title">05 - Impact</p>
          <div className="impact-left">
            <p className="cs-title">Before</p>
            <ul>
              <li className="cs-body"><text className="impact-number">0</text> published components</li>
              <li className="cs-body"><text className="impact-number">0</text> component variants</li>
              <li className="cs-body"><text className="impact-number">0</text> pages of component documentation</li>
            </ul>

          </div>
          <div className="impact-right">
            <p className="cs-title">After</p>
            <ul>
              <li className="cs-body"><text className="impact-number">824</text> published components</li>
              <li className="cs-body"><text className="impact-number">1432</text> component variants</li>
              <li className="cs-body"><text className="impact-number">224</text> pages of component documentation</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="reflection">
        <h2 className="cs-title"><strong className="blue-text">06 </strong>- Reflection</h2>
        <p className="cs-subtitle">It takes two (and a lot more) to tango</p>
        <p className="cs-body">Creating and maintaining a design system is a constant back and forth conversation
          between all the users involved. Open communication and feedback should involve the input of everyone to
          ensure that it it serving its overall purpose. </p>
        <p className="cs-subtitle">Rome wasn't built in one day</p>
        <p className="cs-body">Design system are constantly evolving and changing with every new design and idea.
          We’re proud of creating the first version and foundation of the system but the process helped me realize
          what a constant work in progress a design system is and should be.</p>
      </div>

      <img id="access-final-image" src={AccessFinalImage} alt=""/>
    </div>
  )
}
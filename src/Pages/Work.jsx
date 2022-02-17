import React from 'react';
import '../Stylesheets/Work.scss';
import Underline from '../Assets/underline.svg';
import ProfileImage from '../Assets/profile_image.svg'
import {CaseStudyCard} from "../Components/CaseStudyCard";
import {Column, Row} from "react-foundation";

export const Work = () => {
    return (
      <div className="background">
        <div className="work-page">
          <div className="header-area">
            <h1 className="welcome-header">Welcome! I'm <div className="purple-background">Emma</div></h1>
            <img src={Underline} alt="Underline"/>
          </div>
          <div className="profile-image-area">
            <img src={ProfileImage} alt="ProfileImage"/>
          </div>

          <div>
            <p className="body-font">An empathetic and coffee-infused <div className="purple-background">product designer</div> passionate about creating user-focused experiences that work together with pixel-perfect designs to bring a smile to your face. </p>
            <p className="body-font">I’m currently building <div className="purple-background">web-based solutions to empower startup innovators to change the world @ Moken Agency.</div></p>
            <h4 className="h4-text">I’m also <div className="purple-text">an engaging story teller.</div></h4>
          </div>

          <div>
            <div className="half-width">
              <CaseStudyCard unFocusedColour="#0B2CB8" header="MOBILE APPLICATION | SOLO | 10 MIN READ" title="FinWell"
                             description="Using AI to build mindfulness and help control impulse spending by letting users reflect on their purchases over time."
                             cardID="finwell-case-study-card" redirectLink="/finwell"/>
            </div>

            <div className="half-width">
              <CaseStudyCard unFocusedColour="#00796B" header="WEB APPLICATION | SOLO | 10 MIN READ" title="Pivot"
                             description="Leveraging mentorship and community to support career changers pivoting to their dream careers."
                             cardID="pivot-case-study-card" redirectLink="/pivot"/>
            </div>

            <div className="half-width">
              <CaseStudyCard unFocusedColour="#CA3273" header="WEB & MOBILE APPLICATION | TEAM | 5 MIN READ" title="Sponsor Circle Internship"
                             description="Redesigning a checkout flow for a sponsorship platform."
                             cardID="sponsor-circle-case-study-card" redirectLink="/sponsorcircle"/>
            </div>

            <div className="half-width">
              <CaseStudyCard unFocusedColour="#58417C" header="WEB APPLICATION | TEAM | 10 MIN READ" title="Recharge"
                             description="Reinventing what it means to take a break-by recommending break time activities based on preferences and goals."
                             cardID="recharge-case-study-card" redirectLink="/recharge"/>
            </div>

          </div>
        </div>
      </div>

    )
}
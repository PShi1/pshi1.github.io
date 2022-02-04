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
            <p className="body-text">An empathetic and coffee-infused <div className="purple-background">product designer</div> passionate about creating user-focused experiences that work together with pixel-perfect designs to bring a smile to your face. </p>
            <p className="body-text">I’m currently building <div className="purple-background">web-based solutions to empower startup innovators to change the world @ Moken Agency.</div></p>
            <h4 className="h4-text">I’m also <div className="purple-text">an engaging story teller.</div></h4>
          </div>

          <div>
            <div className="half-width">
              <CaseStudyCard/>
            </div>
            <div className="half-width">
              <CaseStudyCard/>
            </div>
            {/*<div className="spacer-div">*/}

            {/*</div>*/}
            <div className="half-width">
              <CaseStudyCard/>
            </div>
            <div className="half-width">
              <CaseStudyCard/>
            </div>

          </div>
        </div>
      </div>

    )
}
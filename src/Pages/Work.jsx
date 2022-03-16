import React, { useEffect } from 'react';
import '../Stylesheets/Work.scss';
import Underline from '../Assets/underline.svg';
import ProfileImage from '../Assets/ProfileImage.svg'
import FinWellImage from '../Assets/FinWellImage.svg'
import RechargeImage from '../Assets/RechargeImage.svg'
import {CaseStudyCard} from "../Components/CaseStudyCard";

export const Work = () => {

  useEffect(() => {
    highlight();
  }, []);

  function highlight(){
    let scroll = document.body.scrollTop;
    let height = document.body.clientHeight;

    let elements = document.getElementsByClassName("highlight");

    let delay = 500;
    for (const element of elements) {
      let pos = element.scrollTop;
      setTimeout(() => highlightElement(element, scroll, height, pos), delay);
      delay += 1000;
    }
  }

  const highlightElement = (element, scroll, height, pos) => {
    if (scroll + height >= pos) {
      element.classList.add("active");
    }
  }


  return (
      <div className="background">
        {/*<div className="parallax-wrapper">*/}
        {/*  <header className="parallax-header">*/}
        {/*    <img src={RechargeImage} className="parallax-background">*/}

        {/*    </img>*/}
        {/*    <img src={FinWellImage} className="parallax-foreground">*/}

        {/*    </img>*/}
        {/*    <h1 className="parallax-title">Welcome!</h1>*/}
        {/*  </header>*/}
        {/*</div>*/}
        <div className="work-page">
          <div className="row">
            <div className="header-area">
              <h1 className="welcome-header">Hey there! I'm <div className="purple-background highlight fast"><p className="highlighted-text">Emma</p></div></h1>
              <img id="underline" src={Underline} alt="Underline"/>
            </div>
            <div className="profile-image-area">
              <img id="profile-image" src={ProfileImage} alt="ProfileImage"/>
            </div>
          </div>

          <div>
            <p className="body-font">An empathetic and coffee-infused <div className="purple-background highlight fast">product designer</div> passionate about creating user-focused experiences that work together with pixel-perfect designs to bring a smile to your face. </p>
            <p className="body-font">I’m currently building <div className="purple-background highlight">products to empower startup innovators to change the world @ Moken.</div></p>
            <h4 className="h4-text">I’m also <div className="purple-text">an engaging story teller.</div></h4>
          </div>

          <div>
            <div className="half-width">
              <CaseStudyCard unFocusedColour="#0B2CB8" opacity="0.15" headerColour="#0B2CB8" header="MOBILE APPLICATION | SOLO | 10 MIN READ" title="FinWell"
                             description="Using AI to build mindfulness and help control impulse spending by letting users reflect on their purchases over time."
                             cardID="finwell-case-study-card" redirectLink="/finwell" image={FinWellImage}/>
            </div>

            <div className="half-width">
              <CaseStudyCard unFocusedColour="#00796B" opacity="0.2" headerColour="#00796B" header="WEB APPLICATION | SOLO | 10 MIN READ" title="Pivot"
                             description="Leveraging mentorship and community to support career changers pivoting to their dream careers."
                             cardID="pivot-case-study-card" redirectLink="/pivot" image={FinWellImage}/>
            </div>

            <div className="half-width">
              <CaseStudyCard unFocusedColour="#FFD4E6" opacity="0.4" headerColour="#CA3273" header="WEB & MOBILE APPLICATION | TEAM | 5 MIN READ" title="Sponsor Circle Internship"
                             description="Redesigning a checkout flow for a sponsorship platform."
                             cardID="sponsor-circle-case-study-card" redirectLink="/sponsorcircle" image={FinWellImage}/>
            </div>

            <div className="half-width">
              <CaseStudyCard unFocusedColour="#DDD3FC" opacity="0.5" headerColour="#7043AC" header="WEB APPLICATION | TEAM | 10 MIN READ" title="Recharge"
                             description="Reinventing what it means to take a break-by recommending break time activities based on preferences and goals."
                             cardID="recharge-case-study-card" redirectLink="/recharge" image={RechargeImage}/>
            </div>

          </div>
        </div>
      </div>

    )
}
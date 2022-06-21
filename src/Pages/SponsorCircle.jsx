import React, {useEffect} from 'react';
import {setupScrollBar, turnAllMenuStatesOff} from "../App";
import "../Stylesheets/index.scss"
import {RedirectLinks} from "../Components/RedirectLinks";

export const SponsorCircle = () => {
  useEffect(() => {
    document.title = "Emma Li | SponsorCircle";
    setupScrollBar("#CA3273");
    turnAllMenuStatesOff();
  }, []);

  return (
    <div className="background">
      <div className="sponsor-circle-page">
        <h2>There's currently nothing here for SponsorCircle... WIP!</h2>
      </div>

      <RedirectLinks currentPage="sponsorcircle" prevCaseStudy="finwell" prevCaseStudyText="FinWell"
                     nextCaseStudy="aprio" nextCaseStudyText="Aprio"/>
    </div>
  )
}
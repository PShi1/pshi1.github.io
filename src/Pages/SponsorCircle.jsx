import React, {useEffect} from 'react';
import {setupScrollBar, turnAllMenuStatesOff} from "../App";
import "../Stylesheets/index.scss"

export const SponsorCircle = () => {
  useEffect(() => {
    document.title = "Emma Li | SponsorCircle";
    setupScrollBar("#FFCCE2");
    turnAllMenuStatesOff();
  }, []);

  return (
    <div className="background">
      <div className="sponsor-circle-page">
        <h2>There's currently nothing here for SponsorCircle... WIP!</h2>
      </div>
    </div>
  )
}
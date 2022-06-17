import React, {useEffect} from 'react';
import {setupScrollBar, turnAllMenuStatesOff} from "../App";
import "../Stylesheets/index.scss"
import {AnimatedCursor} from "../Components/AnimatedCursor";

export const Knowbie = () => {
  useEffect(() => {
    document.title = "Emma Li | Knowbie";
    setupScrollBar("#B4B5DC");
    turnAllMenuStatesOff();
  }, []);

  return (
    <div className="background">
      <AnimatedCursor/>
      <div className="knowbie-page">
        <h2>There's currently nothing here for Knowbie... WIP!</h2>
      </div>
    </div>
  )
}
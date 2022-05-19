import React, {useEffect} from 'react';
import {setupScrollBar, turnAllMenuStatesOff} from "../App";
import "../Stylesheets/index.scss"

export const Aprio = () => {
  useEffect(() => {
    document.title = "Emma Li | Aprio";
    setupScrollBar("#FFD9BC");
    turnAllMenuStatesOff();
  }, []);

  return (
    <div className="background">
      <div className="aprio-page">
        <h2>There's currently nothing here for Aprio... WIP!</h2>
      </div>
    </div>
  )
}
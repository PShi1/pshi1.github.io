import React, {useEffect} from 'react';
import {setupScrollBar, turnAllMenuStatesOff} from "../../App";
import "../../Stylesheets/index.scss"

export const Pivot = () => {
  useEffect(() => {
    document.title = "Emma Li | Pivot";
    setupScrollBar("#0FAB99");
    turnAllMenuStatesOff();
  }, []);

  return (
    <div className="background">
      <div className="pivot-page">
        <h2>There's currently nothing here for Pivot... WIP!</h2>
      </div>
    </div>
  )
}
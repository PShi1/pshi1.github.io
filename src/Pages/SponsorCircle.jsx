import React, {useEffect} from 'react';
import {setupScrollBar} from "../App";

export const SponsorCircle = () => {
  useEffect(() => {
    document.title = "Emma Li | SponsorCircle";
    setupScrollBar("#FFCCE2");
  }, []);

  return (
    <div>
      <h1>SponsorCircle</h1>
    </div>
  )
}
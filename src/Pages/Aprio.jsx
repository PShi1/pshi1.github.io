import React, {useEffect} from 'react';
import {setupScrollBar} from "../App";

export const Aprio = () => {
  useEffect(() => {
    document.title = "Emma Li | Aprio";
    setupScrollBar("#FFD9BC");
  }, []);

  return (
    <div>
      <h1>Aprio</h1>
    </div>
  )
}
import React, {useEffect} from 'react';
import {setupScrollBar} from "../App";

export const Knowbie = () => {
  useEffect(() => {
    document.title = "Emma Li | Knowbie";
    setupScrollBar("#D3D3E1");
  }, []);

  return (
    <div>
      <h1>Knowbie</h1>
    </div>
  )
}
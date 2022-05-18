import React, {useEffect} from 'react';
import {setupScrollBar} from "../App";

export const Pivot = () => {
  useEffect(() => {
    document.title = "Emma Li | Pivot";
    setupScrollBar("#0FAB99");
  }, []);

  return (
    <div>
      <h1>Pivot</h1>
    </div>
  )
}
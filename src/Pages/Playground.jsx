import React, {useEffect} from 'react';
import {hideScrollBar, setPageToDarkMode,} from "../App";

export const Playground = () => {
  useEffect(() => {
    // Mark current header link as active
    if (!document.getElementById("play-menu-item").classList.contains("active")) {
      document.getElementById("play-menu-item").classList.add("active");
    }
    if (document.getElementById("work-menu-item").classList.contains("active")) {
      document.getElementById("work-menu-item").classList.remove("active");
    }
    if (document.getElementById("about-menu-item").classList.contains("active")) {
      document.getElementById("about-menu-item").classList.remove("active");
    }

    setPageToDarkMode();
    document.title = "Emma Li | Play";
    hideScrollBar();
  }, []);

    return (
      <div className="background">
        <div className="playground-page">
          <h2>Life is not all about work.</h2>
          <h2>There's currently nothing here for Playground... WIP!</h2>
        </div>
      </div>
    )
}
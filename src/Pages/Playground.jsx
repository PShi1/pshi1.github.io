import React, {useEffect} from 'react';
import "../Stylesheets/Playground.scss"
import {
  setPageToDarkMode,
} from "../App";

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
  }, []);

    return (
      <div className="background">
        <div className="playground-wrapper">
          <h1>Life is not all about work.</h1>
        </div>
      </div>
    )
}
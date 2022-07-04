import '../Stylesheets/LoadingPage.scss';
import React from "react";

export const LoadingPage = () => {
  if (window.location.href.includes("work")) {
    return (<></>)
  }

  return (
    <div className="loading-page" id="loading-page">
      <div className="spinner">
        <div className="sk-folding-cube">
          <div className="sk-cube1 sk-cube"/>
          <div className="sk-cube2 sk-cube"/>
          <div className="sk-cube4 sk-cube"/>
          <div className="sk-cube3 sk-cube"/>
        </div>
      </div>
    </div>
  )
}
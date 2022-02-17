import React from 'react';
import "../Stylesheets/CaseStudyCard.scss"

export const CaseStudyCard = ({cardID, unFocusedColour, header, title, description, redirectLink}) => {

  const redirect = () => {
    window.location.assign(redirectLink);
  }
  return (
    <div className="case-study-card">
      <div className="case-study-card-inner-area" id={cardID} onClick={redirect}>
        <div className="case-study-card-top">

        </div>
        <div className="case-study-card-bottom" >
          <h3 className="card-header" style={{color: `${unFocusedColour}`}}>{header}</h3>
          <h1 className="card-title">{title}</h1>
          <p className="card-description">{description}</p>
        </div>
      </div>
    </div>

  )
}
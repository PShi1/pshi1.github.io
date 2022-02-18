import React from 'react';
import "../Stylesheets/CaseStudyCard.scss"

export const CaseStudyCard = ({cardID, unFocusedColour, opacity, headerColour, header, title, description, redirectLink, image}) => {

  const redirect = () => {
    window.location.assign(redirectLink);
  }
  return (
    <div className="case-study-card">
      <div className="case-study-card-inner-area" id={cardID} onClick={redirect}>
        <div className="case-study-card-top">
          <div className="background" style={{backgroundColor: `${unFocusedColour}`, opacity: `${opacity}`}}>

          </div>
          <img className="card-image" src={image} alt="image"/>
        </div>
        <div className="case-study-card-bottom" >
          <h3 className="card-header" style={{color: `${headerColour}`}}>{header}</h3>
          <h1 className="card-title"><div className="card-title-highlight">{title}</div></h1>
          <p className="card-description">{description}</p>
        </div>
      </div>
    </div>

  )
}
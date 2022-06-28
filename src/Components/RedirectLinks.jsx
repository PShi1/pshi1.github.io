import React from "react";

export const RedirectLinks = ({prevCaseStudy, prevCaseStudyText, nextCaseStudy, nextCaseStudyText, currentPage}) => {
  return (
    <div className="redirect-links">
      {/*<div className="single-redirects">*/}
      {/*  <div className="left clickable" onClick={() => {*/}
      {/*    window.location.assign("/#/" + prevCaseStudy)*/}
      {/*  }}>*/}
      {/*    <img src={RightArrowRedirectLink} alt="" className="reversed-arrow arrow"/>*/}
      {/*    <p className="single-redirect-font">{prevCaseStudyText}</p>*/}
      {/*  </div>*/}
      {/*  <div className="right clickable" onClick={() => {*/}
      {/*    window.location.assign("/#/" + nextCaseStudy)*/}
      {/*  }}>*/}
      {/*    <p className="single-redirect-font">{nextCaseStudyText}</p>*/}
      {/*    <img src={RightArrowRedirectLink} alt="" className="proper-arrow arrow"/>*/}
      {/*  </div>*/}
      {/*</div>*/}
      <h3 className="looking-for-more margin-bottom-24px">Looking for more? 💭</h3>

      <div className="multiple-redirects">
        <p onClick={() => window.location.assign("/#/")} className="redirect-font underline-effect clickable">All</p>

        <p className="redirect-font spacing">/</p>

        {currentPage === "access" ?
          <p onClick={() => window.location.assign("/#/access")}
             className="redirect-font constant-underline">Access</p>
          :
          <p onClick={() => window.location.assign("/#/access")}
             className="redirect-font underline-effect clickable">Access</p>}

        <p className="redirect-font spacing">/</p>

        {currentPage === "finwell" ?
          <p onClick={() => window.location.assign("/#/finwell")}
             className="redirect-font constant-underline">FinWell</p>
          :
          <p onClick={() => window.location.assign("/#/finwell")}
             className="redirect-font underline-effect clickable">FinWell</p>}

        {/*{currentPage === "sponsorcircle" ? <></> :*/}
        {/*  <p className="redirect-font spacing">/</p>}*/}
        {/*{currentPage === "sponsorcircle" ? <></> :*/}
        {/*  <p onClick={() => window.location.assign("/#/sponsorcircle")} className="redirect-font underline-effect clickable">Sponsor*/}
        {/*    Circle</p>}*/}

        <p className="redirect-font spacing">/</p>

        {currentPage === "aprio" ?
          <p onClick={() => window.location.assign("/#/aprio")}
             className="redirect-font constant-underline">Aprio</p>
          :
          <p onClick={() => window.location.assign("/#/aprio")}
             className="redirect-font underline-effect clickable">Aprio</p>}
      </div>

    </div>
  )
}
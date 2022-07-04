import React from "react";

export const RedirectLinks = ({currentPage, category}) => {
  if (category === "caseStudies") {
    return (
      <div className="redirect-links">
        <h3 className="looking-for-more margin-bottom-24px">Looking for more? 🔎 </h3>

        <div className="multiple-redirects">
          <p onClick={() => window.location.assign("/#/")} className="redirect-font underline-effect clickable">All</p>

          <p className="redirect-font spacing">/</p>

          {currentPage === "aprio" ?
            <p onClick={() => window.location.assign("/#/aprio")}
               className="redirect-font constant-underline">Aprio</p>
            :
            <p onClick={() => window.location.assign("/#/aprio")}
               className="redirect-font underline-effect clickable">Aprio</p>}

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

        </div>
      </div>
    )
  } else if (category === "playgroundPages") {
    return (
      <div className="redirect-links">
        <h3 className="looking-for-more margin-bottom-24px">Looking for more? 💭</h3>

        <div className="multiple-redirects">
          <p onClick={() => window.location.assign("/#/playground")}
             className="redirect-font underline-effect clickable">All</p>

          <p className="redirect-font spacing">/</p>

          {currentPage === "handmadeOnlineStore" ?
            <p onClick={() => window.location.assign("/#/handmadeonlinestore")}
               className="redirect-font constant-underline">HandMade Online Store</p>
            :
            <p onClick={() => window.location.assign("/#/handmadeonlinestore")}
               className="redirect-font underline-effect clickable">HandMade Online Store</p>}

          <p className="redirect-font spacing">/</p>

          {currentPage === "featuredDrawings" ?
            <p onClick={() => window.location.assign("/#/featuredDrawings")}
               className="redirect-font constant-underline">Featured Drawings</p>
            :
            <p onClick={() => window.location.assign("/#/featuredDrawings")}
               className="redirect-font underline-effect clickable">Featured Drawings</p>}

          <p className="redirect-font spacing">/</p>

          {currentPage === "recharge" ?
            <p onClick={() => window.location.assign("/#/recharge")}
               className="redirect-font constant-underline">Recharge</p>
            :
            <p onClick={() => window.location.assign("/#/recharge")}
               className="redirect-font underline-effect clickable">Recharge</p>}

          <p className="redirect-font spacing">/</p>

          {currentPage === "solearn" ?
            <p onClick={() => window.location.assign("/#/solearn")}
               className="redirect-font constant-underline">Solearn</p>
            :
            <p onClick={() => window.location.assign("/#/solearn")}
               className="redirect-font underline-effect clickable">Solearn</p>}

          <p className="redirect-font spacing">/</p>

          {currentPage === "bookbuds" ?
            <p onClick={() => window.location.assign("/#/bookbuds")}
               className="redirect-font constant-underline">BookBuds</p>
            :
            <p onClick={() => window.location.assign("/#/bookbuds")}
               className="redirect-font underline-effect clickable">BookBuds</p>}

        </div>
      </div>
    )
  } else {
    return (<></>);
  }
}
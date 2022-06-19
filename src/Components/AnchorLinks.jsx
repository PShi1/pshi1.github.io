import React, {useEffect} from "react";
import "../Stylesheets/AnchorLinks.scss";

const AnchorLinks = ({callerType}) => {
  let anchorAreaGroups = [];
  let subAnchorAreaGroups = [];


  useEffect(() => {
    // Anchor areas will be defined as component wrappers in case study pages.
    // Ex. 01 - Ideation, 02 - Creation etc. from Access
    let anchorAreaArray = document.getElementsByClassName("anchor-area");
    let subAnchorAreaArray = document.getElementsByClassName("sub-anchor-area")
    let h3group = document.getElementsByClassName("h3-group");
    let h4group = document.getElementsByClassName("subgroup");

    // Generate the groups from the anchor areas first
    for (const element of anchorAreaArray) {
      anchorAreaGroups.push(element.id);
    }

    for (const element of subAnchorAreaArray) {
      subAnchorAreaGroups.push(element.id);
    }

    let finalImageDiv = document.getElementById("final-image");
    let headerImageDiv = document.getElementById("header-image");
    let anchorDiv = document.getElementById("anchor-links-wrapper");
    let impactRegion = document.getElementById("impact-area");

    window.addEventListener("scroll", () => {
      // This is hardcoded
      let impactTop = Number.MAX_SAFE_INTEGER;
      let impactBottom = Number.MIN_SAFE_INTEGER;
      if (impactRegion) {
        impactTop = impactRegion.offsetTop;
        impactBottom = impactTop + impactRegion.offsetHeight;
      }

      let header = document.getElementById("nav-wrapper");
      let headerHeight = 0;
      if (header) {
        headerHeight = header.offsetHeight;
      }
      // 11 is to offset the 10 from below
      let offset = headerHeight + 11;

      for (let i = 0; i < h3group.length; i++) {
        let el = h3group[i];

        if (window.scrollY + el.offsetTop + offset * 1.85 >= impactTop && window.scrollY + el.offsetTop + offset * 1.85 <= impactBottom) {
          if (!el.classList.contains("invert")) {
            el.classList.add("invert");
          }
        } else {
          if (el.classList.contains("invert")) {
            el.classList.remove("invert");
          }
        }
      }

      for (let i = 0; i < h4group.length; i++) {
        let el = h4group[i];
        if (window.scrollY + el.offsetTop + offset * 1.85 >= impactTop && window.scrollY + el.offsetTop + offset * 1.85 <= impactBottom) {
          if (!el.classList.contains("invert")) {
            el.classList.add("invert");
          }
        } else {
          if (el.classList.contains("invert")) {
            el.classList.remove("invert");
          }
        }
      }

      // For the main anchor areas first
      for (let i = anchorAreaArray.length - 1; i >= 0; i--) {
        let area = anchorAreaArray[i];
        if (window.scrollY + offset >= area.offsetTop) {
          activateOnlyThisAnchorLink(area.id);
          break;
        }
      }

      // For the sub anchor areas next
      for (let i = subAnchorAreaArray.length - 1; i >= 0; i--) {
        let area = subAnchorAreaArray[i];
        if (window.scrollY + offset >= area.offsetTop) {
          activateOnlyThisAnchorSubLink(area.id);
          break;
        }
      }

      // To hide upon hitting bottom box
      if (anchorDiv) {
        let bottomY = window.scrollY + anchorDiv.offsetTop + anchorDiv.offsetHeight + offset;
        let topOfBottomBoxY = finalImageDiv.offsetTop;

        let topY = window.scrollY + anchorDiv.offsetTop - offset;
        let BottomOfTopBoxY = headerImageDiv.offsetTop + headerImageDiv.offsetHeight;

        if (finalImageDiv && bottomY >= topOfBottomBoxY) {
          if (!anchorDiv.classList.contains("hidden")) {
            console.log("Bottom Image Hidden")
            anchorDiv.classList.add("hidden");
          }
        } else if (headerImageDiv && topY <= BottomOfTopBoxY) {
          if (!anchorDiv.classList.contains("hidden")) {
            anchorDiv.classList.add("hidden");
            console.log("Top Image Hidden")
          }
        } else {
          if (anchorDiv.classList.contains("hidden")) {
            anchorDiv.classList.remove("hidden");
            console.log("Removing Hidden")
          }
        }
      }
    })
  }, [])

  const activateOnlyThisAnchorLink = (id) => {
    for (const group of anchorAreaGroups) {
      activateAnchorLinkHelper(id, group);
    }
  }

  const activateOnlyThisAnchorSubLink = (id) => {
    for (const group of subAnchorAreaGroups) {
      activateAnchorLinkHelper(id, group);
    }
  }

  const activateAnchorLinkHelper = (id, group) => {
    if (id === group) {
      let el = document.getElementById(id + "-anchor");
      if (el && !el.classList.contains("active")) {
        el.classList.add("active");
      }
    } else {
      let el = document.getElementById(group + "-anchor");
      if (el && el.classList.contains("active")) {
        el.classList.remove("active");
      }
    }
  }

  const findAndGoToLinkedTitle = (titleId) => {
    let el = document.getElementById(titleId);
    let header = document.getElementById("nav-wrapper");
    let headerHeight = 0;
    if (header) {
      headerHeight = header.offsetHeight;
    }
    if (el) {
      // If we have to scroll up, put the header offset in, so that the text aligns with the bottom of the header.
      // The extra 10 is for a small visual gap between the header and the element
      if (el.offsetTop <= window.scrollY) {
        window.scrollTo({
          left: 0,
          top: Math.max(0, el.offsetTop - headerHeight - 10),
          behavior: "smooth"
        });
      }
        // If we have to scroll down, don't put the header offset in
      // The extra 10 is for a small visual gap between the header and the element
      else {
        window.scrollTo({
          left: 0,
          top: Math.max(0, el.offsetTop - 10),
          behavior: "smooth"
        });
      }
    }
  }

  // Just need to change up what is returned based on the page we're on, ie. the titles and subtitles
  if (callerType === "access") {
    return (
      <div className="anchor-links-wrapper hidden" id="anchor-links-wrapper">
        <div className="anchor-links-background"/>
        <div className="group" id="overview-area-anchor">
          <h3 className="h3-group" onClick={() => {
            findAndGoToLinkedTitle("overview-title")
          }}>Overview</h3>
          <h4 id="context-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("context-title")
          }}>Context</h4>
          <h4 id="what-did-i-do-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("what-did-i-do-title")
          }}>What Did I Do?</h4>
          <h4 id="project-timeline-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("project-timeline-title")
          }}>Project Timeline</h4>
          <h4 id="project-type-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("project-type-title")
          }}>Project Type</h4>
          <h4 id="project-tools-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("project-tools-title")
          }}>Project Tools</h4>
        </div>

        <div className="group" id="ideation-area-anchor">
          <h3 className="h3-group" onClick={() => {
            findAndGoToLinkedTitle("ideation-title")
          }}><strong className="blue-text">01</strong> - Ideation</h3>
          <h4 id="what-are-users-experiencing-title-anchor" className="subgroup active" onClick={() => {
            findAndGoToLinkedTitle("what-are-users-experiencing-title")
          }}>What Are Users Experiencing?</h4>
          <h4 id="stakeholder-buy-in-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("stakeholder-buy-in-title")
          }}>Stakeholder Buy In</h4>
          <h4 id="our-north-star-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("our-north-star-title")
          }}>Our North Star</h4>
        </div>

        <div className="group" id="creation-area-anchor">
          <h3 className="h3-group" onClick={() => {
            findAndGoToLinkedTitle("creation-title")
          }}><strong className="blue-text">02</strong> - Creation</h3>
          <h4 id="foundation-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("foundation-title")
          }}>Foundation</h4>
          <h4 id="components-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("components-title")
          }}>Components</h4>
          <h4 id="patterns-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("patterns-title")
          }}>Patterns</h4>
        </div>

        <div className="group" id="iteration-area-anchor">
          <h3 className="h3-group" onClick={() => {
            findAndGoToLinkedTitle("iteration-title")
          }}><strong className="blue-text">03</strong> - Iteration</h3>
          <h4 id="what-i-learned-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("what-i-learned-title")
          }}>What I Learned</h4>
          <h4 id="iterations-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("iterations-title")
          }}>Iterations</h4>
        </div>

        <div className="group" id="organization-area-anchor">
          <h3 className="h3-group" onClick={() => {
            findAndGoToLinkedTitle("organization-title")
          }}><strong className="blue-text">04</strong> - Organization</h3>
          <h4 id="file-organization-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("file-organization-title")
          }}>File Organization</h4>
          <h4 id="onboarding-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("onboarding-title")
          }}>Onboarding</h4>
        </div>

        <div className="group" id="impact-area-anchor">
          <h3 className="h3-group" onClick={() => {
            findAndGoToLinkedTitle("impact-title")
          }}><strong className="blue-text">05</strong> - Impact</h3>
          <h4 id="next-steps-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("next-steps-title")
          }}>Next Steps</h4>
        </div>

        <div className="group" id="reflection-area-anchor">
          <h3 className="h3-group" onClick={() => {
            findAndGoToLinkedTitle("reflection-title")
          }}><strong className="blue-text">06</strong> - Reflection</h3>
          {/*<h4 id="it-takes-two-to-tango-title-anchor" className="subgroup" onClick={() => {*/}
          {/*  findAndGoToLinkedTitle("it-takes-two-to-tango-title")*/}
          {/*}}>It Takes Two (And A Lot More) To Tango</h4>*/}
          {/*<h4 id="rome-wasn't-built-in-one-day-title-anchor" className="subgroup" onClick={() => {*/}
          {/*  findAndGoToLinkedTitle("rome-wasn't-built-in-one-day-title")*/}
          {/*}}>Rome Wasn't Built In One Day</h4>*/}
        </div>
      </div>
    );
  } else if (callerType === "aprio") {
    return (
      <div className="anchor-links-wrapper hidden" id="anchor-links-wrapper">
        <div className="anchor-links-background"/>
        <div className="group" id="overview-area-anchor">
          <h3 className="h3-group" onClick={() => {
            findAndGoToLinkedTitle("overview-title")
          }}>Overview</h3>
          <h4 id="context-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("context-title")
          }}>Context</h4>
          <h4 id="what-did-i-do-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("what-did-i-do-title")
          }}>What Did I Do?</h4>
          <h4 id="project-timeline-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("project-timeline-title")
          }}>Project Timeline</h4>
          <h4 id="project-type-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("project-type-title")
          }}>Project Type</h4>
          <h4 id="project-tools-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("project-tools-title")
          }}>Project Tools</h4>
          <h4 id="privacy-disclaimer-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("privacy-disclaimer-title")
          }}>Privacy Disclaimer</h4>
        </div>

        <div className="group" id="process-area-anchor">
          <h3 className="h3-group" onClick={() => {
            findAndGoToLinkedTitle("process-title")
          }}><strong className="orange-text">01</strong> - Process</h3>
          <h4 id="introduction-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("introduction-title")
          }}>Introduction</h4>
          <h4 id="what-are-users-experiencing-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("what-are-users-experiencing-title")
          }}>What Are Users Experiencing?</h4>
          <h4 id="my-north-star-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("my-north-star-title")
          }}>My North Star</h4>
        </div>

        <div className="group" id="design-mockups-area-anchor">
          <h3 className="h3-group" onClick={() => {
            findAndGoToLinkedTitle("design-mockups-title")
          }}><strong className="orange-text">02</strong> - Design Mockups</h3>
          <h4 id="dashboard-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("dashboard-title")
          }}>Dashboard</h4>
          <h4 id="client-profiles-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("client-profiles-title")
          }}>Client Profiles</h4>
          <h4 id="list-of-users-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("list-of-users-title")
          }}>List of Users</h4>
          <h4 id="task-page-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("task-page-title")
          }}>Task Page</h4>
          <h4 id="user-flow-task-assignment-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("user-flow-task-assignment-title")
          }}>User Flow: Task Assignment</h4>
          <h4 id="user-flow-global-search-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("user-flow-global-search-title")
          }}>User Flow: Global Search</h4>
        </div>

        <div className="group" id="impact-area-anchor">
          <h3 className="h3-group" onClick={() => {
            findAndGoToLinkedTitle("impact-title")
          }}><strong className="orange-text">03</strong> - Impact</h3>
        </div>

        <div className="group" id="reflection-area-anchor">
          <h3 className="h3-group" onClick={() => {
            findAndGoToLinkedTitle("reflection-title")
          }}><strong className="orange-text">04</strong> - Reflection</h3>
          <h4 id="always-validate-user-assumptions-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("always-validate-user-assumptions-title")
          }}>Always Validate User Assumptions</h4>
          <h4 id="advocate-for-ux-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("advocate-for-ux-title")
          }}>Advocate for UX</h4>
          <h4 id="next-steps-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("next-steps-title")
          }}>Next Steps</h4>
        </div>
      </div>
    );
  } else {
    return (<></>);
  }

}

export default AnchorLinks;
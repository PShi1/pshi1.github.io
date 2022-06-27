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
      let header = document.getElementById("nav-wrapper");
      let headerHeight = 0;
      if (header) {
        headerHeight = header.offsetHeight;
      }
      // 11 is to offset the 10 from below
      let offset = headerHeight + 11;

      // This is hardcoded
      if (impactRegion) {
        let impactTop = Number.MAX_SAFE_INTEGER;
        let impactBottom = Number.MIN_SAFE_INTEGER;
        if (impactRegion) {
          impactTop = impactRegion.offsetTop;
          impactBottom = impactTop + impactRegion.offsetHeight;
        }

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

        if (finalImageDiv && bottomY >= topOfBottomBoxY + offset) {
          if (!anchorDiv.classList.contains("hidden")) {
            anchorDiv.classList.add("hidden");
          }
        } else if (headerImageDiv && topY <= BottomOfTopBoxY) {
          if (!anchorDiv.classList.contains("hidden")) {
            anchorDiv.classList.add("hidden");
          }
        } else {
          if (anchorDiv.classList.contains("hidden")) {
            anchorDiv.classList.remove("hidden");
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
      <div className="anchor-links-wrapper hidden access-colours" id="anchor-links-wrapper">
        <div className="anchor-links-background"/>
        <div className="group" id="overview-area-anchor">
          <h3 className="h3-group" onClick={() => {
            findAndGoToLinkedTitle("overview-title")
          }}>Overview</h3>
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
          }}>Stakeholder Buy-In</h4>
          <h4 id="our-north-star-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("our-north-star-title")
          }}>Our North Star</h4>
          <h4 id="preliminary-research-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("preliminary-research-title")
          }}>Preliminary Research</h4>
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
          <h4 id="process-documentation-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("process-documentation-title")
          }}>Process Documentation</h4>
        </div>

        <div className="group" id="iteration-area-anchor">
          <h3 className="h3-group" onClick={() => {
            findAndGoToLinkedTitle("iteration-title")
          }}><strong className="blue-text">03</strong> - Iteration</h3>
          <h4 id="user-feedback-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("user-feedback-title")
          }}>User Feedback</h4>
          <h4 id="design-considerations-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("design-considerations-title")
          }}>Design Considerations</h4>
          <h4 id="iterations-for-developers-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("iterations-for-developers-title")
          }}>Iterations for Developers</h4>
          <h4 id="iterations-for-product-managers-owners-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("iterations-for-product-managers-owners-title")
          }}>Iterations for Product Managers/Owners</h4>
          <h4 id="iterations-for-marketers-designers-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("iterations-for-marketers-designers-title")
          }}>Iterations for Marketers/Designers</h4>
          <h4 id="iterations-for-new-hires-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("iterations-for-new-hires-title")
          }}>Iterations for New Hires</h4>
        </div>

        <div className="group" id="impact-area-anchor">
          <h3 className="h3-group" onClick={() => {
            findAndGoToLinkedTitle("impact-title")
          }}><strong className="blue-text">04</strong> - Impact</h3>
        </div>

        <div className="group" id="reflection-area-anchor">
          <h3 className="h3-group" onClick={() => {
            findAndGoToLinkedTitle("reflection-title")
          }}><strong className="blue-text">05</strong> - Reflection</h3>
          <h4 id="what-did-i-learn-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("what-did-i-learn-title")
          }}>What Did I Learn?</h4>
          <h4 id="next-steps-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("next-steps-title")
          }}>Next Steps</h4>
        </div>
      </div>
    );
  } else if (callerType === "aprio") {
    return (
      <div className="anchor-links-wrapper hidden aprio-colours" id="anchor-links-wrapper">
        <div className="anchor-links-background"/>
        <div className="group" id="overview-area-anchor">
          <h3 className="h3-group" onClick={() => {
            findAndGoToLinkedTitle("overview-title")
          }}>Overview</h3>
        </div>

        <div className="group" id="process-area-anchor">
          <h3 className="h3-group" onClick={() => {
            findAndGoToLinkedTitle("process-title")
          }}><strong className="orange-text">01</strong> - Process</h3>
        </div>

        <div className="group" id="ideation-area-anchor">
          <h3 className="h3-group" onClick={() => {
            findAndGoToLinkedTitle("ideation-title")
          }}><strong className="orange-text">02</strong> - Ideation</h3>
          <h4 id="what-are-users-experiencing-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("what-are-users-experiencing-title")
          }}>What Are Users Experiencing?</h4>
          <h4 id="design-north-star-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("design-north-star-title")
          }}>Design North Star</h4>
        </div>

        <div className="group" id="design-mockups-area-anchor">
          <h3 className="h3-group" onClick={() => {
            findAndGoToLinkedTitle("design-mockups-title")
          }}><strong className="orange-text">03</strong> - Design Mockups</h3>
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
          }}><strong className="orange-text">04</strong> - Impact</h3>
        </div>

        <div className="group" id="reflection-area-anchor">
          <h3 className="h3-group" onClick={() => {
            findAndGoToLinkedTitle("reflection-title")
          }}><strong className="orange-text">05</strong> - Reflection</h3>
          <h4 id="what-did-i-learn-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("what-did-i-learn-title")
          }}>What Did I Learn?</h4>
          <h4 id="next-steps-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("next-steps-title")
          }}>Next Steps</h4>
        </div>
      </div>
    );
  } else if (callerType === "finwell") {
    return (
      <div className="anchor-links-wrapper hidden finwell-colours" id="anchor-links-wrapper">
        <div className="anchor-links-background"/>
        <div className="group" id="overview-area-anchor">
          <h3 className="h3-group" onClick={() => {
            findAndGoToLinkedTitle("overview-title")
          }}>Overview</h3>
        </div>

        <div className="group" id="process-area-anchor">
          <h3 className="h3-group" onClick={() => {
            findAndGoToLinkedTitle("process-title")
          }}><strong className="yellow-text">01</strong> - Process</h3>
        </div>

        <div className="group" id="final-solution-area-anchor">
          <h3 className="h3-group" onClick={() => {
            findAndGoToLinkedTitle("final-solution-title")
          }}><strong className="yellow-text">02</strong> - Final Solution</h3>
        </div>

        <div className="group" id="discovery-area-anchor">
          <h3 className="h3-group" onClick={() => {
            findAndGoToLinkedTitle("discovery-title")
          }}><strong className="yellow-text">03</strong> - Discovery</h3>
          <h4 id="secondary-research-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("secondary-research-title")
          }}>Secondary Research</h4>
          <h4 id="competitive-analysis-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("competitive-analysis-title")
          }}>Competitive Analysis</h4>
          <h4 id="primary-research-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("primary-research-title")
          }}>Primary Research</h4>
          <h4 id="user-interviews-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("user-interviews-title")
          }}>User Interviews</h4>
          <h4 id="affinity-map-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("affinity-map-title")
          }}>Affinity Map</h4>
          <h4 id="user-personas-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("user-personas-title")
          }}>User Personas</h4>
          <h4 id="empathy-maps-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("empathy-maps-title")
          }}>Empathy Maps</h4>
          <h4 id="problem-statement-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("problem-statement-title")
          }}>Problem Statement</h4>
          <h4 id="design-considerations-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("design-considerations-title")
          }}>Design Considerations</h4>
        </div>

        <div className="group" id="design-area-anchor">
          <h3 className="h3-group" onClick={() => {
            findAndGoToLinkedTitle("design-title")
          }}><strong className="yellow-text">04</strong> - Design</h3>
          <h4 id="ideation-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("ideation-title")
          }}>Ideation</h4>
          <h4 id="guerilla-testing-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("guerilla-testing-title")
          }}>Guerilla Testing</h4>
          <h4 id="testing-feedback-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("testing-feedback-title")
          }}>Testing Feedback</h4>
          <h4 id="user-stories-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("user-stories-title")
          }}>User Stories</h4>
          <h4 id="information-architecture-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("information-architecture-title")
          }}>Information Architecture</h4>
          <h4 id="sketching-wireframes-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("sketching-wireframes-title")
          }}>Sketches / Wireframes</h4>
          <h4 id="style-guide-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("style-guide-title")
          }}>Style Guide / Design System</h4>
          <h4 id="user-flows-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("user-flows-title")
          }}>User Flows</h4>
        </div>

        <div className="group" id="testing-and-iteration-area-anchor">
          <h3 className="h3-group" onClick={() => {
            findAndGoToLinkedTitle("testing-and-iteration-title")
          }}><strong className="yellow-text">05</strong> - Testing & Iteration</h3>
          <h4 id="first-usability-test-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("first-usability-test-title")
          }}>First Usability Test</h4>
          <h4 id="iterations-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("iterations-title")
          }}>Iterations</h4>
          <h4 id="second-usability-test-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("second-usability-test-title")
          }}>Second Usability Test</h4>
        </div>

        <div className="group" id="final-prototype-area-anchor">
          <h3 className="h3-group" onClick={() => {
            findAndGoToLinkedTitle("final-prototype-title")
          }}><strong className="yellow-text">06</strong> - Final Prototype</h3>
        </div>

        <div className="group" id="reflection-area-anchor">
          <h3 className="h3-group" onClick={() => {
            findAndGoToLinkedTitle("reflection-title")
          }}><strong className="yellow-text">07</strong> - Reflection</h3>
          <h4 id="concept-feedback-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("concept-feedback-title")
          }}>Concept Feedback</h4>
          <h4 id="what-did-i-learn-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("what-did-i-learn-title")
          }}>What Did I Learn?</h4>
          <h4 id="future-considerations-title-anchor" className="subgroup" onClick={() => {
            findAndGoToLinkedTitle("future-considerations-title")
          }}>Future Considerations</h4>
        </div>
      </div>
    );
  } else {
    return (<></>);
  }

}

export default AnchorLinks;
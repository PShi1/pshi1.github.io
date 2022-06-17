import React, {useEffect} from "react";
import "../Stylesheets/AnchorLinks.scss";

const AnchorLinks = () => {
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

    window.addEventListener("scroll", () => {
      // This is hardcoded
      let impactRegion = document.getElementById("impact-area");
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

        if (window.scrollY + el.offsetTop + offset * 2.25 >= impactTop && window.scrollY + el.offsetTop + offset * 2.25 <= impactBottom) {
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
        if (window.scrollY + el.offsetTop + offset * 2.25 >= impactTop && window.scrollY + el.offsetTop + offset * 2.25 <= impactBottom) {
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

  return (
    <div className="anchor-links-wrapper inactive" id="anchor-links-wrapper">
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
        <h4 id="it-takes-two-to-tango-title-anchor" className="subgroup" onClick={() => {
          findAndGoToLinkedTitle("it-takes-two-to-tango-title")
        }}>It Takes Two (And A Lot More) To Tango</h4>
        <h4 id="rome-wasn't-built-in-one-day-title-anchor" className="subgroup" onClick={() => {
          findAndGoToLinkedTitle("rome-wasn't-built-in-one-day-title")
        }}>Rome Wasn't Built In One Day</h4>
      </div>
    </div>
  );
}

export default AnchorLinks;
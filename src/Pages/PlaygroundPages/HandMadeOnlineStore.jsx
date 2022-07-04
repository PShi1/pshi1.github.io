import React, {useEffect} from 'react';
import {hideLoading, setPageToLightMode, setupScrollBar, turnAllMenuStatesOff} from "../../App";
import "../../Stylesheets/PlaygroundStylesheets/HandMadeOnlineStore.scss"
import HandMadeHeaderImage from '../../Assets/HandMadePageAssets/HandMadeHeaderImage.png';
import AnchorLinks from "../../Components/AnchorLinks";
import {RedirectLinks} from "../../Components/RedirectLinks";
import Image1 from '../../Assets/HandMadePageAssets/Image1.png'
import Image2 from '../../Assets/HandMadePageAssets/Image2.png'
import Image3 from '../../Assets/HandMadePageAssets/Image3.png'
import Image4 from '../../Assets/HandMadePageAssets/Image4.png'
import Image5 from '../../Assets/HandMadePageAssets/Image5.png'
import Image6 from '../../Assets/HandMadePageAssets/Image6.png'
import Image7 from '../../Assets/HandMadePageAssets/Image7.png'
import Image8 from '../../Assets/HandMadePageAssets/Image8.png'
import Image9 from '../../Assets/HandMadePageAssets/Image9.png'
import Image10 from '../../Assets/HandMadePageAssets/Image10.png'
import {LoadingPage} from "../../Components/LoadingPage";

export const HandMadeOnlineStore = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    setPageToLightMode();
    document.title = "Emma Li | HandMade Online Store";
    setupScrollBar("#FFE789");
    turnAllMenuStatesOff();
    highlight();
    hideLoading();
  }, []);

  /**
   * Highlights words that are preset, when they're visible on the screen
   */
  const highlight = () => {
    let topOffset = 100;
    let scroll = window.scrollY + topOffset;
    let innerHeight = window.innerHeight - topOffset;
    let screenBottom = innerHeight;

    let elements = document.getElementsByClassName("highlight");

    window.addEventListener("scroll", () => {
      scroll = window.scrollY;
      screenBottom = scroll + innerHeight;

      for (const element of elements) {
        // If element is on the screen ...
        if (element.offsetTop < screenBottom - topOffset && element.offsetTop > scroll + topOffset) {
          if (!element.classList.contains("active")) {
            element.classList.add("active");
          }
        } else if (element.offsetTop > screenBottom + 150 || element.offsetTop < scroll - 150) {
          if (element.classList.contains("active")) {
            element.classList.remove("active");
          }
        }
      }
    })
  }

  const scrollToOverview = () => {
    let el = document.getElementById("overview-area");
    if (el) {
      el.scrollIntoView({behavior: "smooth"});
    }
  }

  const redirectToInstagram = () => {
    window.open("https://www.instagram.com/ttqq_handmade/", "_blank");
  }

  return (
    <div className="handmade-online-store-page">
      <LoadingPage/>
      <AnchorLinks callerType="handmade"/>
      <img className="image margin-bottom-40px anchor-area clickable" src={HandMadeHeaderImage} alt=""
           id="header-image"
           onClick={() => {
             scrollToOverview()
           }}/>

      <div className="overview anchor-area margin-bottom-160px" id="overview-area">
        <h3 className="cs-title mid-align-title margin-bottom-40px" id="overview-title">Overview</h3>

        <h2 className="cs-manrope margin-bottom-80px">
          I co-founded a successful e-commerce store that sells custom designed phone cases.</h2>

        <h3 className="cs-subtitle margin-bottom-12px" id="where-did-the-name-come-from-title">Where did the name
          “HandMade” come from?</h3>
        <p className="cs-body margin-bottom-0px">Our store sells custom-designed 2D and 3D phone cases made by hand.
          Customers come with a vision of what they want on their case, and we make it into reality. The final product
          is entirely handmade and one of a kind based on feedback from the customer.</p>

        <div className="link-to-prototype-container">
          <div className="prototype-button clickable" id="link-to-store" onClick={() => {
            redirectToInstagram();
          }}>
            <p className="cs-body"/>
          </div>
        </div>
      </div>

      <div className="phone-case-photos anchor-area" id="phone-case-photos-area">
        <h3 className="cs-title mid-align-title margin-bottom-40px" id="phone-case-photos-title">Phone Case Photos</h3>
        <div className="photos-container">
          <img src={Image1} alt=""/>
          <img src={Image2} alt=""/>
          <img src={Image3} alt=""/>
          <img src={Image4} alt=""/>
          <img src={Image5} alt=""/>
          <img src={Image6} alt=""/>
          <img src={Image7} alt=""/>
          <img src={Image8} alt=""/>
          <img src={Image9} alt=""/>
          <img src={Image10} alt=""/>
        </div>
      </div>

      <RedirectLinks currentPage="handmadeOnlineStore" category="playgroundPages"/>
    </div>
  )
}
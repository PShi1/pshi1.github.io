import React, {useEffect} from 'react';
import {setPageToLightMode, setupScrollBar, turnAllMenuStatesOff} from "../../App";
import "../../Stylesheets/PlaygroundStylesheets/FeaturedDrawings.scss"
import AnchorLinks from "../../Components/AnchorLinks";
import {RedirectLinks} from "../../Components/RedirectLinks";
import Image1 from '../../Assets/FeaturedDrawingsPageAssets/Image1.png'
import Image2 from '../../Assets/FeaturedDrawingsPageAssets/Image2.png'
import Image3 from '../../Assets/FeaturedDrawingsPageAssets/Image3.png'
import Image4 from '../../Assets/FeaturedDrawingsPageAssets/Image4.png'
import Image5 from '../../Assets/FeaturedDrawingsPageAssets/Image5.png'
import Image6 from '../../Assets/FeaturedDrawingsPageAssets/Image6.png'
import Image7 from '../../Assets/FeaturedDrawingsPageAssets/Image7.png'
import Image8 from '../../Assets/FeaturedDrawingsPageAssets/Image8.png'

export const FeaturedDrawings = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    setPageToLightMode();
    document.title = "Emma Li | Featured Drawings";
    setupScrollBar("#0FAB99");
    turnAllMenuStatesOff();
    highlight();
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

  return (
    <div className="featured-drawings-page">
      <AnchorLinks callerType="handmade"/>

      <div className="drawing-area anchor-area" id="featured-drawings-gallery">
        <p className="cs-manrope-150-line-height margin-bottom-160px">This page is a collection of a few of my featured
          drawings. Most were
          drawn on a tablet using Procreate. People, coffee, and sunshine inspire me. ☀️</p>
        <div className="photos-container">
          <img src={Image1} alt=""/>
          <img src={Image2} alt=""/>
          <img src={Image3} alt=""/>
          <img src={Image4} alt=""/>
          <img src={Image5} alt=""/>
          <img src={Image6} alt=""/>
          <img src={Image7} alt=""/>
          <img src={Image8} alt=""/>
        </div>
      </div>

      <RedirectLinks currentPage="featuredDrawings" category="playgroundPages"/>
    </div>
  )
}
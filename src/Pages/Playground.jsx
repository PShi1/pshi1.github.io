import React, {useEffect, useState} from 'react';
import {fadeInIntro, hideScrollBar, setPageToDarkMode,} from "../App";
import {Link} from "react-router-dom";
import SolearnCard from '../Assets/PlaygroundPageAssets/SolearnCard.png';
import SolearnCardActive from '../Assets/PlaygroundPageAssets/SolearnCardActive.png';
import HandMadeOnlineStoreCard from '../Assets/PlaygroundPageAssets/HandMadeOnlineStoreCard.png';
import HandMadeOnlineStoreCardActive from '../Assets/PlaygroundPageAssets/HandMadeOnlineStoreCardActive.png';
import FeaturedDrawingsCard from '../Assets/PlaygroundPageAssets/FeaturedDrawingsCard.png';
import FeaturedDrawingsCardActive from '../Assets/PlaygroundPageAssets/FeaturedDrawingsCardActive.png';
import BookBudsCard from '../Assets/PlaygroundPageAssets/BookBudsCard.png';
import BookBudsCardActive from '../Assets/PlaygroundPageAssets/BookBudsCardActive.png';
import RechargeCard from '../Assets/PlaygroundPageAssets/RechargeCard.png';
import RechargeCardActive from '../Assets/PlaygroundPageAssets/RechargeCardActive.png';
import Flower from '../Assets/PlaygroundPageAssets/Flower.svg';
import "../Stylesheets/Playground.scss";

export const Playground = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // Mark current header link as active
    if (!document.getElementById("play-menu-item").classList.contains("active")) {
      document.getElementById("play-menu-item").classList.add("active");
    }
    if (document.getElementById("work-menu-item").classList.contains("active")) {
      document.getElementById("work-menu-item").classList.remove("active");
    }
    if (document.getElementById("about-menu-item").classList.contains("active")) {
      document.getElementById("about-menu-item").classList.remove("active");
    }

    fadeInIntro();
    fadeInOnScroll();
    setPageToDarkMode();
    document.title = "Emma Li | Play";
    hideScrollBar();
  }, []);

  const tags = ["all-tag", "ux-design-tag", "illustration-tag", "branding-tag"];
  const [currentTag, setCurrentTag] = useState("all-tag");
  const allCards = ["solearn-card", "handmade-online-store-card", "featured-drawings-card", "bookbuds-card", "recharge-card"];
  const uxDesignCards = ["solearn-card", "bookbuds-card", "recharge-card"];
  const illustrationCards = ["featured-drawings-card", "solearn-card"];
  const collaborationCards = ["recharge-card", "solearn-card", "bookbuds-card"];
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    if (firstRender) return;
    for (const cardName of allCards) {
      let el = document.getElementById(cardName);
      if (el.classList.contains("play-animation")) {
        el.classList.remove("play-animation");
      }
    }
    let cardsArrayUsed;

    if (currentTag === "all-tag") {
      for (const cardName of allCards) {
        let el = document.getElementById(cardName);
        if (!el.classList.contains("active")) {
          el.classList.add("active");
        }
      }
      cardsArrayUsed = allCards;
    } else {
      if (currentTag === "ux-design-tag") {
        cardsArrayUsed = uxDesignCards;
      } else if (currentTag === "illustration-tag") {
        cardsArrayUsed = illustrationCards;
      } else if (currentTag === "collaboration-tag") {
        cardsArrayUsed = collaborationCards;
      } else {
        cardsArrayUsed = allCards;
      }
    }

    setTimeout(() => {
      const filteredArray = allCards.filter(value => !cardsArrayUsed.includes(value));
      for (const cardName of filteredArray) {
        let el = document.getElementById(cardName);
        if (el.classList.contains("active")) {
          el.classList.remove("active");
        }
      }
      let delay = 0;

      cardsArrayUsed = shuffleArray(cardsArrayUsed);
      for (const cardName of cardsArrayUsed) {
        let el = document.getElementById(cardName);
        if (el && !el.classList.contains("active")) {
          el.classList.add("active");
        }
        setTimeout(() => {
          el?.classList?.add("play-animation")
        }, delay);
        delay += 100;

      }
    }, 25);
  }, [currentTag]);

  const scrollToCaseStudies = () => {
    let element = document.getElementById("case-study-tags-container");
    if (element) {
      element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
  }

  const handleTagClick = (tagID) => {
    setCurrentTag(tagID);
    for (const tag of tags) {
      if (tagID === tag) {
        document.getElementById(tag).classList.add("active");
      } else {
        if (document.getElementById(tag).classList.contains("active")) {
          document.getElementById(tag).classList.remove("active");
        }
      }
    }
  }

  /**
   * Adds a listener to the page's scroll, that will fade in (activate) objects as they appear on the screen
   */
  const fadeInOnScroll = () => {
    let elements1 = document.getElementsByClassName("appear-on-scroll-1");
    let firstCard = document.getElementById("handmade-online-store-card");
    let scroll = window.scrollY;
    let innerHeight = window.innerHeight;

    window.addEventListener("scroll", () => {
      scroll = window.scrollY;

      for (const element of elements1) {
        let pos = element.offsetTop;
        if (scroll + innerHeight / 1.3 >= pos) {
          element.classList.add("play-animation");
        }
      }
    })

    let solearnCard = document.getElementById("solearn-card");
    let handMadeOnlineStoreCard = document.getElementById("handmade-online-store-card");
    let featuredDrawingsCard = document.getElementById("featured-drawings-card");
    let bookbudsCard = document.getElementById("bookbuds-card");
    let rechargeCard = document.getElementById("recharge-card")

    window.addEventListener("scroll", () => {
      scroll = window.scrollY;

      let pos = firstCard.offsetTop;
      if (scroll + innerHeight / 1.1 >= pos) {
        setFirstRender(false);
        setTimeout(function () {
          handMadeOnlineStoreCard.classList.add("play-animation");
        }, 300);

        setTimeout(function () {
          featuredDrawingsCard.classList.add("play-animation");
        }, 400);

        setTimeout(function () {
          solearnCard.classList.add("play-animation");
        }, 550);

        setTimeout(function () {
          bookbudsCard.classList.add("play-animation");
        }, 700);

        setTimeout(function () {
          rechargeCard.classList.add("play-animation");
        }, 900);
      }
    })
  }

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  return (
    <div className="background">
      <div className="playground-page">
        <div className="header-outer-div">
          <div className="row">
            <div className="header-area intro-fade">
              <div className="columns">
                <div className="left-column">
                  <h1>Life is not all about work.</h1>
                </div>
                <div className="right-column">
                  <img src={Flower} alt=""/>
                </div>
              </div>
            </div>

          </div>


          <div className="typewriter-wrapper-div margin-bottom-120px">
            <div className="intro-fade">
              <p className="b0" id="spacer">Here are some projects I did purely for fun. 🤗
              </p>
            </div>
          </div>

          <div className="margin-bottom-160px intro-fade scroll-down" id="scroll-down"
               onClick={() => scrollToCaseStudies()}>
            <span id="scroll-title" className="manrope-24px-300weight">
              Explore The Playground
            </span>
          </div>
        </div>

        <div className="case-study-tags-container appear-on-scroll-1" id="case-study-tags-container">
          <div className="tag-container active invert" id="all-tag" onClick={() => handleTagClick("all-tag")}>
            <p className="cs-body invert-target"/>
          </div>

          <div className="tag-container invert" id="ux-design-tag" onClick={() => handleTagClick("ux-design-tag")}>
            <p className="cs-body invert-target"/>
          </div>

          <div className="tag-container invert" id="illustration-tag"
               onClick={() => handleTagClick("illustration-tag")}>
            <p className="cs-body invert-target"/>
          </div>

          <div className="tag-container invert" id="collaboration-tag"
               onClick={() => handleTagClick("collaboration-tag")}>
            <p className="cs-body invert-target"/>
          </div>
        </div>

        <div id="case-studies-container">
          <div className="minus-margin-sides">
            <Link className="cards-div active appear-on-scroll-2" to="/handMadeOnlineStore"
                  id="handmade-online-store-card">
              <img className="first-active" src={HandMadeOnlineStoreCard} alt=""/>
              <img className="first-inactive" src={HandMadeOnlineStoreCardActive} alt=""/>
            </Link>

            <Link className="cards-div active appear-on-scroll-2" to="/featuredDrawings" id="featured-drawings-card">
              <img className="first-active" src={FeaturedDrawingsCard} alt=""/>
              <img className="first-inactive" src={FeaturedDrawingsCardActive} alt=""/>
            </Link>

            <Link className="cards-div active appear-on-scroll-2" to="/recharge" id="recharge-card">
              <img className="first-active" src={RechargeCard} alt=""/>
              <img className="first-inactive" src={RechargeCardActive} alt=""/>
            </Link>

            <Link className="cards-div active appear-on-scroll-2" to="/solearn" id="solearn-card">
              <img className="first-active" src={SolearnCard} alt=""/>
              <img className="first-inactive" src={SolearnCardActive} alt=""/>
            </Link>

            <Link className="cards-div active appear-on-scroll-2" to="/bookbuds" id="bookbuds-card">
              <img className="first-active" src={BookBudsCard} alt=""/>
              <img className="first-inactive" src={BookBudsCardActive} alt=""/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
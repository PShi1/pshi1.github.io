import React, {useEffect, useState} from 'react';
import '../Stylesheets/Work.scss';
import AccessCard from "../Assets/WorkPageImages/AccessCard.png";
import AccessCardActive from '../Assets/WorkPageImages/AccessCardActive.png';
import AprioCard from '../Assets/WorkPageImages/AprioCard.png';
import AprioCardActive from '../Assets/WorkPageImages/AprioCardActive.png'
import FinWellCard from '../Assets/WorkPageImages/FinWellCard.png';
import FinWellCardActive from '../Assets/WorkPageImages/FinWellCardActive.png';
import {fadeInIntro, hideScrollBar, setPageToDarkMode,} from "../App";
import {Link} from "react-router-dom";

/**
 * Page component for the main page
 */
export const Work = () => {
  const tags = ["all-tag", "web-tag", "mobile-tag", "prototyping-tag", "design-system-tag"];
  const [currentTag, setCurrentTag] = useState("all-tag");
  const allCards = ["access-card", "aprio-card", "finwell-card"];
  const webCards = ["access-card", "sponsorcircle-card", "aprio-card", "pivot-card"];
  const mobileCards = ["finwell-card", "sponsorcircle-card", "knowbie-card"];
  const prototypingCards = ["access-card", "finwell-card", "knowbie-card", "pivot-card"];
  const designSystemCards = ["access-card", "finwell-card", "pivot-card"];
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    let elements = document.getElementsByClassName('typewrite');
    for (let i = 0; i < elements.length; i++) {
      let toRotate = "[\"a life long learner.\", \"a driven entrepreneur.\",\n" +
        "              \"a curious researcher.\", \"an accessibility advocate.\", \"an imaginative problem solver.\", \"a tech enthusiast.\"]";
      let period = "2000"
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    let css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);

    // End of Typewriter
    fadeInIntro();
    fadeInOnScroll();

    // Set header active state
    // Mark current header link as active
    if (!document.getElementById("work-menu-item").classList.contains("active")) {
      document.getElementById("work-menu-item").classList.add("active");
    }
    if (document.getElementById("play-menu-item").classList.contains("active")) {
      document.getElementById("play-menu-item").classList.remove("active");
    }
    if (document.getElementById("about-menu-item").classList.contains("active")) {
      document.getElementById("about-menu-item").classList.remove("active");
    }

    setPageToDarkMode();
    document.title = "Emma Li's Portfolio";
    hideScrollBar();
  }, []);

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
      if (currentTag === "web-tag") {
        cardsArrayUsed = webCards;
      } else if (currentTag === "mobile-tag") {
        cardsArrayUsed = mobileCards;
      } else if (currentTag === "prototyping-tag") {
        cardsArrayUsed = prototypingCards;
      } else if (currentTag === "design-system-tag") {
        cardsArrayUsed = designSystemCards;
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

  // Start of Typewriter - https://codepen.io/hi-im-si/pen/ALgzqo
  let TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };

  TxtType.prototype.tick = function() {
    let i = this.loopNum % this.toRotate.length;
    let fullTxt = this.toRotate[i];
    let delta = 100; // This sets the normal time per char
    if (this.isDeleting) {
      delta = 50; // This sets the time per char deletion
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap b0 colour-gradient">'+this.txt+'</span>';

    let that = this;

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function() {
      that.tick();
    }, delta);
  };

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
    let firstCard = document.getElementById("access-card");
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

    let accessCard = document.getElementById("access-card");
    // let sponsorcircleCard = document.getElementById("sponsorcircle-card");
    // let knowbieCard = document.getElementById("knowbie-card");
    let aprioCard = document.getElementById("aprio-card");
    // let pivotCard = document.getElementById("pivot-card");
    let finwellCard = document.getElementById("finwell-card");

    window.addEventListener("scroll", () => {
      scroll = window.scrollY;

      let pos = firstCard.offsetTop;
      if (scroll + innerHeight / 1.1 >= pos) {
        setFirstRender(false);
        setTimeout(function () {
          aprioCard.classList.add("play-animation");
        }, 300);

        setTimeout(function () {
          // knowbieCard.classList.add("play-animation");
          accessCard.classList.add("play-animation");
        }, 400);

        setTimeout(function () {
          finwellCard.classList.add("play-animation");
          // sponsorcircleCard.classList.add("play-animation");
          // pivotCard.classList.add("play-animation");
        }, 700);
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
      <div className="work-page">
        <div className="header-outer-div">
          <div className="row">
            <div className="header-area intro-fade">
              <h1>Hey there! -- I'm Emma.</h1>
            </div>
          </div>

          <div className="typewriter-wrapper-div margin-bottom-120px">
            <div className="intro-fade">
              <p className="b0">A coffee-infused ☕ <strong className="off-white-strong-font-style">Product
                Designer</strong> based in
                <strong className="off-white-strong-font-style"> Vancouver.</strong> 🍁</p>
              <p className="b0 margin-bottom-80px"><strong
                className="off-white-strong-font-style">Currently building 0 -> 1 products </strong>@ Moken Agency.
              </p>
              <h4 className="wordCarousel b0">
                <span className="b0 off-white-text">I'm also </span>
                <div>
                  <ul className="flip7">
                    <li className="b0"><strong className="colour-gradient">a tech enthusiast.</strong> 💻</li>
                    <li className="b0"><strong className="colour-gradient">an engaging story teller.</strong> 🐉</li>
                    <li className="b0"><strong className="colour-gradient">an imaginative problem solver. </strong> 💡
                    </li>
                    <li className="b0"><strong className="colour-gradient">an accessibility advocate.</strong> 🔮</li>
                    <li className="b0"><strong className="colour-gradient">a curious researcher.</strong> 🔎</li>
                    <li className="b0"><strong className="colour-gradient">a driven entrepreneur.</strong> 🦄</li>
                    <li className="b0"><strong className="colour-gradient">a life long learner.</strong> 📚</li>
                  </ul>
                </div>
              </h4>
            </div>
          </div>

          <div className="margin-bottom-160px intro-fade scroll-down" id="scroll-down"
               onClick={() => scrollToCaseStudies()}>
            <span id="scroll-title" className="manrope-24px-300weight">
              Explore Selected Case Studies
            </span>
          </div>
        </div>

        <div className="case-study-tags-container appear-on-scroll-1" id="case-study-tags-container">
          <div className="tag-container active invert" id="all-tag" onClick={() => handleTagClick("all-tag")}>
            <p className="cs-body invert-target"/>
          </div>

          <div className="tag-container invert" id="web-tag" onClick={() => handleTagClick("web-tag")}>
            <p className="cs-body invert-target"/>
          </div>

          <div className="tag-container invert" id="mobile-tag" onClick={() => handleTagClick("mobile-tag")}>
            <p className="cs-body invert-target"/>
          </div>

          <div className="tag-container invert" id="design-system-tag"
               onClick={() => handleTagClick("design-system-tag")}>
            <p className="cs-body invert-target"/>
          </div>

          <div className="tag-container invert" id="prototyping-tag" onClick={() => handleTagClick("prototyping-tag")}>
            <p className="cs-body invert-target"/>
          </div>
        </div>

        <div id="case-studies-container">
          <div className="minus-margin-sides">
            <Link className="cards-div active appear-on-scroll-2" to="/aprio" id="aprio-card">
              <img className="first-active" src={AprioCard} alt=""/>
              <img className="first-inactive" src={AprioCardActive} alt=""/>
            </Link>
            <Link className="cards-div active appear-on-scroll-2" to="/access" id="access-card">
              <img className="first-active" src={AccessCard} alt=""/>
              <img className="first-inactive" src={AccessCardActive} alt=""/>
            </Link>
            <Link className="cards-div active appear-on-scroll-2" to="/finwell" id="finwell-card">
              <img className="first-active" src={FinWellCard} alt=""/>
              <img className="first-inactive" src={FinWellCardActive} alt=""/>
            </Link>

            {/*<Link className="cards-div active appear-on-scroll-2" to="/sponsorcircle" id="sponsorcircle-card">*/}
            {/*  <img className="first-active" src={SponsorCircleCard} alt=""/>*/}
            {/*  <img className="first-inactive" src={SponsorCircleCardActive} alt=""/>*/}
            {/*</Link>*/}

            {/*<Link className="cards-div active appear-on-scroll-2" to="/knowbie" id="knowbie-card">*/}
            {/*  <img className="first-active" src={KnowbieCard} alt=""/>*/}
            {/*  <img className="first-inactive" src={KnowbieCardActive} alt=""/>*/}
            {/*</Link>*/}

            {/*<Link className="cards-div active appear-on-scroll-2" to="/pivot" id="pivot-card">*/}
            {/*  <img className="first-active" src={PivotCard} alt=""/>*/}
            {/*  <img className="first-inactive" src={PivotCardActive} alt=""/>*/}
            {/*</Link>*/}
          </div>


        </div>
      </div>
    </div>
  )
}
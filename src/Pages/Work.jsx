import React, {useEffect, useState} from 'react';
import '../Stylesheets/Work.scss';
import AccessCard from "../Assets/WorkPageImages/AccessCard.png";
import AccessCardActive from '../Assets/WorkPageImages/AccessCardActive.png';
import SponsorCircleCard from '../Assets/WorkPageImages/SponsorCircleCard.png';
import SponsorCircleCardActive from '../Assets/WorkPageImages/SponsorCircleCardActive.png'
import KnowbieCard from '../Assets/WorkPageImages/KnowbieCard.png';
import KnowbieCardActive from '../Assets/WorkPageImages/KnowbieCardActive.png'
import AprioCard from '../Assets/WorkPageImages/AprioCard.png';
import AprioCardActive from '../Assets/WorkPageImages/AprioCardActive.png'
import PivotCard from '../Assets/WorkPageImages/PivotCard.png';
import PivotCardActive from '../Assets/WorkPageImages/PivotCardActive.png'
import FinWellCard from '../Assets/WorkPageImages/FinWellCard.png';
import FinWellCardActive from '../Assets/WorkPageImages/FinWellCardActive.png';
import {
  fadeInIntro, hideScrollBar,
  setPageToDarkMode,
} from "../App";

/**
 * Page component for the main page
 */
export const Work = () => {
  const tags = ["all-tag", "web-tag", "mobile-tag", "prototyping-tag", "design-system-tag"];
  const [currentTag, setCurrentTag] = useState("all-tag");
  const allCards = ["access-card", "sponsorcircle-card", "knowbie-card", "aprio-card", "pivot-card", "finwell-card"];
  const webCards = ["access-card", "sponsorcircle-card", "knowbie-card", "aprio-card", "pivot-card"];
  const mobileCards = ["sponsorcircle-card", "knowbie-card", "finwell-card"];
  const prototypingCards = ["knowbie-card", "pivot-card", "finwell-card"];
  const designSystemCards = ["access-card", "pivot-card", "finwell-card"];
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    window.scrollTo(0,0);

    let elements = document.getElementsByClassName('typewrite');
    for (let i = 0; i < elements.length; i++) {
      let toRotate = "[\"a life long learner.\", \"an engaging story teller.\", \"a driven entrepreneur.\",\n" +
        "              \"a curious researcher.\", \"an imaginative problem solver.\", \"a technology enthusiast.\", \"an accessibility advocate.\"]";
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
      document.getElementById("sponsorcircle-card").style.marginLeft = "1%";
      document.getElementById("knowbie-card").style.marginLeft = "1%";
      document.getElementById("knowbie-card").style.marginRight = "0%";
      cardsArrayUsed = allCards;
    } else {
      if (currentTag === "mobile-tag" || currentTag === "prototyping-tag") {
        document.getElementById("knowbie-card").style.marginRight = "1%";
        if (currentTag === "mobile-tag") {
          document.getElementById("sponsorcircle-card").style.marginLeft = "0%";
          document.getElementById("knowbie-card").style.marginLeft = "1%";

        } else {
          document.getElementById("sponsorcircle-card").style.marginLeft = "1%";
          document.getElementById("knowbie-card").style.marginLeft = "0%";
        }
      } else {
        document.getElementById("knowbie-card").style.marginRight = "0%";
        document.getElementById("knowbie-card").style.marginLeft = "1%";
        document.getElementById("sponsorcircle-card").style.marginLeft = "1%";
      }

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
        if (!el.classList.contains("active")) {
          el.classList.add("active");
        }
        setTimeout(() => {el.classList.add("play-animation")}, delay);
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
    let sponsorcircleCard = document.getElementById("sponsorcircle-card");
    let knowbieCard = document.getElementById("knowbie-card");
    let aprioCard = document.getElementById("aprio-card");
    let pivotCard = document.getElementById("pivot-card");
    let finwellCard = document.getElementById("finwell-card");

    window.addEventListener("scroll", () => {
      scroll = window.scrollY;

      let pos = firstCard.offsetTop;
      if (scroll + innerHeight / 1.1 >= pos) {
        setFirstRender(false);
        setTimeout(function() {
          accessCard.classList.add("play-animation");
          aprioCard.classList.add("play-animation");
        }, 300);

        setTimeout(function() {
          knowbieCard.classList.add("play-animation");
          finwellCard.classList.add("play-animation");
        }, 400);

        setTimeout(function() {
          sponsorcircleCard.classList.add("play-animation");
          pivotCard.classList.add("play-animation");
        }, 700);
      }
    })
  }

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
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
            <div className="header-area">
              <h1 className="intro-fade">Hey there! I'm Emma --</h1>
            </div>
          </div>

          <div>
            <div className="intro-fade">
              <p className="b0">A coffee-infused <u className="underline">Product Designer</u> based in Vancouver 🍁, currently building digital products @ Moken Agency.</p>
            </div>
          </div>

          <div className="typewriter-wrapper-div margin-bottom-160px">
            <div className="intro-fade">
              <p className="typewriter-prefix b0">I'm also</p>
              <div className="typewrite"/>
            </div>
          </div>

          <div className="margin-bottom-60px intro-fade scroll-down" id="scroll-down" onClick={() => scrollToCaseStudies()}>
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

          <div className="tag-container invert" id="design-system-tag" onClick={() => handleTagClick("design-system-tag")}>
            <p className="cs-body invert-target"/>
          </div>

          <div className="tag-container invert" id="prototyping-tag" onClick={() => handleTagClick("prototyping-tag")}>
            <p className="cs-body invert-target"/>
          </div>
        </div>

        <div id="case-studies-container">
          <a className="cards-div active appear-on-scroll-2" href="/access" id="access-card">
            <img className="first-active" src={AccessCard} alt=""/>
            <img className="first-inactive" src={AccessCardActive} alt=""/>
          </a>

          <a className="cards-div active appear-on-scroll-2" href="/sponsorcircle" id="sponsorcircle-card">
            <img className="first-active" src={SponsorCircleCard} alt=""/>
            <img className="first-inactive" src={SponsorCircleCardActive} alt=""/>
          </a>

          <a className="cards-div active appear-on-scroll-2" href="/knowbie" id="knowbie-card">
            <img className="first-active" src={KnowbieCard} alt=""/>
            <img className="first-inactive" src={KnowbieCardActive} alt=""/>
          </a>

          <a className="cards-div active appear-on-scroll-2" href="/aprio" id="aprio-card">
            <img className="first-active" src={AprioCard} alt=""/>
            <img className="first-inactive" src={AprioCardActive} alt=""/>
          </a>

          <a className="cards-div active appear-on-scroll-2" href="/pivot" id="pivot-card">
            <img className="first-active" src={PivotCard} alt=""/>
            <img className="first-inactive" src={PivotCardActive} alt=""/>
          </a>

          <a className="cards-div active appear-on-scroll-2" href="/finwell" id="finwell-card">
            <img className="first-active" src={FinWellCard} alt=""/>
            <img className="first-inactive" src={FinWellCardActive} alt=""/>
          </a>

        </div>
      </div>
    </div>
  )
}
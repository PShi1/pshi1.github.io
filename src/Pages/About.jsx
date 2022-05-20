import React, {useEffect} from 'react';
import '../Stylesheets/About.scss';
import Stars from '../Assets/AboutPageImages/Stars.svg';
import Selfie from '../Assets/Selfie.png'
import DownArrow from '../Assets/arrow-down.svg';
import UpArrow from '../Assets/arrow-up.svg';
import Books from "../Assets/Books.png"
import {
  copyEmail,
  fadeInIntro, hideScrollBar,
  setPageToDarkMode
} from "../App";

export const About = () => {
  useEffect(() => {
    window.scrollTo(0,0);

    // Mark current header link as active
    if (!document.getElementById("about-menu-item").classList.contains("active")) {
      document.getElementById("about-menu-item").classList.add("active");
    }
    // if (document.getElementById("play-menu-item").classList.contains("active")) {
    //   document.getElementById("play-menu-item").classList.remove("active");
    // }
    if (document.getElementById("work-menu-item").classList.contains("active")) {
      document.getElementById("work-menu-item").classList.remove("active");
    }

    setPageToDarkMode();
    fadeInIntro();
    fadeInOnScroll();
    hideScrollBar();

    document.title = "Emma Li | About";
  }, []);

  const scrollToCaseStudies = () => {
    let element = document.getElementById("more-about-me");
    if (element) {
      element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
  }

  const handleCollapsible = (e) => {
    let id = e.target.id;
    let element = document.getElementById(id + "-item");
    let collapsibleHeader = document.getElementById(id);
    let arrow = document.getElementById(id + "-arrow");
    if (!element.classList.contains("active")) {
      if (element.classList.contains("closed")) {
        element.classList.replace("closed", "active");
        collapsibleHeader.classList.replace("closed", "active");
      } else {
        element.classList.add("active");
        collapsibleHeader.classList.add("active");
      }
      element.style.height = element.scrollHeight + "px";
      arrow.src = UpArrow;
    } else {
      element.classList.replace("active", "closed");
      collapsibleHeader.classList.replace("active", "closed");
      element.style.height = "0";
      arrow.src = DownArrow;
    }
  }

  /**
   * Adds a listener to the page's scroll, that will fade in (activate) objects as they appear on the screen
   */
  const fadeInOnScroll = () => {
    let elements1 = document.getElementsByClassName("appear-on-scroll");
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
  }

  return (
    <div className="background">
      <div className="about-page">
        <div className="intro">
          <div className="columns margin-bottom-80px">
            <div className="left-column">
              <h1 className="intro-fade">Passionate.</h1>
              <h1 className="intro-fade">Creative.</h1>
              <h1 className="intro-fade">Empathetic.</h1>
              <p className="b0 intro-fade" id="subtitle-text">Or at least <strong className="colour-gradient">that's what my mom tells me.</strong> 😎</p>
            </div>

            <div className="right-column intro-fade">
              <img src={Stars} alt=""/>
            </div>
          </div>
          <div className="intro-fade scroll-down intro-fade" id="scroll-down" onClick={() => scrollToCaseStudies()}>
            <span id="scroll-title" className="manrope-24px-300weight">
              Curious Yet?
            </span>
          </div>
        </div>

        <div className="more-about-me appear-on-scroll" id="more-about-me">
          <div className="left-column">
            <img src={Selfie} alt=""/>
          </div>
          <div className="right-column">
            <p className="b3">
              I’m currently a <strong className="off-white-strong-font-style underline">Product Designer at Moken Agency</strong>,
              leading the entire design process of various tech products. In my career, I’m fortunate to have <strong className="off-white-strong-font-style">experienced
              product agencies and in-house, working with both enterprise and consumer-facing companies alike</strong>. My expertise at the moment
              lies in <strong className="off-white-strong-font-style">zero-to-one</strong> projects involving a high degree of product thinking
              and visual design.
            </p>

            <p className="b3">
              My design journey started a long time ago, when I was colour coding my school notes and creating custom graphics for my
              high school PowerPoint presentations. I graduated with a <strong className="off-white-strong-font-style">Bachelor of Business Administration from the University of Toronto</strong>.
              Immediately after graduation, I decided business was not the right path for me and set out to find something I was genuinely passionate about.
            </p>

            <p className="b3">
              Visual storytelling, mixed with my naturally curious personality, eventually became more than just a passion
              when I discovered the field of design: the industry that allows me
              to <strong className="off-white-strong-font-style">collaborate with talented individuals to continuously grow and learn new skill sets</strong>,
              from how to write lines of code to thinking from new and unique perspectives.
            </p>
          </div>
        </div>

        <div className="all-collapsibles-region appear-on-scroll">
          <div className="collapsibles-region margin-bottom-60px">
            <div className="collapsible-header" id="bit-more-about-me" onClick={(e) => handleCollapsible(e)}>
              <h2>Bit More About Me 😄</h2>
              <img src={DownArrow} alt="" id="bit-more-about-me-arrow"/>
            </div>
            <div className="collapsible-item" id="bit-more-about-me-item">
              <div className="third-columns">
                <p className="b2">My personality:</p>
                <ul>
                  <li><a className="b4 link" href="https://www.16personalities.com/intj-personality" target="_blank" rel="noreferrer">INTJ</a></li>
                  <li><a className="b4 link" href="https://secure.plum.io/en/p/pbIb8cEDth1dJ9exafW4FQ" target="_blank" rel="noreferrer">Plum Profile</a></li>
                  <li><a className="b4 link" href="https://www.enneagraminstitute.com/type-3" target="_blank" rel="noreferrer">Enneagram 3</a></li>
                </ul>
              </div>

              <div className="third-columns" id="second-column">
                <p className="b2">On my bucket list:</p>
                <ul>
                  <li><p className="b4">Be a guest on a podcast</p></li>
                  <li><p className="b4">Publish a book</p></li>
                  <li><p className="b4">Visit every Disney park</p></li>
                  <li><p className="b4">Trek to Machu Pichu</p></li>
                </ul>
              </div>

              <div className="third-columns">
                <p className="b2">Favourite products:</p>
                <ul>
                  <li><a className="b4 link" href="https://www.discord.com" target="_blank" rel="noreferrer">Discord</a></li>
                  <li><a className="b4 link" href="https://www.shopify.ca" target="_blank" rel="noreferrer">Shopify</a></li>
                  <li><a className="b4 link" href="https://www.wealthsimple.com/en-ca" target="_blank" rel="noreferrer">Wealthsimple</a></li>
                  <li><a className="b4 link" href="https://www.adplist.org" target="_blank" rel="noreferrer">ADPList</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="collapsibles-region margin-bottom-60px">
            <div className="collapsible-header" id="after-hours" onClick={(e) => handleCollapsible(e)}>
              <h2>After Hours 🌙</h2>
              <img src={DownArrow} alt="" id="after-hours-arrow"/>
            </div>
            <div className="collapsible-item" id="after-hours-item">
              <ul id="after-hours-ul">
                <li className="b4">I run my own online store selling 3D phone cases, you can find my work <a className="b4 link" href="https://www.instagram.com/ttqq_handmade/?hl=en" target="_blank" rel="noreferrer">here.</a></li>
                <li className="b4">I'm a huge foodie, and my favourite dish is Pho.</li>
                <li className="b4">I get a lot of enjoyment from video games like League or Overwatch.</li>
                <li className="b4">I'm currently learning how to play the guitar, one YouTube tutorial at a time.</li>
              </ul>
            </div>
          </div>

          <div className="collapsibles-region margin-bottom-60px">
            <div className="collapsible-header" id="on-my-bookshelf" onClick={(e) => handleCollapsible(e)}>
              <h2>On My Bookshelf 📚</h2>
              <img src={DownArrow} alt="" id="on-my-bookshelf-arrow"/>
            </div>
            <div className="collapsible-item" id="on-my-bookshelf-item">
              <div className="books-container">
                <img src={Books} alt=""/>
              </div>
            </div>
          </div>

          <div className="collapsibles-region margin-bottom-60px">
            <div className="collapsible-header" id="for-me-design-is" onClick={(e) => handleCollapsible(e)}>
              <h2>For Me, Design Is 🎨</h2>
              <img src={DownArrow} alt="" id="for-me-design-is-arrow"/>
            </div>
            <div className="collapsible-item" id="for-me-design-is-item">
              <div className="third-columns" id="first-column">
                <p className="b2">Advocating for the user</p>
                <p className="b4">When designing, it’s essential to keep the end-users in mind
                  and always to exercise<strong className="off-white-strong-font-style"> compassion and empathy</strong> when thinking about the problem from their reality.</p>
              </div>

              <div className="third-columns" id="second-column">
                <p className="b2">Never perfect</p>
                <p className="b4">Design does not exist in isolation; it reflects the larger society.
                  <strong className="off-white-strong-font-style"> As society changes, so should design. </strong> Designers should continue learning and iterating their designs
                  rapidly to keep up with the ever-changing world.</p>
              </div>

              <div className="third-columns" id="third-column">
                <p className="b2">Function over form</p>
                <p className="b4">Designers should only add elements that will bring value and always seek to achieve <strong className="off-white-strong-font-style">design purity</strong> through reduction and restraint. </p>
              </div>
            </div>
          </div>

          <div className="collapsibles-region">
            <div className="collapsible-header" id="design-resources" onClick={(e) => handleCollapsible(e)}>
              <h2>Design Resources 🖌️</h2>
              <img src={DownArrow} alt="" id="design-resources-arrow"/>
            </div>
            <div className="collapsible-item" id="design-resources-item">
              <div className="third-columns">
                <p className="b2">Welcoming communities:</p>
                <ul>
                  <li><a className="b4 link" href="https://www.designbuddies.community/" target="_blank" rel="noreferrer">Design Buddies</a></li>
                  <li><a className="b4 link" href="https://www.tcstudio.cc/" target="_blank" rel="noreferrer">The Collective Studio</a></li>
                  <li><a className="b4 link" href="https://designx.community/" target="_blank" rel="noreferrer">DesignX Community</a></li>
                </ul>
              </div>

              <div className="third-columns" id="second-column">
                <p className="b2">Enjoy reading?</p>
                <ul>
                  <li><a className="b4 link" href="https://airtable.com/shr8I9oWiYngztMXC/tblMYuqK7rYdWc9Du/viwgvzxe2l5jNen1G" target="_blank" rel="noreferrer">List of design books</a></li>
                  <li><a className="b4 link" href="https://uxdesign.cc/" target="_blank" rel="noreferrer">UX Collective</a></li>
                  <li><a className="b4 link" href="https://medium.com/curiosity-by-design/the-handy-list-of-human-words-a70f13dde55e" target="_blank" rel="noreferrer">Human Words</a></li>
                </ul>
              </div>

              <div className="third-columns">
                <p className="b2">Podcasts:</p>
                <ul>
                  <li><a className="b4 link" href="https://www.relay.fm/presentable" target="_blank" rel="noreferrer">Presentable</a></li>
                  <li><a className="b4 link" href="https://userdefenders.com/" target="_blank" rel="noreferrer">Empathy as a design superpower</a></li>
                  <li><a className="b4 link" href="https://www.designcuts.com/learning-hub/podcasts/honest-designers/" target="_blank" rel="noreferrer">The honest designers show</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="outro appear-on-scroll">
          <p className="b1-light">This Doesn't Have To Be The End ✌️</p>
          <p className="b1-light">Reach me at <u className="underline hover-cursor" onClick={() => copyEmail("about")}>uxemmali@gmail.com</u> for
            any comments, feedback, or outrageous ideas. </p>
          <p className="cs-body" id="about-email-copied">Email copied!</p>
        </div>
      </div>
    </div>
  )
}
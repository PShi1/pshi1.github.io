import './Stylesheets/App.scss';
import {Header} from "./Components/Header";
import {RoutesComponent} from "./Components/RoutesComponent";
import {Footer} from "./Components/Footer";
import {
  AnimatedCursor, cursorDefaultColor, cursorInnerDefaultOpacity,
  cursorLightModeColor,
  cursorLightModeInnerOpacity,
  cursorLightModeOuterOpacity, cursorOuterDefaultOpacity
} from "./Components/AnimatedCursor";
import {ProgressBar} from "./Components/ProgressBar";
import {useEffect} from "react";
import ArrowUpBlack from './Assets/ArrowUpBlack.svg';
import ArrowUpWhite from './Assets/arrow-up.svg';

function App() {
  useEffect(() => {
    window.addEventListener("scroll", showScrollToTopButton);
  }, [])

  return (
    <div>
      <AnimatedCursor/>
      <Header/>
      <RoutesComponent/>
      <Footer/>
      <a id="back-to-top" onClick={() => {scrollToTop()}}><img id="back-to-top-arrow" src={ArrowUpBlack}/> </a>
      <ProgressBar/>
    </div>
  );
}

// Increase this to make it appear when further up on the page, and decrease to make it appear lower on the page
const ScrollToTopHeightOffset = 1.5;

const showScrollToTopButton = () => {
  let el = document.getElementById("back-to-top");
  if (window.scrollY > window.innerHeight / ScrollToTopHeightOffset) {
    if (!el?.classList?.contains("active")) {
      if (el.classList.contains("hidden")) {
        el.classList.replace("hidden", "active");
      } else {
        el.classList.add("active");
      }
    }
  } else if (window.scrollY < window.innerHeight / ScrollToTopHeightOffset && el.classList.contains("active")) {
    el.classList.replace("active", "hidden")
  }
}

export const setPageToLightMode = () => {
  // Change header and footer to light mode if needed
  if (!document.getElementById("nav-wrapper").classList.contains("light-mode")) {
    document.getElementById("nav-wrapper").classList.add("light-mode");
  }

  if (!document.getElementById("footer").classList.contains("light-mode")) {
    document.getElementById("footer").classList.add("light-mode");
  }

  // Set cursor colors
  let innerCursor = document.getElementById("inner-cursor");
  let outerCursor = document.getElementById("outer-cursor");
  if (innerCursor) {
    innerCursor.style.backgroundColor = `rgba(${cursorLightModeColor + "," + cursorLightModeInnerOpacity})`;
  }
  if (outerCursor) {
    outerCursor.style.backgroundColor = `rgba(${cursorLightModeColor + "," + cursorLightModeOuterOpacity})`;
  }

  // Set scroll to top color and arrow colour
  let backToTop = document.getElementById("back-to-top");
  if (backToTop) {
    backToTop.style.backgroundColor = "rgb(0, 0, 0)";
  }
  let backToTopArrow = document.getElementById("back-to-top-arrow");
  if (backToTopArrow) {
    backToTopArrow.src = ArrowUpWhite;
  }
}

export const setPageToDarkMode = () => {
  // Reset filters
  if (document.getElementById("nav-wrapper").classList.contains("light-mode")) {
    document.getElementById("nav-wrapper").classList.remove("light-mode");
  }

  if (document.getElementById("footer").classList.contains("light-mode")) {
    document.getElementById("footer").classList.remove("light-mode");
  }

  // Set cursor colors
  let innerCursor = document.getElementById("inner-cursor");
  let outerCursor = document.getElementById("outer-cursor");
  if (innerCursor) {
    innerCursor.style.backgroundColor = `rgba(${cursorDefaultColor + "," + cursorInnerDefaultOpacity})`;
  }
  if (outerCursor) {
    outerCursor.style.backgroundColor = `rgba(${cursorDefaultColor + "," + cursorOuterDefaultOpacity})`;
  }

  // Set scroll to top color and arrow colour
  let backToTop = document.getElementById("back-to-top");
  if (backToTop) {
    backToTop.style.backgroundColor = "rgb(250, 250, 250)";
  }
  let backToTopArrow = document.getElementById("back-to-top-arrow");
  if (backToTopArrow) {
    backToTopArrow.src = ArrowUpBlack;
  }
}

/**
 * Fades in the intro part
 */
export const fadeInIntro = () => {
  let elements = document.getElementsByClassName("intro-fade");
  let delay = 0;
  for (const element of elements) {
    setTimeout(function() {
      element.classList.add("active");
    }, delay);
    delay += 700;
  }
}

export const setupScrollBar = (color) => {
  let el = document.getElementById("progress-bar");
  if (el) {
    el.style.display = "initial";
    el.style.backgroundColor = color;
  }
  let elContainer = document.getElementById("progress-container");
  if (elContainer) {
    elContainer.style.display = "table";
  }

  // Set up Progress Bar
  window.addEventListener("scroll", calculateAndSetupScrollAmount);
}

const calculateAndSetupScrollAmount = () => {
  let wintop = window.scrollY;
  let docheight = document.body.scrollHeight;
  let winheight = window.innerHeight;
  let totalScroll = (wintop / (docheight - winheight)) * 100;
  let el = document.getElementById("progress-bar");
  if (el) {
    el.style.width = totalScroll + "%";
  }
}

export const hideScrollBar = () => {
  let bar = document.getElementById("progress-bar");
  if (bar) {
    bar.style.display = "none";
  }
  let container = document.getElementById("progress-container")
  if (container) {
    container.style.display = "none";
  }
  try {
    window.removeEventListener("scroll", calculateAndSetupScrollAmount);
  } catch (e) {
    console.error(e);
  }
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
}

export const turnAllMenuStatesOff = () => {
  if (document.getElementById("work-menu-item").classList.contains("active")) {
    document.getElementById("work-menu-item").classList.remove("active");
  }
  // if (document.getElementById("play-menu-item").classList.contains("active")) {
  //   document.getElementById("play-menu-item").classList.remove("active");
  // }
  if (document.getElementById("about-menu-item").classList.contains("active")) {
    document.getElementById("about-menu-item").classList.remove("active");
  }
}

export const copyEmail = (type) => {
  navigator.clipboard.writeText("uxemmali@gmail.com");
  let el;
  if (type === "footer") {
    el = document.getElementById("email-copied");
  } else if (type === "about") {
    el = document.getElementById("about-email-copied");
  }
  if (el) {
    el.style.opacity = "1";
    setTimeout(() => {
      el.style.opacity = "0";
    }, 2000);
  }

}

export default App;

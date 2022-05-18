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

function App() {
  return (
    <div>
      <AnimatedCursor/>
      <Header/>
      <RoutesComponent/>
      <Footer/>
      <ProgressBar/>
    </div>
  );
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
  document.getElementById("inner-cursor").style.backgroundColor = `rgba(${cursorLightModeColor + "," + cursorLightModeInnerOpacity})`;
  document.getElementById("outer-cursor").style.backgroundColor = `rgba(${cursorLightModeColor + "," + cursorLightModeOuterOpacity})`;
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
  document.getElementById("inner-cursor").style.backgroundColor = `rgba(${cursorDefaultColor + "," + cursorInnerDefaultOpacity})`;
  document.getElementById("outer-cursor").style.backgroundColor = `rgba(${cursorDefaultColor + "," + cursorOuterDefaultOpacity})`;
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

export default App;

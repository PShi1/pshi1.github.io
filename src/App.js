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

function App() {
  return (
    <div>
      <AnimatedCursor/>
      <Header/>
      <RoutesComponent/>
      <Footer/>
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

export default App;

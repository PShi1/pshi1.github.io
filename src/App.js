import './Stylesheets/App.scss';
import {Header} from "./Components/Header";
import {RoutesComponent} from "./Components/RoutesComponent";
import {Footer} from "./Components/Footer";
import {AnimatedCursor} from "./Components/AnimatedCursor";

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

export default App;

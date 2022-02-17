import logo from './logo.svg';
import './Stylesheets/App.scss';
import { BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import { About } from './Pages/About';
import { Playground } from "./Pages/Playground";
import { Work } from "./Pages/Work";
import { FinWell } from "./Pages/FinWell";
import { Pivot } from "./Pages/Pivot";
import { SponsorCircle } from "./Pages/SponsorCircle";
import { Recharge } from "./Pages/Recharge";

function App() {
  return (
    <Router>
      <nav id="navbar" className="">
        <div className="nav-wrapper">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="logo" width="88px" height="40px" align="center"/>
            </a>
          </div>
          <ul id="menu">
            <li><Link to="/"> Work </Link></li>
            <li><Link to="/about"> About </Link></li>
            <li><Link to="/playground"> Playground </Link></li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route exact path="/" element={<Work/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/playground" element={<Playground/>} />
        <Route path="/finwell" element={<FinWell/>} />
        <Route path="/pivot" element={<Pivot/>} />
        <Route path="/sponsorcircle" element={<SponsorCircle/>} />
        <Route path="/recharge" element={<Recharge/>} />
      </Routes>
    </Router>
  );
}

export default App;

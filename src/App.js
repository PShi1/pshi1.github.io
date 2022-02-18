import './Stylesheets/App.scss';
import {Header} from "./Components/Header";
import {RoutesComponent} from "./Components/RoutesComponent";
import {Footer} from "./Components/Footer";

function App() {
  return (
    <div>
      <Header/>
      <RoutesComponent/>
      <Footer/>
    </div>
  );
}

export default App;

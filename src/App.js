import react,{useState} from "react";
import About from './components/About'
import Featured from './components/Featured'
import Footer from './components/Fotter'
import Herosection from './components/Herosection'
import Services from './components/Services'
import Navbar from './components/Navbar';
import Home from "./components/Home";
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
function App() {

  
  return (
    <Router>
    <div>
      <Navbar/>
      <Switch>
        <Route  exact path="/"><Home/></Route>
        <Route exact path="/About"><About/></Route>
        <Route exact path="/Services"><Services/></Route>
        <Route exact path="/Herosection"><Herosection/></Route>
        <Route exact path="/Fotter"><Footer/></Route>
        <Route exact path="/Featured"><Featured/></Route>
      </Switch>


    </div>
    </Router>
  );
}

export default App;

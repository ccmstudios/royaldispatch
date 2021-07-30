import "./assets/css/App.css";
import Navbar from "./components/navbar";
import Home from './pages/home/home'
import About from './pages/about/about'
import Services from './pages/services/services'
import Contact from './pages/contact/contact'


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

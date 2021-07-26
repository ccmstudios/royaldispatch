import React from "react";
import logo from "../royaltylogo.png";
import { Link } from "react-router-dom";
import Home from "../pages/home/home";
import About from "../pages/about/about";
import Services from "../pages/services/services";
import Contact from "../pages/contact/contact";
const Navbar = () => {
  return (
    <div>
      <ul id="navbar">
        <li id="navlogo">
          <img src={logo} className="App-logo" alt="logo" />
        </li>
        <Link to="/" exact path={Home}>
          <li>
            <a href="#">Home</a>
          </li>
        </Link>
        <Link to="/about" exact path={About}>
          <li>
            <a href="#">About</a>
          </li>
        </Link>
        <Link to="/services" exact path={Services}>
          <li>
            <a href="#">Services</a>
          </li>
        </Link>
        <Link to="/contact" exact path={Contact}>
          <li>
            <a href="#">Contact</a>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;

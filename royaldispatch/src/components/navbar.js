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
          <Link to="/" exact path={Home}>
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </li>
        <Link to="/" exact path={Home}>
          <li>
            <a href="/home">Home</a>
          </li>
        </Link>
        <Link to="/about" exact path={About}>
          <li>
            <a href="/about">About</a>
          </li>
        </Link>
        <Link to="/services" exact path={Services}>
          <li>
            <a href="/services">Services</a>
          </li>
        </Link>
        <Link to="/contact" exact path={Contact}>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;

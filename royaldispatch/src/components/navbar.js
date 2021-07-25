import React from "react";
import logo from "../royaltylogo.png";
const Navbar = () => {
  return (
    <div>
      <ul id='navbar'>
        <li id='navlogo'>
          <img src={logo} className="App-logo" alt="logo" />
        </li>
        <li>
          <a href ='#'>Home</a>
        </li>
        <li>
          <a href ='#'>About</a>
        </li>
        <li>
          <a href ='#'>Services</a>
        </li>
        <li>
          <a href ='#'>Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

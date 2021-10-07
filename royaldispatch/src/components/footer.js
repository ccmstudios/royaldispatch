import React from "react";
import logo from "../assets/images/royaltylogo.png";

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <br></br>
        <br></br>
        <h3>Areas Served</h3>
        <h4>
          Servicing the East Coast for all of your Dispatching Needs
        </h4>
        <h3>Royalty Dispatch Services</h3>
        <h3>
          <strong>Phone:</strong>
          (704)923-9587
        </h3>
        <h3>
          <strong>Email:</strong>
          RoyaltyDispatchServices@gmail.com{" "}
        </h3>
        <br></br>
        <img src={logo} className="App-logo" alt="logo" />
        <h5 className="text-muted">
          Website designed by RZN8 Publishing and CCM Studios LLC
        </h5>
      </div>
    );
  }
}

export default Footer;

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
          Servicing the Charlotte Metro Area, Concord, Gastonia, Monroe, Rock
          Hill, Ballantyne, University, Uptown, Matthews, NODA, Statesville,
          Plaza Midwood, Indian Trail, Pineville, Mint Hill
        </h4>
        <h3>Royalty Dispatch Services</h3>
        <h3>
          <strong>Phone:</strong>
          (555) 555-5555
        </h3>
        <h3>
          <strong>Email:</strong>
          RoyaltyDispatchServices@gmail.com{" "}
        </h3>
        <br></br>
        <img src={logo} className="App-logo" alt="logo" />
        <h4 className="text-muted">
          Website designed by RZN8 Publishing and CCM Studios LLC
        </h4>
      </div>
    );
  }
}

export default Footer;

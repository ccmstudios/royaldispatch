import React from "react";
import logo from "../assets/images/royaltylogo.png";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h3>Royalty Dispatch Services</h3>
           <h4>
          Servicing the East Coast for all of your Dispatching Needs
        </h4>
<img src={logo} className="App-logo" alt="logo" />
        <div>
          <Row>
            <Col><h3>Harvey Kimble</h3>
        <h3>
Owner/CEO        </h3>
        <h3>Royalty Dispatch Services</h3>
        <h3>
          <strong>Phone:</strong>
          (704)923-9587
        </h3>
        <h3>
          <strong>Email:</strong>
          Harvey@RoyaltyDispatchServices.com{" "}
        </h3></Col>
            <Col><h3>Andrea Artis</h3>
        <h4>
        Moderator/Account Manager
        </h4>
        <h3>Royalty Dispatch Services</h3>
        <h3>
          <strong>Phone:</strong>
          (832)916-1070
        </h3>
        <h3>
          <strong>Email:</strong>
         Andrea@RoyaltyDispatchServices.com
        </h3></Col>
          </Row>
        </div>
        <br></br>
        <br></br>
  
        <h5 className="text-muted">
          <a href ='www.ccmstudiosinc.com'>
          Website designed by RZN8 Publishing and CCM Studios LLC

          </a>
        </h5>
      </div>
    );
  }
}

export default Footer;

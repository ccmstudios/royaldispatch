import React from "react";
import logo from "../../assets/images/royaltylogo.png";
import Contactform from "../../components/contactForm";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <Contactform />
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default Contact;

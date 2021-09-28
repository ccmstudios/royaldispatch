import React from "react";
import Contactform from "../../components/contactForm";
import Footer from "../../components/footer";

class Contact extends React.Component {
  render() {
    return (
      <div id="contact">
        <Contactform />
        <Footer />
      </div>
    );
  }
}

export default Contact;


import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import "../pages/contact/contact.css";


export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5qvuodx",
        "template_p4r1t7v",
        form.current,
        "user_BVVUKkrloGApCcS1GLPAE"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
          e.target.reset();
          alert("You're form has been submitted and a representative from Royalty Dispatch Services shall be in touch soon!")

  };

  // replace form tomorrow

  return (
      <form
        className="contact-form"
        id="contactform"
        ref={form}
        onSubmit={sendEmail}
      >
        <div id="form">
          <Form.Group as={Col} controlId="formGridPassword" id='label'>
            <Form.Label id='titles'>First Name</Form.Label>
            <Form.Control
              type="name"
              name="first_name"
              placeholder="First_name"
            />
            <Form.Label id='titles'>Last Name</Form.Label>
            <Form.Control
              type="name"
              name="last_name"
              placeholder="Last Name"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail" id='label'>
            <Form.Label id='titles' className="inline">Email</Form.Label>
            <Form.Control
              type="email"
              name="user_email"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword" id='label'>
            <Form.Label id='titles'>Phone</Form.Label>
            <Form.Control
              type="number"
              name="phone_number"
              placeholder="(555)555-5555"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword" id='label'>
            <Form.Label id='titles'>Additional Information(optional)</Form.Label>
            <Form.Control
              id="textbox"
              as="textarea"
              type="textarea"
              placeholder="Optional"
              name="message"
            />
          </Form.Group>
          <Button type="submit" value="send" variant="outline-dark" id='label'>
             SUBMIT {" "}
          </Button>{" "}
        </div>
      </form>
  );
};

export default ContactUs;

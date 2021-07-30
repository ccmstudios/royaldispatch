import React from "react";
import "../pages/contact/contact.css";
// import Form from "react-bootstrap/Form";
// import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";

class Contactform extends React.Component {
  render() {
    return (
      <div id="form">
        {/* <form className="contact-form" id="contactform">
          <input type="hidden" name="contact_number" />
          <div class="form-row">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="name"
                name="first_name"
                placeholder="First_name"
              />
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="name"
                name="last_name"
                placeholder="Last Name"
              />
            </Form.Group>
          </div>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="inline">Email</Form.Label>
              <Form.Control
                type="email"
                name="user_email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="number"
                name="phone_number"
                placeholder="(123)456-7890"
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group inline controlId="formGridAddress1">
              <Form.Label inline>Date Available</Form.Label>
              <Form.Control
                type="date"
                name="due_date"
                placeholder="MM/DD/YYYY"
              />
            </Form.Group>
          </Form.Row>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Additional Information(optional)</Form.Label>
            <Form.Control
              id="textbox"
              as="textarea"
              type="textarea"
              placeholder="Optional"
              name="message"
            />
          </Form.Group>

          <br></br>
          <Button type="submit" value="send" variant="primary">
            Submit
          </Button>
        </form> */}
      </div>
    );
  }
}

export default Contactform;

import React from "react";
import "../pages/contact/contact.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Contactform extends React.Component {
  render() {
    return (
      <div id="form">
        <h1>Contact Us</h1>
        <Form id='contactform'>
          <Form.Group className="mb-3" controlId="formGroupPassword" id='label'>
            <Form.Label id='titles'>First Name</Form.Label>
            <Form.Control type="text" placeholder="First Name" />
            <Form.Label id='titles'>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" />
            <Form.Label id='titles'>Phone Number</Form.Label>
            <Form.Control type="text" placeholder="(555)555-5555" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail"id='label'>
            <Form.Label id='titles'>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
              id='label'
            >
              <Form.Label id='titles'>Comments</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <br></br>
            <Button variant="outline-dark">Submit</Button>{" "}
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default Contactform;

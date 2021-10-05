
// my form beginning

// import React from "react";
// import "../pages/contact/contact.css";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import emailjs from "emailjs-com";

// export default function Contactform() {
//   function sendEmail(e) {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_5qvuodx",
//         "template_p4r1t7v",
//         e.target,
//         "user_BVVUKkrloGApCcS1GLPAE"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//     e.target.reset();
//   }

//   return (
//     <form className="contact-form" onSubmit={sendEmail}>
//       <input type="hidden" name="contact_number" />
//       <div id="form">
//         <h1>Contact Us</h1>
//         <Form id="contactform">
//           <Form.Group className="mb-3" controlId="formGroupPassword" id="label">
//             <Form.Label id="titles">First Name</Form.Label>
//             <Form.Control
//               type="name"
//               name="first_name"
//               placeholder="First Name"
//             />

//             <Form.Label id="titles">Last Name</Form.Label>
//             <Form.Control
//               type="name"
//               name="last_name"
//               placeholder="Last Name"
//             />

//             <Form.Label id="titles">Phone Number</Form.Label>
//             <Form.Control
//               type="number"
//               name="phone_number"
//               placeholder="(555)555-5555"
//             />
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formGroupEmail" id="label">
//             <Form.Label id="titles">Email address</Form.Label>
//             <Form.Control
//               type="email"
//               name="user_email"
//               placeholder="Enter Email"
//             />
//             <Form.Group
//               className="mb-3"
//               controlId="exampleForm.ControlTextarea1"
//               id="label"
//             >
//               <Form.Label id="titles">Message</Form.Label>
//               <Form.Control
//                 id="textbox"
//                 as="textarea"
//                 type="textarea"
//                 placeholder="Optional"
//                 name="message"
//               />
//             </Form.Group>
//             <br></br>
//             <Button type="submit" value="send" variant="outline-dark">
//               Submit
//             </Button>{" "}
//           </Form.Group>
//         </Form>
//       </div>
//     </form>
//   );
// }

//my form end

import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5qvuodx', 'template_p4r1t7v', form.current, 'user_BVVUKkrloGApCcS1GLPAE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

// replace form tomorrow

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className='form' id='contactForm'>

      <label>First</label>
      <input type="text" name="first_name" />
      <label>Last</label>
      <input type="text" name="last_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <Button type="submit" value="send" variant="outline-dark">
//               Submit
//             </Button>{" "}


      </div>
    </form>
  );
};

export default ContactUs;
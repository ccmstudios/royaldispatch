import React from "react";
import logo from "../../assets/images/royaltylogo.png";
import Image from "react-bootstrap/Image";
import harvey from "../../assets/images/harvey.jpg";
import "./about.css";
import Footer from "../../components/footer";

class About extends React.Component {
  render() {
    return (
      <div id="about">
        <Image id="aboutimage" src={harvey} roundedCircle />
        <div>
          <h1>Meet Harvey Kimble</h1>
          <h3>
            Harvey Kimble is the Founder & Owner of Royalty Dispatching
            Services. Starting out as a truck driver himself, he understands the
            importance of organization, reliability & income. He also
            understands that having hometime to spend with family is just as
            important. Here at Royalty Dispatching, not only are the shippers
            important the drivers are as well. Without us freight doesn't move.
            This is why our main goal here at Royalty Dispatching is to provide
            exceptional services for all of our clients. He began the idea after
            being poorly dispatched. It was his daughter's birth that encouraged
            him to start the business and learn more than just being a freight
            mover. If no one else understands, he does because he has been out
            on the road. Harvey has experienced the OTR life, just like you. He
            has learned alot and is still learning how to make life on the road
            easier & smoother for drivers. Royalty Dispatching provides services
            to Owner Operators as well as Small Fleet Owners. If you are looking
            for local or even dedicated lanes, we will do our very best to make
            that happen. We insure that you will always receive the most
            professional services with Royalty Dispatching Services! If you want
            to work with someone as passionate as yourself, or even need someone
            to take the load off of you, give us a call today & let's get you
            rolling!
          </h3>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default About;

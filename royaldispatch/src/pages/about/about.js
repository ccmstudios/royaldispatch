import React from "react";
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
          <h4>
            Harvey Kimble is the Founder & Owner of Royalty Dispatching
            Services. Starting out as a truck driver himself, he understands the
            importance of organization, reliability & income. He also
            understands that having home time to spend with family is essential,
            as he has spent weeks at a time away from his 3-year-old daughter.
            So having time to spend with her & watch her grow is just as
            imperative to him.<br></br><br></br> Harvey came up with the idea to start
            his own dispatching service after being poorly dispatched with other
            companies. It was his daughter's birth that encouraged him to go
            ahead and start the business & learn how to be more than just a
            freight mover. Harvey has experienced OTR life like most others &
            believes that the best dispatchers are the ones who have been on the
            road & truly recognize how it works. He spent his time OTR studying
            every situation to understand what can be done differently in a more
            productive manor from all sides. & he is still learning today.
            Harvey’s goal as a dispatcher is to ensure that all drivers have
            plenty of home time, on top of making top dollar. Spending time on
            the road away from home is already challenging enough. We set out to
            ensure that things are as smooth & convenient as possible.<br></br><br></br>{" "}
            Are shippers important? Yes! But here at Royalty Dispatch Services,
            our top priority are the drivers. Without drivers, freight would not
            move. Therefore, our main goal here at Royalty Dispatching is to
            provide exceptional services for all our clients from the start.
            <br></br>
            <br></br>
            Royalty Dispatching provides services to Owner Operators as well as
            Small Fleet Owners. If you are looking for local or even dedicated
            lanes, we promise to do our very best at making sure your needs &
            request are met. We guarantee that you will always receive the most
            professional services here with us! If you want to work with someone
            as passionate as yourself, or even need someone to take the load
            from you, give us a call today & let Royalty Dispatch Services get
            you rolling!
          </h4>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;

import React from "react";
import Header from "../../components/header";
import Slogan from "../../components/slogan";
import logo2 from "../../assets/images/royallogo2.jpg";
import "../home/home.css";
import Truckfront from "../../assets/images/truckfront.jpg";

import Image from "react-bootstrap/Image";
import Footer from "../../components/footer";

class Home extends React.Component {
  render() {
    return (
      <div id="home">
        <Header />
        <Slogan />
        <div id="homecard" class="card mb-3" style={{ maxwidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={Truckfront}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h1 className="card-title">
                  Royalty Dispatch Services LLC Mission Statement
                </h1>
                <h3 className="card-text">
                  Royalty Dispatch Services, LLC will not only meet our clients
                  and customers expectations, we will exceed them by providing
                  exceptional dispatching services. We ensure that we will go
                  above and beyond for our clients and customers to ensure
                  successful deliveries. How do we accomplish this? Great
                  communication because that is what lasting relationships are
                  built on. Our employees are proficient and professionals in
                  the logistics industry. Royalty Dispatch Services, LLC thrive
                  off of customer satisfaction, which makes our customers and
                  clients top priority. Here at Royalty Dispatch Services, LLC
                  our main focus is Safety, Family Values, Quality of Life and
                  making a difference in the community for our future
                  generations.
                </h3>
              </div>
            </div>
              <br></br>
              <br></br>
              <br></br>
              <div>
                <Image id="homeimage" src={logo2} roundedCircle />
                <br></br>
                <br></br>
                <br></br>

              </div>
              <br></br>
          </div>
        <Footer />
        </div>


      </div>
    );
  }
}

export default Home;

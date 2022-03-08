import React from "react";
import Header from "../../components/header";
import Slogan from "../../components/slogan";
import logo from "../../assets/images/royaltylogo.png";
import "../home/home.css";
import Truckfront from "../../assets/images/truckfront.jpg";
import Facebook from "../../components/facebook";
import Image from "react-bootstrap/Image";
import Footer from "../../components/footer";
import Youtube from "../../components/youtube";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import insta from '../../assets/images/insta.png'

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
                  Our Customers are our #1 Priority and Customer Satisfaction is
                  our #1 Goal. To achieve this, our professional staff will
                  consistently demonstrate the talents, skills and abilities,
                  and the most efficient and effective communications that will
                  result in the on-time and complete deliveries for our
                  customers and clients. Royal Dispatch Services LLC maintains a
                  critical focus on the Safety, Family Values, Quality of Life
                  of its employees, as well as making a difference in the
                  communities we serve today, and for future generations.
                </h3>
              </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div>
              <Image
                id="homeimage"
                src={logo}
                className="App-logo"
                roundedCircle
              />
              <br></br>
              <br></br>
              <br></br>
              <h1 id="slogan2">Our People Make it Happen!</h1>
            </div>
            <br></br>
            <hr></hr>
            <div id="instagram">
              <h1>Instagram</h1>
              <a href='https://www.instagram.com/royalty_dispatch_services/' target="_blank" rel='noreferrer'><img className="socialicons" alt='IG Feeder' src ={insta} /></a>
   
            </div>
            <div>
              <br></br>
              <br></br>
              <br></br>
              <Container>
                <Row>
                  <Col>
                    {" "}
                    <h1>Facebook Page</h1>
                    <Facebook />
                  </Col>
                  <Col>
                    <h1>Youtube Page</h1>
                    <Youtube />
                  </Col>
                </Row>
              </Container>
              <row>
                <col></col>
                <col></col>
              </row>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;

import React from "react";
import Header from "../../components/header";
import logo from "../../assets/images/royaltylogo.png";
import Slogan from "../../components/slogan";
import logo2 from "../../assets/images/royallogo2.jpg";
import "../home/home.css";

class Home extends React.Component {
  render() {
    return (
      <div id='home'>
        <Header />
        <Slogan />
        <div id='homecard' class="card mb-3" style={{ maxwidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={logo2} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id='homecard' class="card mb-3" style={{ maxwidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <img src={logo2} className="img-fluid rounded-start" alt="..." />
            </div>
          </div>
        </div>
        <div id='homecard' class="card mb-3" style={{ maxwidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={logo2} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        This is Home!
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo2} id="logo2" alt="secondary Logo" />
      </div>
    );
  }
}

export default Home;

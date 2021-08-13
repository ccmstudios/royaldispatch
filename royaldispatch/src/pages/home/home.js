import React from "react";
import Header from "../../components/header";
import Slogan from "../../components/slogan";
import logo2 from "../../assets/images/royallogo2.jpg";
import "../home/home.css";
import Truckfront from "../../assets/images/truckfront.jpg";
import Truckside from "../../assets/images/truckside.jpg";
import Truckstop from "../../assets/images/Truckstop.jpg";
import Image from 'react-bootstrap/Image'
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
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  feugiat hendrerit lacus vitae dictum. Aliquam feugiat est
                  urna, at molestie nulla suscipit nec. Duis at lacus vehicula,
                  congue nisi vel, scelerisque tellus. Donec vel felis
                  ullamcorper, condimentum elit sed, tincidunt justo.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Praesent commodo sed mauris
                  eget egestas. Quisque eu rhoncus augue. Cras sit amet urna
                  convallis, blandit nisl id, consequat nunc. Pellentesque
                  faucibus lorem sed arcu imperdiet pharetra. Quisque risus
                  eros, blandit eget purus eu, laoreet porta mauris. Proin
                  vulputate, orci id porta egestas, nunc nisi suscipit nisi, et
                  finibus eros lectus ut enim. Vestibulum odio mi, ullamcorper
                  sed semper eu, mollis ut nunc. Duis quis libero leo. Mauris
                  lectus arcu, faucibus id dolor sed, vulputate fermentum nibh.
                </p>
             
              </div>
            </div>
          </div>
        </div>
        <div id="homecard" class="card mb-3" style={{ maxwidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  feugiat hendrerit lacus vitae dictum. Aliquam feugiat est
                  urna, at molestie nulla suscipit nec. Duis at lacus vehicula,
                  congue nisi vel, scelerisque tellus. Donec vel felis
                  ullamcorper, condimentum elit sed, tincidunt justo.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Praesent commodo sed mauris
                  eget egestas. Quisque eu rhoncus augue. Cras sit amet urna
                  convallis, blandit nisl id, consequat nunc. Pellentesque
                  faucibus lorem sed arcu imperdiet pharetra. Quisque risus
                  eros, blandit eget purus eu, laoreet porta mauris. Proin
                  vulputate, orci id porta egestas, nunc nisi suscipit nisi, et
                  finibus eros lectus ut enim. Vestibulum odio mi, ullamcorper
                  sed semper eu, mollis ut nunc. Duis quis libero leo. Mauris
                  lectus arcu, faucibus id dolor sed, vulputate fermentum nibh.
                </p>
             
              </div>
            </div>
            <div className="col-md-4">
              <img
                src={Truckstop}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
          </div>
        </div>
        <div id="homecard" class="card mb-3" style={{ maxwidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={Truckside}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  feugiat hendrerit lacus vitae dictum. Aliquam feugiat est
                  urna, at molestie nulla suscipit nec. Duis at lacus vehicula,
                  congue nisi vel, scelerisque tellus. Donec vel felis
                  ullamcorper, condimentum elit sed, tincidunt justo.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Praesent commodo sed mauris
                  eget egestas. Quisque eu rhoncus augue. Cras sit amet urna
                  convallis, blandit nisl id, consequat nunc. Pellentesque
                  faucibus lorem sed arcu imperdiet pharetra. Quisque risus
                  eros, blandit eget purus eu, laoreet porta mauris. Proin
                  vulputate, orci id porta egestas, nunc nisi suscipit nisi, et
                  finibus eros lectus ut enim. Vestibulum odio mi, ullamcorper
                  sed semper eu, mollis ut nunc. Duis quis libero leo. Mauris
                  lectus arcu, faucibus id dolor sed, vulputate fermentum nibh.
                </p>
             
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div>

        <Image id="homeimage" src={logo2} roundedCircle />
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Home;

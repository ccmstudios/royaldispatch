import React from "react";
import logo from "../../assets/images/royaltylogo.png";
import Image from "react-bootstrap/Image";
import test from "../../assets/images/test.jpg";
import "./about.css";

class About extends React.Component {
  render() {
    return (
      <div>
        This is About!
        <Image id="aboutimage" src={test} roundedCircle />
        <div>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel
            quam suscipit ante posuere tristique. Fusce non volutpat tellus, at
            commodo nisl. Nunc massa dolor, mattis at accumsan sit amet, tempus
            a erat. Donec et rhoncus sapien. Phasellus ut ligula massa. Cras
            consequat metus sapien, nec luctus lacus cursus id. Fusce mollis
            massa ante, vitae fermentum nisl gravida placerat. Nam accumsan
            ullamcorper risus pulvinar tempor. Nam et urna quam. Etiam luctus
            dui in risus blandit, ut pellentesque ex cursus. Nulla facilisi. Sed
            tempus gravida nisi at finibus. Phasellus erat quam, semper id
            vulputate eget, consequat sed leo. Sed viverra blandit auctor.
            Praesent sagittis sagittis lacus sed tempor. Ut eu dignissim ante.
            Duis a commodo ante. Integer rhoncus sit amet metus at vestibulum.
            Nulla eget bibendum purus. Ut lacinia feugiat mi quis maximus. Cras
            placerat arcu sit amet ante sagittis elementum. Fusce non mauris
            consectetur, volutpat magna non, viverra turpis. Sed sit amet tortor
            iaculis, rhoncus augue non, placerat metus. Donec at enim ac leo
            mollis commodo. In euismod suscipit ex, eget blandit magna congue a.
            Nam vitae libero lacinia, rutrum quam ut, posuere odio. Quisque
            tempor justo vel nibh rhoncus volutpat. Vestibulum ante ipsum primis
            in faucibus orci luctus et ultrices posuere cubilia curae;
          </h3>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default About;

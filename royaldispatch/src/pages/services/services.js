import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import logo from "../../assets/images/royaltylogo.png";

class Services extends React.Component {
  render() {
    return (
      <div id="services">
        <img src={logo} className="App-logo" alt="logo" />
        <CardGroup id="servicecards">
          <Card bg="dark" border='warning'>
            <Card.Img variant="top" src={logo} className="App-logo" />
            <Card.Body id="cardbody">
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                et metus augue. Vivamus risus eros, iaculis eget ex id,
                pellentesque aliquam nulla. Praesent accumsan eleifend lacus non
                elementum. Phasellus iaculis magna sed lacinia gravida. Fusce
                lacus libero, commodo sit amet felis in, vestibulum laoreet
                orci. Maecenas cursus, tortor aliquet consectetur varius, enim
                massa facilisis ligula, id elementum nulla turpis id purus.
                Quisque vehicula odio vitae consequat malesuada. Cras sapien
                risus, porta ut metus quis, sollicitudin porta libero. Etiam
                hendrerit sapien felis, tincidunt commodo arcu sodales non.
                Aenean efficitur sodales risus, quis viverra velit eleifend vel.
                Praesent tincidunt dictum consectetur. Quisque fringilla
                eleifend mi sit amet ornare. Mauris luctus ipsum quis ante
                tempor tristique. Duis fringilla mattis nulla id efficitur.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card bg="dark" border='warning'>
            <Card.Img variant="top" src={logo} className="App-logo" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                et metus augue. Vivamus risus eros, iaculis eget ex id,
                pellentesque aliquam nulla. Praesent accumsan eleifend lacus non
                elementum. Phasellus iaculis magna sed lacinia gravida. Fusce
                lacus libero, commodo sit amet felis in, vestibulum laoreet
                orci. Maecenas cursus, tortor aliquet consectetur varius, enim
                massa facilisis ligula, id elementum nulla turpis id purus.
                Quisque vehicula odio vitae consequat malesuada. Cras sapien
                risus, porta ut metus quis, sollicitudin porta libero. Etiam
                hendrerit sapien felis, tincidunt commodo arcu sodales non.
                Aenean efficitur sodales risus, quis viverra velit eleifend vel.
                Praesent tincidunt dictum consectetur. Quisque fringilla
                eleifend mi sit amet ornare. Mauris luctus ipsum quis ante
                tempor tristique. Duis fringilla mattis nulla id efficitur.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card bg="dark" border='warning'>
            <Card.Img variant="top" src={logo} className="App-logo" />
            <Card.Body id="cardbody">
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                et metus augue. Vivamus risus eros, iaculis eget ex id,
                pellentesque aliquam nulla. Praesent accumsan eleifend lacus non
                elementum. Phasellus iaculis magna sed lacinia gravida. Fusce
                lacus libero, commodo sit amet felis in, vestibulum laoreet
                orci. Maecenas cursus, tortor aliquet consectetur varius, enim
                massa facilisis ligula, id elementum nulla turpis id purus.
                Quisque vehicula odio vitae consequat malesuada. Cras sapien
                risus, porta ut metus quis, sollicitudin porta libero. Etiam
                hendrerit sapien felis, tincidunt commodo arcu sodales non.
                Aenean efficitur sodales risus, quis viverra velit eleifend vel.
                Praesent tincidunt dictum consectetur. Quisque fringilla
                eleifend mi sit amet ornare. Mauris luctus ipsum quis ante
                tempor tristique. Duis fringilla mattis nulla id efficitur.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
    );
  }
}

export default Services;

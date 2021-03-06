import React from "react";
import Tafslogo from "../assets/images/tafs.jpg";

class Tafs extends React.Component {
  render() {
    return (
      <div id='tafscomponent'>
        <img src={Tafslogo} id='tafs' alt="tafs" title="Tafs" />
        <h1 id='tafstext'>
          TAFS is a global leader in commercial finance. Our mission is to
          provide an unparalleled level of service to our diverse clientele, a
          competitive advantage to our partners, a success driven, multicultural
          environment for our team members and to empower each of them to
          achieve the highest level of success.
        </h1>
        <h2>
            <a href="https://go.tafs.com/l/166742/2021-10-18/4ptvdz?fbclid=IwAR0hPipC2DkhqgtTCff7niYGWgPOWA4Jh9S30d4xRzcC251gRwqwYV5YdOk" target="_blank" rel="noreferrer">
          {" "}
          REFERRAL LINK!{" "}
        </a>
            </h2>
        <h2>
            <a href="https://go.tafs.com/l/166742/2021-10-18/4ptwmz" target="_blank" rel="noreferrer">
          {" "}
          BUSINESS LINK!{" "}
        </a>
            </h2>
      </div>
    );
  }
}

export default Tafs;

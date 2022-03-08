import React from "react";
import fbook from '../assets/images/fbook.png'

class Facebook extends React.Component {
  render() {
    return (
      <div className="player-wrapper">
  
       <a href="https://www.facebook.com/RoyaltyDispatchServicesLLC/" target="_blank" ref='noreferrer'> <img className='socialicons' src ={fbook}/> </a>
      </div>
    );
  }
}

export default Facebook;

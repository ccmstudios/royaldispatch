import React from "react";
import fbook from '../assets/images/fbook.png'

class Facebook extends React.Component {
  render() {
    return (
      <div className="player-wrapper">
  
       <a href="https://www.facebook.com/RoyaltyDispatchServicesLLC/" target="_blank" rel='noreferrer'> <img className='socialicons' alt='FB Feeder'src ={fbook}/> </a>
      </div>
    );
  }
}

export default Facebook;

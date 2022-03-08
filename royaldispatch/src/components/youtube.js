import React from 'react'
import ReactPlayer from 'react-player'
import ytube from '../assets/images/ytube.png'

class Youtube extends React.Component{
    render(){
        return(
            <div className='player-wrapper'>

        <a href='https://www.youtube.com/watch?v=qYPWOjCnuuM' target="_blank" ref='noreferrer'><img className="socialicons" src = {ytube}/></a>
      </div>
        )
    }
}

export default Youtube;
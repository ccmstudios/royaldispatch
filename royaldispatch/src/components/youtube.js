import React from 'react'
import ytube from '../assets/images/ytube.png'

class Youtube extends React.Component{
    render(){
        return(
            <div className='player-wrapper'>

        <a href='https://www.youtube.com/watch?v=qYPWOjCnuuM' target="_blank" rel='noreferrer'><img className="socialicons" alt='YT Feeder'src = {ytube}/></a>
      </div>
        )
    }
}

export default Youtube;
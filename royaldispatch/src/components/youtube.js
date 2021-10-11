import React from 'react'
import ReactPlayer from 'react-player'


class Youtube extends React.Component{
    render(){
        return(
            <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=qYPWOjCnuuM'
          width='500px'
          height='500px'
        />
      </div>
        )
    }
}

export default Youtube;
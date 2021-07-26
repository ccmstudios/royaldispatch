import React from 'react'
import logo from '../../assets/images/royaltylogo.png'

class About extends React.Component{
    render(){
        return(
            <div>
                This is About!
                <img src={logo} className="App-logo" alt="logo" />

            </div>
        )
    }
}

export default About;
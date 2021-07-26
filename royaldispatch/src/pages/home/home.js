import React from 'react'
import Header from '../../components/header';
import logo from '../../assets/images/royaltylogo.png'

class Home extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                This is Home!
                <img src={logo} className="App-logo" alt="logo" />

            </div>
        )
    }
}

export default Home;
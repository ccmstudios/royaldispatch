import React from 'react'
import Header from '../../components/header';
import logo from '../../assets/images/royaltylogo.png'
import Slogan from '../../components/slogan';
import logo2 from '../../assets/images/royallogo2.jpg'
import '../home/home.css'

class Home extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Slogan/>
                This is Home!
                <img src={logo} className="App-logo" alt="logo" />
                <img src ={logo2} id='logo2'alt ='secondary Logo'/>

            </div>
        )
    }
}

export default Home;
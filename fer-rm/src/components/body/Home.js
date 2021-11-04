import React, { Component } from 'react';
//import logo from './../../images/logo.svg';
import Logo from '../../images/Logo';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <div>
                {/* <img src={`${process.env.PUBLIC_URL}` + logo} className="App-logo" alt="logo" /> */}
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <Logo />
            </div>
        );
    }
}

export default Home;
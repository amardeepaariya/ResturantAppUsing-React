import React, { Component } from 'react';
import NavBarManu from './NavBarManu';

class Home extends Component {
    render() {
        return (
            <div>
                <NavBarManu />
                <h1>Home</h1>
                <h2>WELCOME TO DeepRestaurant Online App</h2>
            </div>
        );
    }
}

export default Home;
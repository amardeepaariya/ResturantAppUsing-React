import React, { Component } from 'react';

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {

        return this.state.isLoggedIn && <div>Welcome Amardeep</div>

        // return(
        //     this.state.isLoggedIn ?
        //     <div>Welcome Amardeep</div> :
        //     <div>Welcome Ruchi</div>
        // )

        // let message
        // if(this.state.isLoggedIn) {
        //     message = <div>Welcome Amardeep</div>
        // }else{
        //     message = <div>Wedlcome Ruchi</div>
        // }

        // return <div>{message}</div>

        // if(this.state.isLoggedIn) {
        //     return <div>Welcome Amardeep</div>
        // }else{
        //     return <div>Welcome Ruchi</div>
        // }

        // return(
        //     <div>
        //         <div>Welcome Amardeep</div>
        //         <div>Welcome Ruchi</div>
        //     </div>
        // )
    }
}

export default UserGreeting;
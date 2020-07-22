import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            topic: 'react'
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }   

    handleCommentsChange = event => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChane = event => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }

    render() {
        //const{username, comments, topic} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.handleTopicChane}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="java">Java</option>
                    </select>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default Form;
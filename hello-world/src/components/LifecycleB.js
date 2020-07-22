import React, { Component } from 'react';

class LifecycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Amardeep'
        }
        console.log('LifecycleB constroctor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleB componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifecycleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleB shouldComponentUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifecycleB componentDidUpdate')
    }

    render() {
        console.log('LifecycleB render')
        return<div>Lifecycle B</div>
    }
}

export default LifecycleB;
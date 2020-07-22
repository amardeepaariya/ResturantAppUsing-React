import React, { component, Component } from 'react';
import UpdatedCounter from './withCounter';
import UpdatedComponent from './withCounter';

class ClickCounter extends Component {

    render() {
        const { count, incrementCount} = this.props
        return (
            <div>
                <button onClick={incrementCount}>Click {count} Times</button>
            </div>
        )
    }
}

export default UpdatedComponent(ClickCounter);
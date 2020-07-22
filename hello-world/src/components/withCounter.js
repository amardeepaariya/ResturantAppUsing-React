import React from 'react';

const UpdatedComponent = OriginalComponet => {
    class NewComponent extends React.Component {
        constructor(props) {
            super(props)
    
            this.state = {
                count: 0
            }
        }
    
        incrementCount = () => {
            this.setState( prevState => {
                return{count: prevState.count + 1}
            })
        }
        render() {
            return <OriginalComponet count={this.state.count} incrementCount={this.incrementCount} />
        }
    }
    return NewComponent;
}

export default UpdatedComponent;
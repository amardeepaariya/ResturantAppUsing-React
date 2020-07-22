import React from 'react';

const Hello = () => {
    // return(
    //     <div className: 'dummyClass'>
    //         <h1>Hello Amardeep Kumar</h1>
    //     </div>
    // )

    return React.createElement(
        'div',
        {id: 'hello', className: 'dummyClass'},
        null,
        React.createElement('h1', null, 'Hello Ruchi..')
    )
}

export default Hello;
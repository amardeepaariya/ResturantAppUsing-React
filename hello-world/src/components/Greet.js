import React from 'react';

// function Greet(){
//     return<h1>Hello Amardeep</h1>
// }

const Greet = props => {
    const {name, heroName} = props
   // console.log(props)
return (
    <div>
        <h1>Hello {name} Hey {heroName}</h1>
        {props.children}
    </div>
  )
}

export default Greet;
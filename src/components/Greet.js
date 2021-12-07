import React from 'react'

// function Greet(){
//     return <h1>Hello Rajesh</h1>
// }

// Greet function using Es6

const Greet = props => {

 return <h1> Hello {props.name} {props.role}</h1>
}
export default Greet
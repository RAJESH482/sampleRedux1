import React from 'react'

const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello Rajaesh Salam Vanakkam</h1>
    //         <p>Welcome to Acs solutions..</p>
    //     </div>
    // )

    // Re-writing the code without using jsx file
    return React.createElement(
        'div',
        null,
        React.createElement('h1',null,'Hello Rajesh')
    )
}
export default Hello
import React, {useState} from "react";

function UseStateHook1(){
    const initialcount = 0
    const [count, setCount]= useState(initialcount)
    return(
        <div>
            Count: {count}
            <button onClick= {() => setCount(initialcount)}>Reset</button>
            <button onClick= {() => setCount(count + 1)}>Increment</button>
            <button onClick= {() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}
export default UseStateHook1
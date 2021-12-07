import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import CakeReducer from "./CakeReducer";
import buyCake from "./CakeAction"


function CakeSelector (){
    const {numofCakes} = useSelector(({CakeReducer}) => CakeReducer)
    const dispatch = useDispatch()
    const activateLasers = () => {console.log('hello')};
    return(
        <div>
            <h1>Num of Cakes - {numofCakes}</h1>
            <button onClick={activateLasers}>  Activate Lasers</button>
        </div>
    )
}
export default CakeSelector
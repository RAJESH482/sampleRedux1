import React from "react";
import {useSelector} from 'react-redux'
import CakeReducer from "./CakeReducer";

function CakeSelector (){
    const {numofCakes} = useSelector(({CakeReducer}) => CakeReducer)
    return(
        <div>
            <h1>Num of Cakes - {numofCakes}</h1>
            <button> Buy Cake </button>
        </div>
    )
}
export default CakeSelector
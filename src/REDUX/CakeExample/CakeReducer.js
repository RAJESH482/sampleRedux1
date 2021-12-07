import { BUY_CAKE } from "./CakeType"

const initialState ={
    numofCakes: 10
}
// let x
// let state = x || initialState

const CakeReducer = (state = initialState, action) =>{
    console.log(state,initialState)
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numofCakes: state.numofCakes - 1

        }
        default: return state
    }

}
export default CakeReducer
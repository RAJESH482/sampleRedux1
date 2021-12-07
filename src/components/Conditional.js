import React, {Component} from 'react'

class Conditional extends Component {
    constructor(props) {
        super(props)

        this.state ={
            isLoggedIn: true
        }
    }
    render(){
        // short circuit operator
        return this.state.isLoggedIn && <div>Welcome Rajesh</div>


        // Ternary Conditional operator


        // return this.state.isLoggedIn ? (
        //     <div>Welcome Rajesh</div> 
        // ): (
        //     <div>Welcome Guest</div>
        // )


        // Element variables Example


        // let Message
        // if(this.state.isLoggedIn){
        //     Message = <div>Welcome Rajesh</div>
        // }
        // else{
        //     Message = <div>Welcome Guest</div>
        // }
        // return <div>{Message}</div>



        // if else example


    //     if(this.state.isLoggedIn){
    //         return <div> Welcome Rajesh</div>
    //     }
    //     else{
    //         return <div> Welcome Guest</div>
    //     }
    // }

}
}
export default Conditional
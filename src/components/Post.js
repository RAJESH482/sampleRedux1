import React, {Component} from 'react'
import axios from 'axios'

class Post extends Component {
    constructor(props){
        super(props)

        this.state = {
            userId:"",
            title:"",
            body:""

        }
    } 
    
    changeHandler = (e) =>{
        this.setState({
            [e.target.name] : [e.target.value]
        })
    }
    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
    }
    render(){
        const {userId, title, body} = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="userId" value={this.userId} onChange = {this.onChangeHandler}></input>
                    </div>
                        <div>
                        <input type="text" name="title" value={this.title} onChange={this.onChangeHandler}></input>
                    </div>
                    <div>
                        <input type="text" name="body" value={this.body} onChange={this.onChangeHandler}></input>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default Post
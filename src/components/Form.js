import React, {Component} from 'react'

class Form extends Component {
    constructor(props){
        super(props)

        this.state = {
            username:'',
            comments:'',
            Topic:'React'
        }
    }
    handleUsernameChange = (event) =>{
        this.setState({
            username:event.target.value
        })
    }
    handleCommentsChange = (event) =>{
        this.setState({
            comments:event.target.value
        })
    }
    handleTopicChange = (event) =>{
        this.setState({
            Topic:event.target.value
        })
    }
    handleSubmit = (event) =>{
        alert(`${this.state.username} , ${this.state.comments} , ${this.state.Topic}`)
        event.preventDefault()
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
                </div>
                <div>
                    <label>comments:</label>
                    <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
                </div>
                <div>
                    <label>Topic:</label>
                    <select value={this.state.Topic} onChange={this.handleTopicChange}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        )
    }

}
export default Form
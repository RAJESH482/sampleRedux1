import React , {Component} from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ParentName: "Rajesh"
        }
        this.greetParent = this.greetParent.bind(this)
    }
    greetParent() {
        alert(`Hello ${this.state.ParentName}`)
    }
    render(){
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent} />
            </div>
        )
    }
}
export default ParentComponent
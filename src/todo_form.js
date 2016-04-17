import React, {Component} from 'react'
import ReactDom from 'react-dom'

export default class TodoForm extends Component {
    constructor() {
        super()
        this.onClickButton = this.onClickButton.bind(this) // ES2015 or upper
    }
    
    onClickButton() {
        this.props.onHandleAddTodo(
            this.refs.inputTodo.value　// instead of React.findDOMNode(this.refs.inputTodo)
        )
        this.refs.inputTodo.value = ""
    }
    
    render() {
        return (
             <form>
                <input
                type="text"
                placeholder="do something..."
                ref="inputTodo"
                 />
                 <input 
                 type="button"
                 value="add todo"
                 onClick={this.onClickButton}
                 />
             </form>
        )
    }
}
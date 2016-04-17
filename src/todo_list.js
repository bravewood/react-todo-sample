import React, {Component} from 'react'
import Todo from './todo.js'

export default class TodoList extends Component {
    render() {
        let rows = []
        let todoCount = 0
        this.props.todoList.forEach(function(todo) {
            rows.unshift(<Todo key={todoCount} todo={todo} />)
            todoCount++
        }.bind(this))
        
        return (
             <ul>
                {rows}  
             </ul>
        )
    }
}
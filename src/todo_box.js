import React, {Component} from 'react'
import TodoList from './todo_list.js'
import TodoForm from './todo_form.js'

export default class TodoBox extends Component {
    constructor() {
        super()
        this.state = {
            todoList: []
        }
        this.handleAddTodo = this.handleAddTodo.bind(this) // ES2015 or upper
    }
    
    handleAddTodo(todo) {
        let todos = this.state.todoList
        todos.push(todo)
        this.setState({
            todoList: todos
        })
    }
    
    render() {
        return (
            <div>
                <h1>Todo</h1>
                <TodoForm
                    onHandleAddTodo={this.handleAddTodo}
                />
                <TodoList
                    todoList={this.state.todoList}
                />
            </div>
        )
    }
}
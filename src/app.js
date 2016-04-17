import React from 'react'
import ReactDom from 'react-dom'
import TodoBox from './todo_box.js'

window.App = {
    render:  () => {
        ReactDom.render(
            <TodoBox />,
            document.getElementById('todo')
        )
    }
}
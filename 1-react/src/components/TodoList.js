import React from "react"

class TodoList extends React.Component {

    getTodosWithVisibility(v) {
        switch (v) {
            case "ACTIVE":
                return this.props.todos.filter(todo => !todo.completed)
            case "COMPLETED":
                return this.props.todos.filter(todo => todo.completed)
            default:
                return this.props.todos
        }
    }


    render() {
        return (
            <ul style={{ listStyleType: "none" }}>
                {
                    this.getTodosWithVisibility(this.props.visibility).map(todo =>
                        <li key={todo.id}><input type="checkbox" checked={todo.completed} onChange={() => this.props.toggleTodo(todo.id)} />
                            <span style={todo.completed ? { textDecoration: "line-through" } : null}>
                                {todo.title}
                            </span>
                        </li>
                    )

                }
            </ul>)
    }
}

export default TodoList

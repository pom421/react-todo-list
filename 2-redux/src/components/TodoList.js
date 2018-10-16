import React from "react"
import { connect } from "react-redux"
import { toggleTodo } from "../redux/actions"

class TodoList extends React.Component {

    getTodosWithVisibility(v) {

        const { todos } = this.props

        switch (v.toUpperCase()) {
            case "ACTIVE":
                return todos.filter(todo => !todo.completed)
            case "COMPLETED":
                return todos.filter(todo => todo.completed)
            default:
                return todos
        }
    }

    render() {

        const { visibility, toggleTodo } = this.props
        return (
            <ul style={{ listStyleType: "none" }}>
                {
                    this.getTodosWithVisibility(visibility).map(todo =>
                        <li key={todo.id}><input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
                            <span style={todo.completed ? { textDecoration: "line-through" } : null}>
                                {todo.title}
                            </span>
                        </li>
                    )

                }
            </ul>)
    }
}

const mapStateToProps = ({ todos, visibility }) => ({
    todos,
    visibility
})

const mapDispatchToProps = (dispatch) => ({
    toggleTodo: (id) => dispatch(toggleTodo(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

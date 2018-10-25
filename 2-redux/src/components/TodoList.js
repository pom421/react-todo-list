import React from "react"
import { connect } from "react-redux"
import { toggleTodo } from "../redux/actions"
import Todo from "./Todo"

class TodoList extends React.Component {

    getTodosWithVisibility(visibility) {

        const { todos } = this.props

        switch (visibility.toUpperCase()) {
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
            <ul>
                {
                    this.getTodosWithVisibility(visibility).map(todo =>

                        <Todo key={todo.id} id={todo.id} completed={todo.completed} title={todo.title} onChange={() => toggleTodo(todo.id)} title={todo.title} />

                    )

                }
            </ul>)
    }
}

const mapStateToProps = ({ todos, visibility }) => ({
    todos,
    visibility
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

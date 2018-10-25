import React from "react"

class Todo extends React.Component {

    render() {

        const { completed, id, title, onChange } = this.props

        return (
            <li style={completed ? { textDecoration: "line-through" } : null}>
                <input type="checkbox" checked={completed} onChange={() => onChange(id)} />
                {title}
            </li>
        )
    }
}

export default Todo

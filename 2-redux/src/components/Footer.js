import React from "react"
import { connect } from "react-redux"

import { clear } from "../redux/actions"

class Footer extends React.Component {

    render() {

        const { leftTodos, clear } = this.props

        return (
            <div>
                {leftTodos} items left

                <button onClick={clear} style={{ marginLeft: 20 }}>Clear completed</button>
            </div>
        )
    }
}

const mapStateToProps = ({ todos }) => ({
    leftTodos: todos.filter(todo => !todo.completed).length
})

const mapDispatchToProps = dispatch => ({
    clear: () => dispatch(clear())
})

export default connect(mapStateToProps, mapDispatchToProps)(Footer)

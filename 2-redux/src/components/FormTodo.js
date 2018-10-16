import React from "react"
import { connect } from "react-redux"

import { addTodo } from "../redux/actions"

class FormTodo extends React.Component {
    state = {
        content: ""
    }

    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }

    componentDidMount() {
        this.inputRef.current.focus()
    }

    handleChange(e) {
        this.setState({
            content: e.target.value
        })
    }

    handleKeyPressed(e) {
        console.log("key", e.key)
        if (e.key === "Enter" && this.state.content) {
            this.props.handleSubmit(this.state.content)
            this.setState({
                content: ""
            })
        }
    }

    render() {
        return (
            <input ref={this.inputRef} placeholder="Add task" value={this.state.content} onChange={(e) => this.handleChange(e)} onKeyPress={(e) => this.handleKeyPressed(e)} />
        )
    }
}

const mapDispatchToProps = dispatch => ({
    handleSubmit: (title) => dispatch(addTodo(title))
})

export default connect(null, mapDispatchToProps)(FormTodo)

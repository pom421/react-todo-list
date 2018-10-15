import React from "react"

class FormTodo extends React.Component {
    state = {
        content: "Youpi"
    }

    handleChange(e) {
        this.setState({
            content: e.target.value
        })
    }

    handleKeyPressed(e) {
        console.log("key", e.key)
        if (e.key === "Enter") {
            this.props.handleSubmit(this.state.content)
            this.setState({
                content: ""
            })
        }
    }

    render() {
        return (
            <input placeHolder="Add a new todo" value={this.state.content} onChange={(e) => this.handleChange(e)} onKeyPress={(e) => this.handleKeyPressed(e)} />
        )
    }
}

export default FormTodo

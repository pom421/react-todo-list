import React from "react"

class Footer extends React.Component {

    render() {

        const {leftTodos, clear } = this.props

        return (
            <div>
                {leftTodos.length} items left.

                <button onClick={clear} style={{ marginLeft: 20 }}>Clear completed</button>
            </div>
            )
    }
}

export default Footer

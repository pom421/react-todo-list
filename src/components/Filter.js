import React from "react"

const STATES = [ "All", "Active", "Completed"]

class Filter extends React.Component {

    render() {
        return (
            <ul >
                {STATES.map((state, key) =>
                    <li key={key} style={{ display: "inline", marginRight: 10 }} onClick={() => this.props.setVisibility(state)}>
                        <span style={this.props.value.toLowerCase() === state.toLowerCase() ? { backgroundColor: "red" } : null}>
                            {state}
                        </span>
                    </li>
                )}
            </ul>)
    }
}

export default Filter

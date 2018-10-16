import React from "react"
import { connect } from "react-redux"

import { setVisibility } from "../redux/actions"

const TYPES = ["All", "Active", "Completed"]

class Filter extends React.Component {

    render() {

        const { visibility, setVisibility } = this.props

        return (
            <ul >
                {TYPES.map((type, key) =>
                    <li key={key} style={{ display: "inline", marginRight: 10 }} onClick={() => setVisibility(type)}>
                        <span style={visibility.toLowerCase() === type.toLowerCase() ? { backgroundColor: "red" } : null}>
                            {type}
                        </span>
                    </li>
                )}
            </ul>)
    }
}

const mapStateToProps = ({ visibility }) => ({
    visibility
})

const mapDispatchToProps = dispatch => ({
    setVisibility: (type) => dispatch(setVisibility(type))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)

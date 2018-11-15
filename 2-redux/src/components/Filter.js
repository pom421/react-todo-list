import React from "react"
import { connect } from "react-redux"

import { setVisibility } from "../redux/actions"

const TYPES = ["All", "Active", "Completed"]

class Filter extends React.Component {
    static style = {
        padding: "3px 5px",
        borderRadius: "5px",
        display: "inline",
        marginRight: 10
    }

    getColor = (type, visibility) => {
        return visibility.toLowerCase() !== type.toLowerCase() ? Filter.style : { ...Filter.style, ...{ backgroundColor: "red" } }
    }

    render() {

        const { visibility, setVisibility } = this.props

        return (
            <ul>
                {TYPES.map((type, key) =>
                    <li style={this.getColor(type, visibility)} key={key} onClick={() => setVisibility(type)}>
                        {type}
                    </li>
                )}
            </ul>)
    }
}

const mapStateToProps = ({ visibility }) => ({
    visibility
})

const mapDispatchToProps = dispatch => ({
    setVisibility: type => dispatch(setVisibility(type))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)

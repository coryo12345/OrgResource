import React, { Component } from 'react'
import { Section } from './Section'

export class SideBar extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // get list of entity modules
    }

    render() {
        return (
            <div style={Object.assign({}, outerStyle, this.props.style)}>
                <Section updatePage={this.props.updatePage} title="Pages" endpoint="/api/web/entity/pages" settings={{method: 'get'}} collapsedDefault={false} />
            </div >
        )
    }
}

const outerStyle = {
    boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
    marginRight: '10px',
    padding: '10px'
}

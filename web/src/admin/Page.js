import React, { Component } from 'react'

export class Page extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                {this.props.page}
            </div>
        )
    }
}

import React, { Component } from 'react'

export class SideBar extends Component {
    constructor(props) {
        super(props)
        this.state = { pages: [] } // [{id, name}, {id, name}]
    }

    componentDidMount() {
        fetch('/api/web/entity/pages', { method: 'get' })
            .then((resp) => {
                if (!resp.ok)
                    throw Error('')
                return resp.json()
            })
            .then((resp) => {
                console.log(resp)
                this.setState({ pages: resp })
            })
            .catch((err) => { console.log(err) })
        // ^^ Here could show connection error ^^
    }

    render() {
        return (
            <div style={Object.assign({}, outerStyle, this.props.style)}>
                {this.state.pages && this.state.pages.map((val, key) => {
                    return <p key={val.id}>{val.display_name}</p>
                })}
            </div>
        )
    }
}

const outerStyle = {
    boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
    marginRight: '10px',
    padding: '10px'
}
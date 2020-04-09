import React, { Component } from 'react'
import { Section } from './Section'

export class SideBar extends Component {
    constructor(props) {
        super(props)
        this.state = { resources: null, users: null, settings: null }
    }

    componentDidMount() {
        fetch('/api/web/entity/modules', { method: 'get' })
            .then((resp) => {
                if (!resp.ok)
                    throw Error('')
                return resp.json()
            })
            .then((resp) => {
                let st = {}
                resp.forEach(module => {
                    st[module.name] = { display: module.display_name }
                });
                this.setState(st)
            })
            .catch((err) => { console.error(err) })
    }

    render() {
        var resources = this.state.resources ? <Section updatePage={this.props.updatePage} title={this.state.resources.display} endpoint="/api/web/entity/pages" settings={{ method: 'get' }} collapsedDefault={false} /> : <div></div>
        var users = this.state.users ? <Section updatePage={this.props.updatePage} title={this.state.users.display} endpoint="/api/web/entity/pages" settings={{ method: 'get' }} collapsedDefault={true} /> : <div></div>
        var settings = this.state.settings ? <Section updatePage={this.props.updatePage} title={this.state.settings.display} endpoint="/api/web/entity/pages" settings={{ method: 'get' }} collapsedDefault={true} /> : <div></div>
        return (
            <div style={Object.assign({}, outerStyle, this.props.style)}>
                {resources}
                {users}
                {settings}
            </div >
        )
    }
}

const outerStyle = {
    boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
    marginRight: '10px',
    padding: '10px'
}

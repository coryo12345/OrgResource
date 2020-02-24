import React, { Component } from 'react'
import { TopBar } from './TopBar'

export class Admin extends Component {
    constructor(props) {
        super(props)
        this.state = { entity: null, entityDisplayName: null }
    }

    componentDidMount() {
        fetch('/api/web/entity/info', { method: 'get' })
            .then((resp) => {
                if (!resp.ok)
                    throw Error('')
                return resp.json()
            })
            .then((resp) => {
                this.setState({ entity: resp.domain, entityDisplayName: resp.display_name })
            })
            .catch((err) => { 
                window.location = '/'
             })
        // ^^ Here could show connection error ^^
    }

    render() {
        return (
            <div>
                <TopBar></TopBar>
                <p>Admin Interface</p>
                <p>{this.state.entity}</p>
                <p>{this.state.entityDisplayName}</p>
            </div>
        )
    }
}

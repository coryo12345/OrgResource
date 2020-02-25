import React, { Component } from 'react'
import { Button } from '@material-ui/core'

export class Logout extends Component {
    constructor(props) {
        super(props)
        this.logout = this.logout.bind(this)
        this.state = { loggedIn: false }
    }

    componentDidMount() {
        fetch('/api/web/auth/login', { method: 'get' })
            .then((resp) => {
                if (!resp.ok)
                    throw Error('')
                return resp.json()
            })
            .then((resp) => {
                if (resp.loggedIn !== null)
                    this.setState({ loggedIn: resp.loggedIn })
            })
            .catch((err) => { return })
        // ^^ Here could show connection error ^^

    }

    logout() {
        this.setState({ loggedIn: false })
        fetch('/api/web/auth/logout', { method: 'get' })
        window.location = '/'
    }

    render() {
        if (this.state.loggedIn === true) {
            return (
                <div>
                    <Button variant="contained" color="secondary" onClick={this.logout}>Logout</Button>
                </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }
}

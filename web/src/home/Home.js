// TODO: home page layout stuff ( get rid of formatting in App)

import React, { Component } from 'react'
import { Login } from './Login'
import { Layout } from '../Layout'
import { Button, Input, Box } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom"

export class Home extends Component {
    constructor(props) {
        super(props)
        this.login = this.login.bind(this)
        this.state = { loggedIn: false, entity: '' }
    }

    componentDidMount() {
        fetch('/api/web/auth/login', { method: 'get' })
            .then((resp) => {
                if (!resp.ok)
                    throw Error('')
                return resp.json()
            })
            .then((resp) => {
                if(resp.loggedIn === true && resp.entity)
                    window.location = "/admin"
                this.setState({ loggedIn: resp.loggedIn, entity: resp.entity })
            })
            .catch((err) => { return })
        // ^^ Here could show connection error ^^
    }

    login(entity) {
        window.location = "/admin"
        this.setState({ loggedIn: true, entity: entity })
    }

    render() {
        return (
            <Layout style={this.props.s}>
                <h1 style={{ color: "#3f51b5" }}>OrgR</h1>
                <Login login={this.login}></Login>
            </Layout>
        )
    }
}

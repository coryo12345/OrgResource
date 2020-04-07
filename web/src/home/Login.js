import React, { Component } from 'react'
import { Button, Input, Box } from '@material-ui/core'
import { Alert } from '@material-ui/lab'

export class Login extends Component {
    constructor(props) {
        super(props)
        this.login = this.login.bind(this)
        this.domainChange = this.domainChange.bind(this)
        this.userChange = this.userChange.bind(this)
        this.passChange = this.passChange.bind(this)
        this.state = { domainText: '', userText: '', passText: '', failed: false, error: false }
    }

    login(ev) {
        ev.preventDefault()
        fetch('/api/web/auth/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                entity: this.state.domainText,
                username: this.state.userText,
                password: this.state.passText
            })
        }).then((resp) => {
            if (!resp.ok)
                throw Error('')
            return resp.json()
        }).then((resp) => {
            if (resp.loggedIn === true) {
                this.setState({ failed: false, error: false })
                this.props.login(resp.entity)
            }
            else {
                this.setState({ failed: true, error: false })
            }
        }).catch((err) => {
            this.setState({ error: true, failed: false })
        })
    }

    domainChange(event) {
        this.setState({ domainText: event.target.value })
    }

    userChange(event) {
        this.setState({ userText: event.target.value })
    }

    passChange(event) {
        this.setState({ passText: event.target.value })
    }

    render() {
        const failed = (this.state.failed) ? <Alert style={loginMargin} severity="error">Login Failed</Alert> : <div></div>
        const error = (this.state.error) ? <Alert style={loginMargin} severity="warning">Can't Connect to Servers. Try again later.</Alert> : <div></div>
        return (
            <div>
                {failed}
                {error}
                <form style={formStyle} onSubmit={this.login}>
                    <Input style={loginMargin} type="text" color="primary" onChange={this.domainChange} value={this.state.domainText} placeholder="Domain"></Input>
                    <Input style={loginMargin} type="text" color="primary" onChange={this.userChange} value={this.state.userText} placeholder="Username"></Input>
                    <Input style={loginMargin} type="password" color="primary" onChange={this.passChange} value={this.state.passText} placeholder="Password"></Input>
                    {/* <Button style={loginMargin} variant="contained" color="primary" onClick={this.login}>Login</Button> */}
                    <Input type="submit" value="Login"/>
                </form>
            </div>
        )
    }
}

const formStyle = {
    minWidth: "300px",
    background: "#fff",
    // border: "1px solid #000",
    boxShadow: "0 0 15px 1px #ddd",
    borderRadius: ".6em",
    padding: "1em"
}

const loginMargin = {
    margin: "1em auto 1em auto",
    display: "block",
    textAlign: "center"
}
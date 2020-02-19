import React, { Component } from 'react'
import { Login } from './home/Login'
import { Layout } from './Layout'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"

export class App extends Component {
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
                this.setState({ loggedIn: resp.loggedIn, entity: resp.entity })
            })
            .catch((err) => { return })
        // ^^ Here could show connection error ^^
    }

    login(entity) {
        this.setState({ loggedIn: true, entity: entity })
        window.location = "/admin"
    }

    render() {
        return (
            <Router style={pageStyle}>
                <Switch>
                    <Route path="/">
                        <Layout style={pageStyle}>
                            <h1 style={{color:"#3f51b5"}}>OrgR</h1>
                            <Login login={this.login}></Login>
                        </Layout>
                    </Route>
                    <Route path="/admin">
                        <Layout>
                            <div>Admin Interface</div>
                        </Layout>
                    </Route>
                </Switch>
            </Router>
        )
    }
}

const pageStyle = {
    minHeight: "100vh",
    width: "100vw"
}